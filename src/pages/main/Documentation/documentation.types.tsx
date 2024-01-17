export type GQLArgument = {
  name: string;
  description?: string;
  defaultValue?: string;
  type?: GQLFieldType;
};

export type GQLField = {
  name: string;
  description?: string;
  args?: GQLArgument[];
  type?: GQLFieldType;
};

export type GQLInputField = {
  name: string;
  description?: string;
  type?: GQLFieldType;
  defaultValue?: object;
};

export type GQLFieldType = {
  name: string;
  kind: string;
  ofType?: GQLFieldType;
};

export type GQLEnum = {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason?: string;
};

export type GQLType = {
  kind: string;
  name: string;
  description?: string;
  fields?: GQLField[];
  inputFields?: GQLInputField[];
  enumValues?: GQLEnum[];
};

export type GQLDirective = {
  name: string;
  description: string;
  locations: string[];
};

export interface GQLSchema {
  queryType: { name: string } | null;
  mutationType: { name: string } | null;
  subscriptionType: { name: string } | null;
  types: GQLType[];
  directives: object[];
}
