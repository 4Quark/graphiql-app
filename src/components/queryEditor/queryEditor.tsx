import { TextareaAutosize } from '@mui/base';
import { Paper, Button } from '@mui/material';
import { useState } from 'react';

const QueryEditor: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const prettifyQuery = () => {
    // Logic to prettify the GraphQL query will go here
  };

  // You can listen for keyboard shortcuts using useEffect and attaching event listeners to the window

  return (
    <Paper style={{ padding: '16px', minHeight: '200px', position: 'relative' }}>
      <TextareaAutosize
        minRows={10}
        style={{ width: '100%', fontFamily: 'monospace', fontSize: '0.875rem' }}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={handleQueryChange}
      />
      <Button
        variant="contained"
        onClick={prettifyQuery}
        style={{ position: 'absolute', right: '20px', bottom: '20px' }}
      >
        Prettify
      </Button>
    </Paper>
  );
};

export default QueryEditor;
