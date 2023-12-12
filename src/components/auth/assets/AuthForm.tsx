import React, { useContext, useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';
import { TogglePasswordVisibility } from './TogglePasswordVisibility';
import { IAuthFormProps, IForm } from '../../../types/interface';
import { Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaEN, schemaRU } from './schema';
import { AppContext } from '../../../context/ContextProvider';
import { LANG } from '../../../localization/strings';

const AuthForm: React.FC<IAuthFormProps> = ({ title, onSubmit }) => {
  const { lang, strings } = useContext(AppContext);

  const resolver: Resolver<IForm> = yupResolver(lang === LANG.EN ? schemaEN : schemaRU);

  const {
    handleSubmit,
    control,
    setError,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    resolver,
    mode: 'onChange',
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

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Typography variant="h4" alignSelf="center">
          {title}
        </Typography>

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              id={`${title.toLowerCase()}Email`}
              label={strings.email}
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
              id={`${title.toLowerCase()}Password`}
              label={strings.password}
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
          {title}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
