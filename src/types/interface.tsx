import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { dictionary } from '../localization/useLanguage';
import { To } from 'react-router-dom';

export enum LANG {
  en = 'en',
  ru = 'ru',
}

export type LangType = keyof typeof LANG;

export type DevData = 'github' | 'linkedin' | 'email';

export type DictionaryKey = keyof typeof dictionary;

export type TDeveloper = {
  ru: string;
  en: string;
  github: string | To;
  linkedin: string | To;
  email: string | To;
};

export enum DEV_NAMES {
  MARIA = 'developerMaria',
  ANTON = 'developerAnton',
  IRYNA = 'developerIryna',
}
export type TDevName = DEV_NAMES;

export interface ToggleVisibilityProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAppContext {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  lang: LangType;
  toggleLang: () => void;
  message: string;
  displayMessage: (message: string) => void;
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

export interface ILinkAsButtonProps {
  title: DictionaryKey;
  link: string;
}

export interface IDeveloperProps {
  title: TDevName;
}

export interface IDescriptionProps {
  title: string;
  subheader: string;
  paragraphs: string[];
  linkTitle: string;
  linkTo: string;
  logo: string;
}
