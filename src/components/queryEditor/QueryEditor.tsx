import { Paper, Button } from '@mui/material';
import { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { autocompletion } from '@codemirror/autocomplete';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { prettifyQuery } from './QueryEditor.utils';
import { GraphiQLService } from '../../services/GraphiQLService';
import { AppContext } from '../../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import { dictionary } from '../../localization/useLanguage';

const QueryEditor: React.FC = () => {
  const initialText: string = `# Welcome to GraphiQL
  #
  # GraphiQL is an in-browser tool for writing, 
  # validating and testing GraphQL queries.
  `;
  const [query, setQuery] = useState(initialText);
  const { setQueryResult, variables, lang } = useContext(AppContext);

  const handlePrettifyClick = () => {
    const prettyQuery = prettifyQuery(query);
    setQuery(prettyQuery);
  };

  const handleRunQuery = async () => {
    if (GraphiQLService.baseURL === 'no URL') {
      toast.error(dictionary.toastEmptyQuery[lang], { position: 'top-right' });
      return;
    }
    try {
      const response = await GraphiQLService.runQuery(query, variables);
      const data = JSON.stringify(response);
      setQueryResult(prettifyQuery(data));
    } catch {
      setQueryResult('');
      toast.warn(dictionary.toastWrongQuery[lang], { position: 'top-right' });
    }
  };

  return (
    <Paper>
      <div className="bg-zinc-700">
        <Stack direction="row" spacing={2}>
          <Button
            type="submit"
            color="primary"
            size="small"
            variant="outlined"
            onClick={handleRunQuery}
            startIcon={<PlayCircleOutlineOutlinedIcon />}
          >
            Run Query
          </Button>
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={handlePrettifyClick}
            startIcon={<AutoFixHighOutlinedIcon />}
          >
            Prettify
          </Button>
        </Stack>
      </div>
      <CodeMirror
        height="350px"
        theme={okaidia}
        extensions={[graphql(), syntaxHighlighting(oneDarkHighlightStyle), autocompletion()]}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={(value) => setQuery(value)}
      />
      <ToastContainer />
    </Paper>
  );
};

export default QueryEditor;
