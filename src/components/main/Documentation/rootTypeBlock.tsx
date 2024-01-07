import { useContext } from 'react';
import { AppContext } from '../../../context/ContextProvider';
import { ExpandObject } from './expandObject';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

export const RootTypeBlock = function ({
  rootType,
  rootTypeName,
}: {
  rootType: 'query' | 'mutation' | 'subscription';
  rootTypeName: string;
}) {
  const { schema } = useContext(AppContext);
  if (schema) {
    const typesArray = schema.types.filter((type) => type.name === rootTypeName)[0]?.fields;
    return (
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography component={'div'}>
            {rootType}: <b className="text-amber-700">{rootTypeName}</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'div'}>
            {typesArray && <ExpandObject name={rootTypeName} fields={typesArray} />}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
};
