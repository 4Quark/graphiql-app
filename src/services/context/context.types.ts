import { ReactNode } from 'react';
import { LangType } from '../../types/interface';
import { User } from 'firebase/auth';

export interface IAppContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  lang: LangType;
  toggleLang: () => void;
}

export interface IAppContextProviderProps {
  children: ReactNode;
}
