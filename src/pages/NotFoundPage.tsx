import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../services/context/contextProvider';
import { useLanguage } from '../services/localization/useLanguage';

const NotFoundPage = () => {
  const { lang } = useContext(AppContext);

  return (
    <>
      <h2>{useLanguage('NotFound_title', lang)}</h2>
      <p>
        {useLanguage('NotFound_content', lang)}
        <Link to="/"> {useLanguage('NotFound__link_to_main', lang)}</Link>
      </p>
    </>
  );
};

export default NotFoundPage;
