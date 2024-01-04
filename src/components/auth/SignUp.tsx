import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Grid, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import AuthForm from './assets/AuthForm';
import { SubmitHandler } from 'react-hook-form';
import { useLanguage } from '../../localization/useLanguage';
import LinkAsButton from '../LinkAsButton/LinkAsButton';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const { login, lang } = useContext(AppContext);
  const navigate = useNavigate();

  const onSignUp: SubmitHandler<IForm> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        login(userCredentials.user);
        navigate('/main');
      })
      .catch((error) => {
        toast.error(error.message ?? 'An error occurred', { position: 'top-right' });
      });
  };

  return (
    <div>
      <AuthForm title={useLanguage('button_signup', lang)} onSubmit={onSignUp} />
      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>{useLanguage('auth_user_question', lang)}</Typography>
        <LinkAsButton title="button_signin" link="/signin" />
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
