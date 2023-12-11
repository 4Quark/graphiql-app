import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

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

export interface IForm {
  email: string;
  password: string;
}

export interface IAuthFormProps {
  title: string;
  onSubmit: SubmitHandler<IForm>;
}
