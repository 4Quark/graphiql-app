import { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { json } from '@codemirror/lang-json';
import { lintGutter } from '@codemirror/lint';
import { AppContext } from '../../context/ContextProvider';
const VariablesEditor: React.FC = () => {
  const { variables, setVariables } = useContext(AppContext);

  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[json(), lintGutter()]}
      placeholder="Type your variables here"
      value={variables ? variables.toString() : ''}
      onChange={(value) => setVariables(JSON.parse(value))}
    />
  );
};

export default VariablesEditor;
