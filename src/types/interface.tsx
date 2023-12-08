import { ReactNode } from 'react';

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

export interface IProtectedRouteProps {
  user: boolean;
  redirectPath: string;
  children: ReactNode;
}
