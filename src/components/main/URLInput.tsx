import { Button, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { GraphiQLService } from '../../services/GraphiQLService';
import { useState } from 'react';

// TODO isValid URL

export const URLInput = function () {
  const { register, setValue, handleSubmit } = useForm();
  const [currentURL, setCurrentURL] = useState('no URL');

  const cleanInput = handleSubmit(() => {
    setValue('url', '');
  });

  const handleSubmitURL = handleSubmit((data) => {
    GraphiQLService.updateURL(data.url);
    setCurrentURL(data.url);
  });

  const fillExampleURL = handleSubmit(() => {
    setValue('url', 'https://rickandmortyapi.com/graphql');
  });

  return (
    <Form onSubmit={handleSubmitURL}>
      <Input {...register('url')} />
      <Button onClick={cleanInput}>Х</Button>
      <Button type="submit" color="secondary" variant="outlined">
        URL
      </Button>
      <Button variant="outlined" onClick={fillExampleURL}>
        Example
      </Button>
      <div>currentURL: {currentURL}</div>
    </Form>
  );
};
