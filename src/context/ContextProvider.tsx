import { createContext, useState } from 'react';
import { IAppContext, IAppContextProviderProps } from '../types/interface';

export const defaultValue: IAppContext = {
  isUser: false,
  login: () => {},
  logout: () => {},
  lang: 'eng',
  toggleLang: () => {},
};

export const AppContext = createContext(defaultValue);

const AppContextProvider: React.FC<IAppContextProviderProps> = ({ children }) => {
  const [isUser, setIsUser] = useState(false);

  const login = () => {
    setIsUser(true);
  };

  const logout = () => {
    setIsUser(false);
  };

  const [lang, setLang] = useState('eng');

  const toggleLang = () => {
    if (lang === 'eng') setLang('ru');
    else {
      setLang('eng');
    }
  };

  const contextValue: IAppContext = {
    isUser,
    login,
    logout,
    lang,
    toggleLang,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
