import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';

const SignUp = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div>
      <p>Here is SingUP Page.</p>
      <button onClick={handleLogin}>Fake Button to SingUP</button>
    </div>
  );
};

export default SignUp;
