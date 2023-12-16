import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { json } from '@codemirror/lang-json';
import { lintGutter } from '@codemirror/lint';
const VariablesEditor: React.FC = () => {
  const [variable, setVariable] = useState('');

  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[json(), lintGutter()]}
      placeholder="Type your variables here"
      value={variable}
      onChange={(value) => setVariable(value)}
    />
  );
};

export default VariablesEditor;
