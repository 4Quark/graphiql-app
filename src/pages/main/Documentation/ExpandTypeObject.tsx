import { Tooltip } from '@mui/material';
import { GQLArgument, GQLField } from './documentation.types';

export const ExpandTypeObject = function ({ name, fields }: { name: string; fields: GQLField[] }) {
  return (
    <div>
      type: <b className="text-amber-700">{name}</b> {'{'}
      {fields &&
        fields.map((type, iterator) => (
          <Tooltip
            key={iterator}
            className="pl-5 w-fit"
            title={type.description}
            arrow
            placement="right"
          >
            <div>
              <span className="text-cyan-900">{type.name}</span>
              {type.args?.length
                ? `(${type.args.map(
                    (arg: GQLArgument) =>
                      `${arg.name}: ${arg.type?.name ?? arg.type?.ofType?.name ?? ''}`
                  )})`
                : ''}
              :{' '}
              <span className="text-green-700">
                {type.type?.name ?? type.type?.ofType?.name}
                {type.type?.kind === 'LIST' && '[]'}
              </span>
            </div>
          </Tooltip>
        ))}
      {'}'}
    </div>
  );
};
