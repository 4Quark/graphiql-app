import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

export interface ToggleVisibilityProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAppContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  lang: string;
  strings: IStrings;
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

export interface IStrings {
  nav_welcome: string;
  nav_lang_ru: string;
  nav_lang_eng: string;

  button_logout: string;
  button_signin: string;
  button_signup: string;

  auth_guest_question: string;
  auth_user_question: string;

  email: string;
  password: string;

  NotFound_title: string;
  NotFound_content: string;
  NotFound__link_to_main: string;

  link_to_main: string;

  main: string;
}
