import { useContext } from 'react';
import { AppContext } from '../../../services/context/AppContextProvider';
import { ExpandTypeObject } from './ExpandTypeObject';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { GQLType } from './documentation.types';

export const AllTypesBlock = function () {
  const { schema } = useContext(AppContext);
  const typenameFilter = (type: GQLType) => !/^__/.test(type.name);
  const noRootFilter = (type: GQLType) => {
    return (
      type.name !== schema?.queryType?.name &&
      type.name !== schema?.mutationType?.name &&
      type.name !== schema?.subscriptionType?.name
    );
  };
  if (schema) {
    return (
      <div>
        {schema.types
          .filter(typenameFilter)
          .filter(noRootFilter)
          .map((type: GQLType, iterator: number) => (
            <Accordion key={iterator}>
              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                <Typography className="text-amber-700">{type.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={'div'}>
                  {type.description && <i>{type.description}</i>}
                  {type.fields && <ExpandTypeObject name={type.name} fields={type.fields} />}
                  {type.inputFields && (
                    <ExpandTypeObject name={type.name} fields={type.inputFields} />
                  )}
                  {type.enumValues && (
                    <div>
                      <i className="text-sm">Enum Values:</i>
                      {type.enumValues.map((enumValue, iterator) => (
                        <div key={iterator} className="text-blue-900">
                          {enumValue.name}
                        </div>
                      ))}
                    </div>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    );
  }
};
