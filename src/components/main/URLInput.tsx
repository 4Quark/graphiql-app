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
  const [currentURL, setCurrentURL] = useState('no URL');
  const [isDocumentationShow, setIsDocumentationShow] = useState<boolean>(false);
  const [schema, setSchema] = useState<string | null>(null);
  const { lang } = useContext(AppContext);

  const cleanInput = () => setValue('url', '');

  const handleSubmitURL = handleSubmit(async (data) => {
    try {
      GraphiQLService.updateURL(data.url);
      setCurrentURL(data.url);
      const response = await GraphiQLService.runSchemaRequest();
      console.log(response);
      const schema = JSON.stringify(response);
      setSchema(schema);
    } catch {
      setSchema(null);
      setIsDocumentationShow(false);
      setCurrentURL('no URL');
      toast(dictionary.toastWrongURL[lang], {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
        <Button
          variant="outlined"
          disabled={!schema}
          onClick={() => setIsDocumentationShow(!isDocumentationShow)}
        >
          Show Documentation
        </Button>
        {isDocumentationShow && schema && <Documentation schema={schema} />}
        <ToastContainer />
      </Form>
    </section>
  );
};
