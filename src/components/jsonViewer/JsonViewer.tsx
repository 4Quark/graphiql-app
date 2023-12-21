import { Paper } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { json } from '@codemirror/lang-json';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { lintGutter } from '@codemirror/lint';

export const JSONViewer: React.FC = () => {
  const { queryResult } = useContext(AppContext);
  return (
    <Paper>
      <div className="bg-zinc-700 text-blue-400 p-1">JSON Viewer</div>
      <CodeMirror
        height="auto"
        theme={okaidia}
        extensions={[json(), EditorView.editable.of(false)]}
        value={queryResult}
        extensions={[json(), EditorView.editable.of(false), lintGutter()]}
        value={queryResult}
      />
    </Paper>
  );
};
