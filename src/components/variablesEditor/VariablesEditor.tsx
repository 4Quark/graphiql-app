import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { autocompletion } from '@codemirror/autocomplete';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { json } from '@codemirror/lang-json';

const VariablesEditor: React.FC = () => {
  const [variable, setVariable] = useState('');

  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[json(), syntaxHighlighting(oneDarkHighlightStyle), autocompletion()]}
      placeholder="Type your variables here"
      value={variable}
      onChange={(value) => setVariable(value)}
    />
  );
};

export default VariablesEditor;
