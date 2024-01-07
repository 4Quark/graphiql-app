import { Paper, Button } from '@mui/material';
import { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { prettifyQuery } from './QueryEditor.utils';
import { GraphiQLService } from '../../services/GraphiQLService';
import { AppContext } from '../../context/ContextProvider';
import { toast } from 'react-toastify';
import { dictionary } from '../../localization/useLanguage';

const QueryEditor: React.FC = () => {
  const initialText: string = `# Welcome to GraphiQL
  #
  # GraphiQL is an in-browser tool for writing, 
  # validating and testing GraphQL queries.
  `;
  const [query, setQuery] = useState(initialText);
  const { headersValue, setQueryResult, variables, lang } = useContext(AppContext);

  const handlePrettifyClick = () => {
    const prettyQuery = prettifyQuery(query);
    setQuery(prettyQuery);
  };

  const buildHeaders = () => {
    const myHeaders: HeadersInit = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    if (headersValue !== '') {
      const headersString: string = headersValue;
      const headersArray = headersString.split('\n');
      headersArray.map((header) => {
        const regex = /([^:]+):(.+)/;
        const result = header.match(regex);
        if (result) {
          myHeaders.append(result[1], result[2]);
        } else {
          toast.warn(dictionary.toastWrongHeader[lang], { position: 'top-right' });
        }
      });
    }
    return myHeaders;
  };

  const handleRunQuery = async () => {
    if (GraphiQLService.baseURL === 'no URL') {
      toast.error(dictionary.toastEmptyQuery[lang], { position: 'top-right' });
      return;
    }
    try {
      const response = await GraphiQLService.runQuery(query, variables, buildHeaders());
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
            {dictionary.runQuery[lang]}
          </Button>
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={handlePrettifyClick}
            startIcon={<AutoFixHighOutlinedIcon />}
          >
            {dictionary.prettify[lang]}
          </Button>
        </Stack>
      </div>
      <CodeMirror
        height="350px"
        theme={okaidia}
        extensions={[graphql(), syntaxHighlighting(oneDarkHighlightStyle)]}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={(value) => setQuery(value)}
      />
    </Paper>
  );
};

export default QueryEditor;
