import { Button, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { GraphiQLService } from '../../services/GraphiQLService';
import { useState } from 'react';
import { Documentation } from './Documentation';

export const URLInput = function () {
  const { register, setValue, handleSubmit } = useForm();
  const [currentURL, setCurrentURL] = useState('no URL');
  const [isDocumentationShow, setIsDocumentationShow] = useState<boolean>(false);
  const [schema, setSchema] = useState<string>('');

  const cleanInput = () => setValue('url', '');

  const handleSubmitURL = handleSubmit(async (data) => {
    GraphiQLService.updateURL(data.url);
    setCurrentURL(data.url);

    const response = await GraphiQLService.runSchemaRequest();
    const schema = JSON.stringify(response);
    setSchema(schema);
  });

  const fillExampleURL = () => setValue('url', 'https://rickandmortyapi.com/graphql');

  return (
    <section className="flex items-center">
      <div className="whitespace-nowrap">currentURL: {currentURL}</div>
      <Form onSubmit={handleSubmitURL} className="w-full flex justify-end block p-3 gap-x-2">
        <Input {...register('url')} />
        <Button onClick={cleanInput}>Х</Button>
        <Button type="submit" color="secondary" variant="outlined">
          URL
        </Button>
        <Button variant="outlined" onClick={fillExampleURL}>
          Example
        </Button>
        <Button variant="outlined" onClick={() => setIsDocumentationShow(!isDocumentationShow)}>
          Show Documentation
        </Button>
        {isDocumentationShow && <Documentation schema={schema} />}
      </Form>
    </section>
  );
};
