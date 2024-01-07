import { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { json } from '@codemirror/lang-json';
import { lintGutter } from '@codemirror/lint';
import { AppContext } from '../../context/ContextProvider';
import { dictionary } from '../../localization/useLanguage';
const VariablesEditor: React.FC = () => {
  const { variables, setVariables, lang } = useContext(AppContext);

  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[json(), lintGutter()]}
      placeholder={dictionary.typeVariablesHere[lang]}
      value={variables ? variables.toString() : ''}
      onChange={(value) => setVariables(JSON.parse(value))}
    />
  );
};

export default VariablesEditor;
