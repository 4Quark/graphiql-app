import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Button, Grid, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { IForm } from '../../types/interface';
import AuthForm from './assets/AuthForm';
import { SubmitHandler } from 'react-hook-form';

const SignUp = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const onSignUp: SubmitHandler<IForm> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log('created account with ', userCredential);
        login();
        navigate('/main');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AuthForm title="Create Account" onSubmit={onSignUp} />
      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>Already have an account?</Typography>
        <Button variant="outlined">
          <Link to="/signin">Log in to your account</Link>
        </Button>
      </Grid>
    </div>
  );
};

export default SignUp;
