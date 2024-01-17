import { useContext } from 'react';
import { AppContext } from '../../../services/context/AppContextProvider';
import { ExpandTypeObject } from './ExpandTypeObject';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { GQLType } from './documentation.types';

export const RootTypeBlock = function ({
  rootType,
  rootTypeName,
}: {
  rootType: 'query' | 'mutation' | 'subscription';
  rootTypeName: string;
}) {
  const { schema } = useContext(AppContext);
  if (schema) {
    const typesArray = schema.types.filter((type: GQLType) => type.name === rootTypeName)[0]
      ?.fields;
    return (
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography component={'div'}>
            {rootType}: <b className="text-amber-700">{rootTypeName}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            {typesArray && <ExpandTypeObject name={rootTypeName} fields={typesArray} />}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
};
