import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Alert, Button, Grid, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import { SubmitHandler } from 'react-hook-form';
import AuthForm from './assets/AuthForm';
import { useLanguage } from '../../localization/strings';

const SignIn = () => {
  const { login, lang } = useContext(AppContext);
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
      <AuthForm title={useLanguage('button_signin', lang)} onSubmit={onSignIn} />
      {errorMessage && <Alert severity="warning">{errorMessage}</Alert>}

      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>{useLanguage('auth_guest_question', lang)}</Typography>
        <Button variant="outlined" onClick={() => navigate('/signup')}>
          {useLanguage('button_signup', lang)}
        </Button>
      </Grid>
    </div>
  );
};

export default SignIn;
