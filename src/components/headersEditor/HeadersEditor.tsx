import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { lintGutter } from '@codemirror/lint';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { dictionary } from '../../localization/useLanguage';

const HeadersEditor: React.FC = () => {
  const { headersValue, setHeadersValue, lang } = useContext(AppContext);
  return (
    <>
      <CodeMirror
        height="auto"
        theme={okaidia}
        extensions={[graphql(), lintGutter()]}
        placeholder={dictionary.typeHeadersHere[lang]}
        value={headersValue}
        onChange={(value) => setHeadersValue(value)}
      />
    </>
  );
};

export default HeadersEditor;
