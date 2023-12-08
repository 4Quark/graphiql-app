import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Button } from '@mui/material';

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
      <Button onClick={handleLogin} variant="contained">
        Fake Button to SingIn
      </Button>
    </div>
  );
};

export default SingIn;
