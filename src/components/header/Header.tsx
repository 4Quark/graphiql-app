import { NavLink } from 'react-router-dom';
import LanguageToggler from '../langToggler/LangToggler';
import AuthDetails from '../../services/auth/assets/AuthDetails';
import { useContext, useEffect, useState } from 'react';
import { useLanguage } from '../../services/localization/useLanguage';
import { AppContext } from '../../services/context/contextProvider';

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
      className={`fixed w-full transition duration-300 z-10 ${
        isScrolled ? 'bg-indigo-200' : 'bg-slate-200 '
      }`}
    >
      <div className="flex flex-col items-center px-10 h-max p-2 gap-y-1 sm:flex-row sm:h-14">
        <NavLink to="/">{useLanguage('nav_welcome', lang)}</NavLink>
        <LanguageToggler />
        <AuthDetails />
      </div>
    </header>
  );
};

export default Header;
