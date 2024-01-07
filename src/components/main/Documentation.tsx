import { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { RootTypeBlock } from './Documentation/rootTypeBlock';
import { AllTypes } from './Documentation/allTypes';
import { Paper } from '@mui/material';

export const Documentation = function () {
  const { schema } = useContext(AppContext);

  if (schema) {
    return (
      <Paper elevation={3} className="p-5">
        <h2 className="text-xl font-bold">Documentation</h2>
        <p className="text-sm">A GraphQL schema provides a root type for each kind of operation</p>

        <h3 className="text-lg font-semibold">Root Types</h3>
        {schema.queryType && (
          <RootTypeBlock rootType="query" rootTypeName={schema.queryType.name} />
        )}
        {schema.mutationType && (
          <RootTypeBlock rootType="mutation" rootTypeName={schema.mutationType.name} />
        )}
        {schema.subscriptionType && (
          <RootTypeBlock rootType="subscription" rootTypeName={schema.subscriptionType.name} />
        )}

        <h3 className="text-lg font-semibold">All Schema Types</h3>
        <AllTypes />
      </Paper>
    );
  }
};
