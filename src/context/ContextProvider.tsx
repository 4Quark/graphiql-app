import { createContext, useEffect, useState } from 'react';
import { IAppContext, IAppContextProviderProps, LANG, LangType } from '../types/interface';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase';

export const defaultValue: IAppContext = {
  user: null,
  login: () => {},
  logout: () => {},
  lang: LANG.en,
  toggleLang: () => {},
  queryResult: '{ }',
  setQueryResult: () => {},
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

  const [lang, setLang] = useState<LangType>(LANG.en);

  const toggleLang = () => {
    switch (lang) {
      case LANG.en:
        setLang(LANG.ru);
        break;

      case LANG.ru:
        setLang(LANG.en);
        break;
    }
  };

  const [queryResult, setQueryResult] = useState<string>('{ }');

  const contextValue: IAppContext = {
    user,
    login,
    logout,
    lang,
    toggleLang,
    queryResult,
    setQueryResult,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
