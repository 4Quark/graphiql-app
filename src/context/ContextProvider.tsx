import { createContext, useEffect, useState } from 'react';
import { IAppContext, IAppContextProviderProps, LangType } from '../types/interface';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { dataEN, dataRU } from '../localization/strings';

export const defaultValue: IAppContext = {
  user: null,
  login: () => {},
  logout: () => {},
  lang: 'en' as LangType,
  strings: dataEN,
  toggleLang: () => {},
};

export const AppContext = createContext(defaultValue);

const AppContextProvider: React.FC<IAppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const [lang, setLang] = useState<LangType>('en');

  const [strings, setstrings] = useState(dataEN);

  const toggleLang = () => {
    if (lang == 'en') {
      setLang('ru');
      setstrings(dataRU);
    } else {
      setLang('en');
      setstrings(dataEN);
    }
  };

  const contextValue: IAppContext = {
    user,
    login,
    logout,
    lang,
    strings,
    toggleLang,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
