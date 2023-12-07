import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import LanguageToggler from '../langToggler/LangToggler';

const Header = () => {
  const { isUser, logout } = useContext(AppContext);

  console.log(isUser);
  return (
    <header>
      <NavLink to="/">Link to welcome page</NavLink>
      <LanguageToggler />
      <button onClick={logout} disabled={isUser ? false : true}>
        Log Out
      </button>
    </header>
  );
};

export default Header;
