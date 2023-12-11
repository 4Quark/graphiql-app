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

const QueryEditor: React.FC = () => {
  const [query, setQuery] = useState('');

  const handlePrettifyClick = () => {
    const prettyQuery = prettifyQuery(query);
    setQuery(prettyQuery);
  };

  const prettifyQuery = (query: string): string => {
    let indentLevel = 0;
    let formattedQuery = '';
    const lines = query.split('\n');

    for (const originalLine of lines) {
      const trimmedLine = originalLine.trim();

      if (trimmedLine === '') continue;

      let lineToAdd = trimmedLine;

      if (trimmedLine.startsWith('}') && indentLevel > 0) {
        indentLevel--;
      }

      lineToAdd = '  '.repeat(indentLevel) + lineToAdd;

      if (/{$/.test(trimmedLine)) {
        indentLevel++;
      }

      if (trimmedLine.includes('{') && trimmedLine.includes('}')) {
        const matchesOpening = (trimmedLine.match(/{/g) || []).length;
        const matchesClosing = (trimmedLine.match(/}/g) || []).length;
        indentLevel += matchesOpening - matchesClosing;
      }

      formattedQuery += lineToAdd + '\n';
    }

    return formattedQuery.trim();
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
        height="400px"
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
