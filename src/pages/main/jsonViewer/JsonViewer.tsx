import { Paper } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { json } from '@codemirror/lang-json';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { lintGutter } from '@codemirror/lint';
import { useAppSelector } from '../../../services/store/store';

export const JSONViewer: React.FC = () => {
  const result = useAppSelector((state) => state.result.resultQuery);

  return (
    <Paper>
      <div className="bg-zinc-700 text-blue-400 p-1">JSON Viewer</div>
      <CodeMirror
        height="472px"
        theme={okaidia}
        extensions={[json(), EditorView.editable.of(false), lintGutter()]}
        value={result}
      />
    </Paper>
  );
};
