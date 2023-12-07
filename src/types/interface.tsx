import { ReactNode } from 'react';

export interface IErrBoundProps {
  children?: React.ReactNode;
}

export interface IErrBoundState {
  hasError: boolean;
}

export interface IAppContext {
  isUser: boolean;
  login: () => void;
  logout: () => void;
  lang: string;
  toggleLang: () => void;
}

export interface IAppContextProviderProps {
  children: ReactNode;
}
