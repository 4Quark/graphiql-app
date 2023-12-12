import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';

const NotFoundPage = () => {
  const { typography } = useContext(AppContext);

  return (
    <div>
      <h2>{typography.NotFound_title}</h2>
      <p>
        {typography.NotFound_content} <Link to="/"> {typography.NotFound__link_to_main}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
