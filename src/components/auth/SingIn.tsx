import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Alert, Button, Grid, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import { SubmitHandler } from 'react-hook-form';
import AuthForm from './assets/AuthForm';

const SingIn = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSignIn: SubmitHandler<IForm> = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setErrorMessage('');
        login();
        navigate('/main');
      })
      .catch((err) => {
        setErrorMessage(err.message || 'An error occurred');
        console.error(err);
      });
  };

  return (
    <div>
      <AuthForm title="Log in" onSubmit={onSignIn} />
      {errorMessage && <Alert severity="warning">{errorMessage}</Alert>}

      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>Dont have an account yet?</Typography>
        <Button variant="outlined">
          <Link to="/signup"> Create an account</Link>
        </Button>
      </Grid>
    </div>
  );
};

export default SingIn;
