import { Paper, Button } from '@mui/material';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { autocompletion } from '@codemirror/autocomplete';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

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
      <div>
        <Button
          variant="contained"
          onClick={handlePrettifyClick}
          startIcon={<AutoFixHighOutlinedIcon />}
        >
          Fix
        </Button>
      </div>
      <CodeMirror
        extensions={[graphql(), syntaxHighlighting(oneDarkHighlightStyle), autocompletion()]}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={(value) => setQuery(value)}
      />
    </Paper>
  );
};

export default QueryEditor;
