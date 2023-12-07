import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      Welcome Page
      <Link to="/auth">Login</Link>
    </div>
  );
};

export default Welcome;
