import { NavLink } from 'react-router-dom';
import LanguageToggler from '../langToggler/LangToggler';
import { Grid } from '@mui/material';
import AuthDetails from '../auth/assets/AuthDetails';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/ContextProvider';

const Header = () => {
  const { strings } = useContext(AppContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full transition duration-500 ${
        isScrolled ? 'bg-indigo-200' : 'bg-slate-200'
      }`}
    >
      <Grid container className="items-center px-10 h-14 p-2 gap-10">
        <NavLink to="/">{strings.nav_welcome}</NavLink>
        <LanguageToggler />
        <AuthDetails />
      </Grid>
    </header>
  );
};

export default Header;
