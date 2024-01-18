import { ExpandTypeObject } from './ExpandTypeObject';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { GQLType } from './documentation.types';
import { useAppSelector } from '../../../services/store/store';

export const RootTypeBlock = function ({
  rootType,
  rootTypeName,
}: {
  rootType: 'query' | 'mutation' | 'subscription';
  rootTypeName: string;
}) {
  const schema = useAppSelector((state) => state.schema.schema);
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
