import { Link } from 'react-router-dom';
import { useLanguage } from '../services/localization/useLanguage';

const NotFoundPage = () => {
  return (
    <>
      <h2>{useLanguage('NotFound_title')}</h2>
      <p>
        {useLanguage('NotFound_content')}
        <Link to="/"> {useLanguage('NotFound__link_to_main')}</Link>
      </p>
    </>
  );
};

export default NotFoundPage;
