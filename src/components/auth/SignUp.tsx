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
  const { login, typography } = useContext(AppContext);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSignUp: SubmitHandler<IForm> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        setErrorMessage('');
        login(userCredentials.user);
        navigate('/main');
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message || 'An error occurred');
      });
  };

  return (
    <div>
      <AuthForm title={typography.button_signup} onSubmit={onSignUp} />
      {errorMessage && <Alert severity="warning">{errorMessage}</Alert>}

      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>{typography.auth_user_question}</Typography>
        <Button variant="outlined" onClick={() => navigate('/signin')}>
          {typography.button_signin}
        </Button>
      </Grid>
    </div>
  );
};

export default SignUp;
