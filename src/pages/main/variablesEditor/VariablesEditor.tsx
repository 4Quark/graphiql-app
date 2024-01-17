import { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { json } from '@codemirror/lang-json';
import { lintGutter } from '@codemirror/lint';
import { AppContext } from '../../../services/context/contextProvider';
import { dictionary } from '../../../services/localization/useLanguage';
const VariablesEditor: React.FC = () => {
  const { variablesValue, setVariablesValue, lang } = useContext(AppContext);

  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[json(), lintGutter()]}
      placeholder={dictionary.typeVariablesHere[lang]}
      value={variablesValue}
      onChange={(value) => setVariablesValue(value)}
    />
  );
};

export default VariablesEditor;
