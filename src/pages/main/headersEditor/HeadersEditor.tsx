import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { lintGutter } from '@codemirror/lint';
import { useContext } from 'react';
import { AppContext } from '../../../services/context/AppContextProvider';
import { dictionary } from '../../../services/localization/dictionary';
import { useAppDispatch, useAppSelector } from '../../../services/store/store';
import { requestSlice } from '../../../services/store/requestReducer';

const HeadersEditor: React.FC = () => {
  const { lang } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const headers = useAppSelector((state) => state.request.requestHeaders);
  const { updateRequestHeaders } = requestSlice.actions;
  return (
    <>
      <CodeMirror
        height="auto"
        theme={okaidia}
        extensions={[graphql(), lintGutter()]}
        placeholder={dictionary.typeHeadersHere[lang]}
        value={headers}
        onChange={(value) => dispatch(updateRequestHeaders(value))}
      />
    </>
  );
};

export default HeadersEditor;
