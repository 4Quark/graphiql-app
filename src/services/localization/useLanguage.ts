import { useContext } from 'react';
import { DictionaryKey, TDevName, TDeveloper } from '../../types/interface';
import { AppContext } from '../context/AppContextProvider';
import { dictionary } from './dictionary';

export const useLanguage = (key: DictionaryKey) => {
  const { lang } = useContext(AppContext);
  return dictionary[key][lang];
};

export const getDeveloperData = (key: TDevName) => {
  return dictionary[key] as TDeveloper;
};
