import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Button } from '@mui/material';

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

      <Button onClick={handleLogin} variant="contained">
        Fake Button to SingUP
      </Button>
    </div>
  );
};

export default SignUp;
