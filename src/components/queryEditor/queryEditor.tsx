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

  const prettifyQuery = (query: string): string => {
    let indentLevel = 0;
    let formattedQuery = '';
    const lines = query.split('\n');

    for (const originalLine of lines) {
      const trimmedLine = originalLine.trim();

      if (trimmedLine === '') continue;

      if (trimmedLine.startsWith('}')) {
        indentLevel = Math.max(indentLevel - 1, 0);
      }

      let lineToAdd = '  '.repeat(indentLevel) + trimmedLine;

      if (trimmedLine.endsWith('{')) {
        indentLevel++;
      }

      const openingBraces = (trimmedLine.match(/{/g) || []).length;
      const closingBraces = (trimmedLine.match(/}/g) || []).length;
      if (openingBraces && closingBraces) {
        if (openingBraces > closingBraces) {
          indentLevel += openingBraces - closingBraces;
        } else if (closingBraces > openingBraces) {
          lineToAdd =
            '  '.repeat(Math.max(indentLevel - (closingBraces - openingBraces), 0)) + trimmedLine;
        }
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
