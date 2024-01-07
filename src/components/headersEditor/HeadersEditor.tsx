import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { lintGutter } from '@codemirror/lint';
import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';

const HeadersEditor: React.FC = () => {
  const { headersValue, setHeadersValue } = useContext(AppContext);
  return (
    <>
      <CodeMirror
        height="auto"
        theme={okaidia}
        extensions={[graphql(), lintGutter()]}
        placeholder="Type your headers here"
        value={headersValue}
        onChange={(value) => setHeadersValue(value)}
      />
    </>
  );
};

export default HeadersEditor;
