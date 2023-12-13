import { Paper, Button } from '@mui/material';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { autocompletion } from '@codemirror/autocomplete';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Stack from '@mui/material/Stack';
import { prettifyQuery } from './QueryEditor.utils1';

const QueryEditor: React.FC = () => {
  const initialText: string = `# Welcome to GraphiQL
  #
  # GraphiQL is an in-browser tool for writing, validating, and
  # testing GraphQL queries.
  `;
  const [query, setQuery] = useState(initialText);

  const handlePrettifyClick = () => {
    const prettyQuery = prettifyQuery(query);
    setQuery(prettyQuery);
  };

  return (
    <Paper>
      <div className="bg-zinc-700">
        <Stack direction="row" spacing={2}>
          <Button
            color="secondary"
            size="small"
            variant="outlined"
            startIcon={<PlayCircleOutlineOutlinedIcon />}
          >
            Run Query
          </Button>
          <Button
            color="secondary"
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
        height="600px"
        theme={okaidia}
        extensions={[graphql(), syntaxHighlighting(oneDarkHighlightStyle), autocompletion()]}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={(value) => setQuery(value)}
      />
    </Paper>
  );
};

export default QueryEditor;
