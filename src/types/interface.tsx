import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

export enum LANG {
  EN = 'en',
  RU = 'ru',
}

export type LangType = 'en' | 'ru';

export interface ToggleVisibilityProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAppContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  lang: LangType;
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

export type DictionaryKey =
  | 'nav_welcome'
  | 'nav_lang_ru'
  | 'nav_lang_eng'
  | 'button_logout'
  | 'button_signin'
  | 'button_signup'
  | 'auth_guest_question'
  | 'auth_user_question'
  | 'email'
  | 'password'
  | 'NotFound_title'
  | 'NotFound_content'
  | 'NotFound__link_to_main'
  | 'link_to_main'
  | 'main';

export type Dictionary = {
  [key in DictionaryKey]: {
    ru: string;
    en: string;
  };
};
