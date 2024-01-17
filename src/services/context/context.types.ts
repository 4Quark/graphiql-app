import { ReactNode } from 'react';
import { GQLSchema } from '../../pages/main/documentation/documentation.types';
import { LangType } from '../../types/interface';
import { User } from 'firebase/auth';

export interface IAppContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  lang: LangType;
  toggleLang: () => void;
  queryResult: string;
  setQueryResult: (value: string) => void;
  variablesValue: string;
  setVariablesValue: (value: string) => void;
  headersValue: string;
  setHeadersValue: (value: string) => void;
  isDocumentationShow: boolean;
  setIsDocumentationShow: (value: boolean) => void;
  schema: GQLSchema | null;
  setSchema: (value: GQLSchema | null) => void;
}

export interface IAppContextProviderProps {
  children: ReactNode;
}
