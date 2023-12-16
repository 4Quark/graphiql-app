import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { autocompletion } from '@codemirror/autocomplete';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

const HeadersEditor: React.FC = () => {
  const [header, setHeader] = useState('');
  return (
    <CodeMirror
      height="auto"
      theme={okaidia}
      extensions={[graphql(), syntaxHighlighting(oneDarkHighlightStyle), autocompletion()]}
      placeholder="Type your headers here"
      value={header}
      onChange={(value) => setHeader(value)}
    />
  );
};

export default HeadersEditor;
