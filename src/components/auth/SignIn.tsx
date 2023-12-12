import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Alert, Button, Grid, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import { SubmitHandler } from 'react-hook-form';
import AuthForm from './assets/AuthForm';

const SignIn = () => {
  const { login, typography } = useContext(AppContext);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSignIn: SubmitHandler<IForm> = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        setErrorMessage('');
        login(userCredentials.user);
        navigate('/main');
      })
      .catch((err) => {
        setErrorMessage(err.message || 'An error occurred');
        console.error(err);
      });
  };

  return (
    <div>
      <AuthForm title={typography.button_signin} onSubmit={onSignIn} />
      {errorMessage && <Alert severity="warning">{errorMessage}</Alert>}

      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>{typography.auth_guest_question}</Typography>
        <Button variant="outlined" onClick={() => navigate('/signup')}>
          {typography.button_signup}
        </Button>
      </Grid>
    </div>
  );
};

export default SignIn;
