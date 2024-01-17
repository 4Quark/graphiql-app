import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';
import { Grid, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { IForm } from '../../types/interface';
import AuthForm from './assets/AuthForm';
import { SubmitHandler } from 'react-hook-form';
import { useLanguage } from '../../services/localization/useLanguage';
import { toast } from 'react-toastify';
import LinkAsButton from '../../components/LinkAsButton';

const SignUp = () => {
  const { login } = useContext(AppContext);
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
      <AuthForm title={useLanguage('button_signup')} onSubmit={onSignUp} />
      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>{useLanguage('auth_user_question')}</Typography>
        <LinkAsButton title="button_signin" link="/signin" />
      </Grid>
    </div>
  );
};

export default SignUp;
