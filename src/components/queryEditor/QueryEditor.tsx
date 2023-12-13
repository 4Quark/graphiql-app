import { Paper, Button, Drawer, IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { autocompletion } from '@codemirror/autocomplete';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { prettifyQuery } from './QueryEditor.utils';
import HeadersEditor from '../headersEditor/HeadersEditor';
import VariablesEditor from '../variablesEditor/VariablesEditor';

const QueryEditor: React.FC = () => {
  const initialText: string = `# Welcome to GraphiQL
  #
  # GraphiQL is an in-browser tool for writing, validating, and
  # testing GraphQL queries.
  `;
  const [query, setQuery] = useState(initialText);
  const [variablesDrawerOpen, setVariablesDrawerOpen] = useState<boolean>(false);
  const [headersDrawerOpen, setHeadersDrawerOpen] = useState<boolean>(false);

  const handlePrettifyClick = () => {
    const prettyQuery = prettifyQuery(query);
    setQuery(prettyQuery);
  };

  const toggleVariablesDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setVariablesDrawerOpen(open);
    };

  const toggleHeadersDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setHeadersDrawerOpen(open);
    };

  return (
    <Paper>
      <div className="bg-zinc-700">
        <Stack direction="row" spacing={2}>
          <Button
            color="primary"
            size="small"
            variant="outlined"
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
        height="600px"
        theme={okaidia}
        extensions={[graphql(), syntaxHighlighting(oneDarkHighlightStyle), autocompletion()]}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={(value) => setQuery(value)}
      />
      <Drawer
        anchor="bottom"
        open={variablesDrawerOpen}
        onClose={toggleVariablesDrawer(false)}
        PaperProps={{
          style: { height: 'calc(50% - 48px)' }, // Adjust height for the toolbar, assuming 48px
        }}
      >
        <IconButton
          onClick={toggleVariablesDrawer(false)}
          style={{ position: 'absolute', right: 0, top: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <VariablesEditor />
      </Drawer>

      <Drawer
        anchor="bottom"
        open={headersDrawerOpen}
        onClose={toggleHeadersDrawer(false)}
        PaperProps={{
          style: { height: 'calc(50% - 48px)' }, // Same height adjustment
        }}
      >
        <IconButton
          onClick={toggleHeadersDrawer(false)}
          style={{ position: 'absolute', right: 0, top: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <HeadersEditor />
      </Drawer>

      <IconButton
        onClick={toggleVariablesDrawer(!variablesDrawerOpen)}
        style={{ position: 'absolute', right: 50, bottom: 10 }}
      >
        Variables
      </IconButton>
      <IconButton
        onClick={toggleHeadersDrawer(!headersDrawerOpen)}
        style={{ position: 'absolute', right: 0, bottom: 10 }}
      >
        Headers
      </IconButton>
    </Paper>
  );
};

export default QueryEditor;
