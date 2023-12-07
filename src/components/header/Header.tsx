import './Header.scss';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import LanguageToggler from '../langToggler/LangToggler';

const Header = () => {
  const { isUser, logout } = useContext(AppContext);

  return (
    <header>
      <NavLink to="/">Welcome</NavLink>
      <LanguageToggler />
      <span>{isUser ? 'AUTH' : 'GUEST'}</span>
      <button onClick={logout} disabled={isUser ? false : true}>
        Log Out
      </button>
    </header>
  );
};

export default Header;
