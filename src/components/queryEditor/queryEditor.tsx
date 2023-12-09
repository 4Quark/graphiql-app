import { TextareaAutosize } from '@mui/base';
import { Paper, Button } from '@mui/material';
import { useState } from 'react';

const QueryEditor: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

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
    <Paper style={{ padding: '16px', minHeight: 'false', position: 'relative' }}>
      <TextareaAutosize
        minRows={32}
        style={{ width: '100%', fontFamily: 'monospace', fontSize: '0.875rem', resize: 'none' }}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={handleQueryChange}
      />
      <Button
        variant="contained"
        onClick={handlePrettifyClick}
        style={{ position: 'absolute', right: '50px', bottom: '50px' }}
      >
        Prettify
      </Button>
    </Paper>
  );
};

export default QueryEditor;
