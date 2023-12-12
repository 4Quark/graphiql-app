import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Alert, Button, Grid, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import AuthForm from './assets/AuthForm';
import { SubmitHandler } from 'react-hook-form';

const SignUp = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSignUp: SubmitHandler<IForm> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setErrorMessage('');
        login();
        navigate('/main');
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message || 'An error occurred');
      });
  };

  return (
    <div>
      <AuthForm title="Create Account" onSubmit={onSignUp} />
      {errorMessage && <Alert severity="warning">{errorMessage}</Alert>}

      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>Already have an account?</Typography>
        <Button variant="outlined" href="/signin">
          Log in to your account
        </Button>
      </Grid>
    </div>
  );
};

export default SignUp;
