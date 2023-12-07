import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';

const SingIn = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div>
      <p>Here is SingIn Page.</p>
      <button onClick={handleLogin}>Fake Button to SingIn</button>
    </div>
  );
};

export default SingIn;
