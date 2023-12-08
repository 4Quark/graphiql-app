import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <p>
        Please check the URL or go back <Link to="/">Welcome page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
