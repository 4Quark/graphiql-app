import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Grid, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import { SubmitHandler } from 'react-hook-form';
import AuthForm from './assets/AuthForm';
import { useLanguage } from '../../localization/useLanguage';
import LinkAsButton from '../LinkAsButton/LinkAsButton';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
  const { login, lang } = useContext(AppContext);
  const navigate = useNavigate();

  const onSignIn: SubmitHandler<IForm> = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        login(userCredentials.user);
        navigate('/main');
      })
      .catch((error) => {
        toast.warn(error.message ?? 'An error occurred', { position: 'top-right' });
      });
  };

  return (
    <div>
      <AuthForm title={useLanguage('button_signin', lang)} onSubmit={onSignIn} />
      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>{useLanguage('auth_guest_question', lang)}</Typography>
        <LinkAsButton title="button_signup" link="/signup" />
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
