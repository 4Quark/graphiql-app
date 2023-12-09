import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../auth/firebase';
import { TogglePasswordVisibility } from './assets/TogglePasswordVisibility';
import { IForm } from '../../types/interface';
import { schema } from './assets/schema';
import { Controller, SubmitHandler, useForm, useFormState, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const SingIn = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const resolver: Resolver<IForm> = yupResolver(schema);

  const { handleSubmit, control, setError, trigger, setValue } = useForm<IForm>({
    resolver,
    mode: 'onChange',
  });

  const { errors } = useFormState({
    control,
  });

  const [visible, setVisible] = useState(false);

  const clearError = (fieldName: keyof IForm) => {
    if (errors[fieldName]) {
      setError(fieldName, { type: 'manual', message: '' });
    }
  };

  const onChangeInput = (fieldName: keyof IForm, value: string) => {
    setValue(fieldName, value);
    trigger(fieldName);
    clearError(fieldName);
  };

  const onSignIn: SubmitHandler<IForm> = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log('Log in as ', userCredential);
        login();
        navigate('/main');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSignIn)} className="flex flex-col gap-4">
        <Typography variant="h4" alignSelf="center">
          Log In
        </Typography>

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              id="loginEmail"
              label="Email"
              onChange={(e) => {
                field.onChange(e);
                onChangeInput('email', e.target.value);
              }}
              value={field.value || ''}
              type="email"
              error={!!errors.email?.message}
              helperText={errors?.email?.message}
              autoComplete="email"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              id="loginPassword"
              label="Password"
              onChange={(e) => {
                field.onChange(e);
                onChangeInput('password', e.target.value);
              }}
              value={field.value || ''}
              type={visible ? 'text' : 'password'}
              error={!!errors.password?.message}
              helperText={errors?.password?.message}
              autoComplete="password"
              InputProps={{
                endAdornment: (
                  <TogglePasswordVisibility visible={visible} setVisible={setVisible} />
                ),
              }}
            />
          )}
        />

        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>

      <Grid container className="text-center items-center py-10 gap-10">
        <Typography>Dont have an account yet?</Typography>
        <Button variant="outlined">
          <Link to="/signup">Create an account</Link>
        </Button>
      </Grid>
    </div>
  );
};

export default SingIn;
