import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import LanguageToggler from '../langToggler/LangToggler';
import { Button, Grid } from '@mui/material';

const Header = () => {
  const { isUser, logout, lang } = useContext(AppContext);

  return (
    <header>
      <Grid container className="items-center h-14 p-2 gap-24 bg-gray-200">
        <NavLink to="/">Welcome</NavLink>
        <LanguageToggler />

        <Button onClick={logout} variant="outlined" disabled={isUser ? false : true}>
          Log Out
        </Button>

        <p>
          Current:
          <span>{isUser ? '   auth' : '   guest'}</span> <span>{lang}</span>
        </p>
      </Grid>
    </header>
  );
};

export default Header;
