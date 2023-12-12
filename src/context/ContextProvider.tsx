import { createContext, useEffect, useState } from 'react';
import { IAppContext, IAppContextProviderProps } from '../types/interface';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase';
import { LANG, dataEN, dataRU } from '../locales/typography';

export const defaultValue: IAppContext = {
  user: null,
  login: () => {},
  logout: () => {},
  lang: LANG.EN,
  typography: dataEN,
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

  const [lang, setLang] = useState(LANG.EN);

  const [typography, setTypography] = useState(dataEN);

  const toggleLang = () => {
    if (lang === LANG.EN) {
      setLang(LANG.RU);
      setTypography(dataRU);
    } else {
      setLang(LANG.EN);
      setTypography(dataEN);
    }
  };

  const contextValue: IAppContext = {
    user,
    login,
    logout,
    lang,
    typography,
    toggleLang,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
