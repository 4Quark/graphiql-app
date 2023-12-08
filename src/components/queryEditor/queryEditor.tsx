import { TextareaAutosize } from '@mui/base';
import { Paper, Button } from '@mui/material';
import { ThemeProvider } from '@mui/private-theming';
import { Box } from '@mui/system';
import { useState } from 'react';
import { darkTheme } from './queryEditor.types';

const QueryEditor = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const prettifyQuery = () => {
    // Logic to prettify the GraphQL query will go here
  };

  // You can listen for keyboard shortcuts using useEffect and attaching event listeners to the window

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ padding: '16px', margin: '16px', backgroundColor: '#1e1e1e' }}>
        <Box style={{ position: 'relative' }}>
          <TextareaAutosize
            minRows={10}
            placeholder="Type your GraphQL query here"
            style={{
              width: '100%',
              backgroundColor: '#1e1e1e',
              color: 'white',
              fontFamily: 'monospace',
            }}
            value={query}
            onChange={handleQueryChange}
          />
          <Button
            variant="contained"
            onClick={prettifyQuery}
            style={{ position: 'absolute', right: '20px', top: '20px' }}
          >
            Prettify
          </Button>
          {/* You can add more buttons for other actions like run query, merge fragments, etc. */}
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default QueryEditor;
