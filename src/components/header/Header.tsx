import { NavLink } from 'react-router-dom';
import LanguageToggler from '../langToggler/LangToggler';
import { Grid } from '@mui/material';
import AuthDetails from '../auth/AuthDetails';

const Header = () => {
  return (
    <header>
      <Grid container className="items-center h-14 p-2 gap-14 bg-gray-200">
        <NavLink to="/">Welcome</NavLink>
        <LanguageToggler />
        <AuthDetails />
      </Grid>
    </header>
  );
};

export default Header;
