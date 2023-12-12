import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/ContextProvider';

const NotFoundPage = () => {
  const { strings } = useContext(AppContext);

  return (
    <div>
      <h2>{strings.NotFound_title}</h2>
      <p>
        {strings.NotFound_content} <Link to="/"> {strings.NotFound__link_to_main}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
