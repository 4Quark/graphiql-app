import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Alert, Button, Grid, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import AuthForm from './assets/AuthForm';
import { SubmitHandler } from 'react-hook-form';
import { useLanguage } from '../../localization/strings';

const SignUp = () => {
  const { login, lang } = useContext(AppContext);
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
      <AuthForm title={useLanguage('button_signup', lang)} onSubmit={onSignUp} />
      {errorMessage && <Alert severity="warning">{errorMessage}</Alert>}

      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>{useLanguage('auth_user_question', lang)}</Typography>
        <Button variant="outlined" onClick={() => navigate('/signin')}>
          {useLanguage('button_signin', lang)}
        </Button>
      </Grid>
    </div>
  );
};

export default SignUp;
