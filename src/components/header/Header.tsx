import { NavLink } from 'react-router-dom';
import LanguageToggler from '../langToggler/LangToggler';
import { Grid } from '@mui/material';
import AuthDetails from '../auth/assets/AuthDetails';
import { useContext, useEffect, useState } from 'react';
import { useLanguage } from '../../localization/useLanguage';
import { AppContext } from '../../context/ContextProvider';

const Header = () => {
  const { lang } = useContext(AppContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full transition duration-300 ${
        isScrolled ? 'bg-indigo-200' : 'bg-slate-200 '
      }`}
    >
      <Grid container className="items-center px-10 h-14 p-2 gap-10">
        <NavLink to="/">{useLanguage('nav_welcome', lang)}</NavLink>
        <LanguageToggler />
        <AuthDetails />
      </Grid>
    </header>
  );
};

export default Header;
