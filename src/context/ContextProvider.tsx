import { createContext, useEffect, useState } from 'react';
import { IAppContext, IAppContextProviderProps } from '../types/interface';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase';

export const defaultValue: IAppContext = {
  user: null,
  login: () => {},
  logout: () => {},
  lang: 'eng',
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

  const [lang, setLang] = useState('eng');

  const toggleLang = () => {
    if (lang === 'eng') setLang('ru');
    else {
      setLang('eng');
    }
  };

  const contextValue: IAppContext = {
    user,
    login,
    logout,
    lang,
    toggleLang,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
