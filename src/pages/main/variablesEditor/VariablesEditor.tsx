import { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { json } from '@codemirror/lang-json';
import { lintGutter } from '@codemirror/lint';
import { AppContext } from '../../../services/context/AppContextProvider';
import { dictionary } from '../../../services/localization/dictionary';
import { useAppDispatch, useAppSelector } from '../../../services/store/store';
import { requestSlice } from '../../../services/store/requestReducer';

const VariablesEditor: React.FC = () => {
  const { lang } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const variables = useAppSelector((state) => state.request.requestVariables);
  const { updateRequestVariables } = requestSlice.actions;

  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[json(), lintGutter()]}
      placeholder={dictionary.typeVariablesHere[lang]}
      value={variables}
      onChange={(value) => dispatch(updateRequestVariables(value))}
    />
  );
};

export default VariablesEditor;
