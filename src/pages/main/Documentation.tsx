import { useContext } from 'react';
import { AppContext } from '../../services/context/AppContextProvider';
import { RootTypeBlock } from './documentation/RootTypeBlock';
import { AllTypesBlock } from './documentation/AllTypesBlock';
import { Paper } from '@mui/material';
import { dictionary } from '../../services/localization/dictionary';

export const Documentation = function () {
  const { schema, lang } = useContext(AppContext);

  if (schema) {
    return (
      <Paper elevation={3} className="p-5">
        <h2 className="text-xl font-bold py-5">{dictionary.documentation[lang]}</h2>
        <p className="text-sm py-3">{dictionary.documentationPromo[lang]}</p>

        <h3 className="text-lg font-semibold py-3">{dictionary.rootTypes[lang]}</h3>
        {schema.queryType && (
          <RootTypeBlock rootType="query" rootTypeName={schema.queryType.name} />
        )}
        {schema.mutationType && (
          <RootTypeBlock rootType="mutation" rootTypeName={schema.mutationType.name} />
        )}
        {schema.subscriptionType && (
          <RootTypeBlock rootType="subscription" rootTypeName={schema.subscriptionType.name} />
        )}

        <h3 className="text-lg font-semibold py-3">{dictionary.allTypes[lang]}</h3>
        <AllTypesBlock />
      </Paper>
    );
  }
};
