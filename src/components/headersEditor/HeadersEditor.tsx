import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { lintGutter } from '@codemirror/lint';

const HeadersEditor: React.FC = () => {
  const [header, setHeader] = useState('');
  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[graphql(), lintGutter()]}
      placeholder="Type your headers here"
      value={header}
      onChange={(value) => setHeader(value)}
    />
  );
};

export default HeadersEditor;
