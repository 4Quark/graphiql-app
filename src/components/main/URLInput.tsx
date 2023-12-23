import { Button, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { GraphiQLService } from '../../services/GraphiQLService';
import { useContext, useState } from 'react';
import { Documentation } from './Documentation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dictionary } from '../../localization/useLanguage';
import { AppContext } from '../../context/ContextProvider';

export const URLInput = function () {
  const { register, setValue, handleSubmit } = useForm();
  const [isDocumentationShow, setIsDocumentationShow] = useState<boolean>(false);
  const [schema, setSchema] = useState<string | null>(null);
  const { lang, setQueryResult } = useContext(AppContext);

  const cleanInput = () => setValue('url', '');

  const handleSubmitURL = handleSubmit(async (data) => {
    if (data.url === '') {
      toast.error(dictionary.toastEmptyQuery[lang], { position: 'top-right' });
      return;
    }
    try {
      GraphiQLService.updateURL(data.url);
      const response = await GraphiQLService.runSchemaRequest();
      const schema = JSON.stringify(response);
      setSchema(schema);
    } catch {
      setSchema(null);
      setQueryResult('');
      setIsDocumentationShow(false);
      GraphiQLService.updateURL('no URL');
      toast.warn(dictionary.toastWrongURL[lang], { position: 'top-right' });
    }
  });

  const fillExampleURL = () => setValue('url', 'https://rickandmortyapi.com/graphql');

  return (
    <section className="flex items-center">
      <div className="whitespace-nowrap">currentURL: {GraphiQLService.baseURL}</div>
      <Form onSubmit={handleSubmitURL} className="w-full flex justify-end block p-3 gap-x-2">
        <Input {...register('url')} />
        <Button onClick={cleanInput}>Х</Button>
        <Button type="submit" color="secondary" variant="outlined">
          {dictionary.submitURL[lang]}
        </Button>
        <Button variant="outlined" onClick={fillExampleURL}>
          {dictionary.example[lang]}
        </Button>
        <Button
          variant="outlined"
          disabled={!schema}
          onClick={() => setIsDocumentationShow(!isDocumentationShow)}
        >
          {dictionary.documentation[lang]}
        </Button>
        {isDocumentationShow && schema && <Documentation schema={schema} />}
        <ToastContainer />
      </Form>
    </section>
  );
};
