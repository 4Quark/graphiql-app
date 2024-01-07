import { createContext, useEffect, useState } from 'react';
import {
  GQLSchema,
  IAppContext,
  IAppContextProviderProps,
  LANG,
  LangType,
} from '../types/interface';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firebase';

export const defaultValue: IAppContext = {
  user: null,
  login: () => {},
  logout: () => {},
  lang: LANG.en,
  toggleLang: () => {},
  queryResult: '',
  setQueryResult: () => {},
  variables: null,
  setVariables: () => {},
  headersValue: '',
  setHeadersValue: () => {},
  headers: null,
  setHeaders: () => {},
  isDocumentationShow: false,
  setIsDocumentationShow: () => {},
  schema: null,
  setSchema: () => {},
};

export const AppContext = createContext(defaultValue);

const AppContextProvider: React.FC<IAppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
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

  const [queryResult, setQueryResult] = useState<string>('');
  const [variables, setVariables] = useState<object | null>(null);
  const [headersValue, setHeadersValue] = useState<string>('');
  const [headers, setHeaders] = useState<HeadersInit | null>(null);
  const [isDocumentationShow, setIsDocumentationShow] = useState<boolean>(false);
  const [schema, setSchema] = useState<GQLSchema | null>(null);

  const contextValue: IAppContext = {
    user,
    login,
    logout,
    lang,
    toggleLang,
    queryResult,
    setQueryResult,
    variables,
    setVariables,
    headersValue,
    setHeadersValue,
    headers,
    setHeaders,
    isDocumentationShow,
    setIsDocumentationShow,
    schema,
    setSchema,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
