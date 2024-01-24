import { Paper, Button } from '@mui/material';
import { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { prettifyQuery } from './QueryEditor.utils';
import { GraphiQLService } from '../../../services/GraphiQLService';
import { AppContext } from '../../../services/context/AppContextProvider';
import { toast } from 'react-toastify';
import { dictionary } from '../../../services/localization/dictionary';
import { useAppDispatch, useAppSelector } from '../../../services/store/store';
import { resultSlice } from '../../../services/store/resultReducer';

const QueryEditor: React.FC = () => {
  const initialText: string = `# Welcome to GraphiQL
  #
  # GraphiQL is an in-browser tool for writing, 
  # validating and testing GraphQL queries.
  `;
  const [query, setQuery] = useState(initialText);
  const { lang } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const headers = useAppSelector((state) => state.request.requestHeaders);
  const variables = useAppSelector((state) => state.request.requestVariables);
  const { updateResult } = resultSlice.actions;

  const handlePrettifyClick = () => {
    const prettyQuery = prettifyQuery(query);
    setQuery(prettyQuery);
  };

  const buildHeaders = () => {
    const myHeaders: HeadersInit = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    if (headers !== '') {
      const headersString: string = headers;
      const headersArray = headersString.split('\n');
      headersArray.map((header) => {
        const regex = /([^:]+):(.+)/;
        const result = header.match(regex);
        if (result) {
          myHeaders.append(result[1], result[2]);
        } else {
          toast.warn(dictionary.toastWrongHeader[lang], { position: 'top-right' });
        }
      });
    }
    return myHeaders;
  };

  const handleRunQuery = async () => {
    const variablesQuery = variables !== '' ? JSON.parse(variables) : null;
    if (GraphiQLService.baseURL === 'no URL') {
      toast.error(dictionary.toastEmptyQuery[lang], { position: 'top-right' });
      return;
    }
    try {
      const response = await GraphiQLService.runQuery(query, variablesQuery, buildHeaders());
      const data = JSON.stringify(response);
      dispatch(updateResult(prettifyQuery(data)));
    } catch {
      dispatch(updateResult(''));
      toast.warn(dictionary.toastWrongQuery[lang], { position: 'top-right' });
    }
  };

  const handleQuery = () => {
    handleRunQuery().catch((error) => {
      toast.error(error.message ?? 'An error occurred', { position: 'top-right' });
    });
  };

  return (
    <Paper>
      <div className="bg-zinc-700">
        <Stack direction="row" spacing={2}>
          <Button
            type="submit"
            color="primary"
            size="small"
            variant="outlined"
            onClick={handleQuery}
            startIcon={<PlayCircleOutlineOutlinedIcon />}
          >
            {dictionary.runQuery[lang]}
          </Button>
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={handlePrettifyClick}
            startIcon={<AutoFixHighOutlinedIcon />}
          >
            {dictionary.prettify[lang]}
          </Button>
        </Stack>
      </div>
      <CodeMirror
        height="350px"
        theme={okaidia}
        extensions={[graphql(), syntaxHighlighting(oneDarkHighlightStyle)]}
        placeholder="Type your GraphQL query here"
        value={query}
        onChange={(value) => setQuery(value)}
      />
    </Paper>
  );
};

export default QueryEditor;
