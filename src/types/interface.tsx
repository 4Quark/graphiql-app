import { SubmitHandler } from 'react-hook-form';
import { To } from 'react-router-dom';
import { dictionary } from '../services/localization/dictionary';

export enum LANG {
  en = 'en',
  ru = 'ru',
}

export type LangType = keyof typeof LANG;

export type DictionaryKey = keyof typeof dictionary;

export type DevData = 'github' | 'linkedin' | 'email';

export type TDeveloper = {
  ru: string;
  en: string;
  github: string | To;
  linkedin: string | To;
  email: string | To;
};

export interface IDeveloperProps {
  title: TDevName;
}

export enum DEV_NAMES {
  MARIA = 'developerMaria',
  ANTON = 'developerAnton',
  IRYNA = 'developerIryna',
}
export type TDevName = DEV_NAMES;

export interface IForm {
  email: string;
  password: string;
}

export interface IAuthFormProps {
  title: string;
  onSubmit: SubmitHandler<IForm>;
}
