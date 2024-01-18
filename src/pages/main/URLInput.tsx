import { Button, Input } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { GraphiQLService } from '../../services/GraphiQLService';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '../../services/context/AppContextProvider';
import { dictionary } from '../../services/localization/dictionary';
import { useAppDispatch, useAppSelector } from '../../services/store/store';
import { schemaSlice } from '../../services/store/schemaReducer';
import { resultSlice } from '../../services/store/resultReducer';

export const URLInput = function () {
  const { register, setValue, handleSubmit } = useForm();
  const { lang } = useContext(AppContext);
  const dispatch = useAppDispatch();
  const { updateResult } = resultSlice.actions;
  const schema = useAppSelector((state) => state.schema.schema);
  const { updateSchema } = schemaSlice.actions;
  const isDocumentationShow = useAppSelector((state) => state.schema.isDocumentationShow);
  const { updateIsDocumentationShow } = schemaSlice.actions;

  const cleanInput = () => setValue('url', '');

  const handleSubmitURL = handleSubmit(async (data) => {
    if (data.url === '') {
      toast.error(dictionary.toastEmptyQuery[lang], { position: 'top-right' });
      return;
    }
    try {
      GraphiQLService.updateURL(data.url);
      const response = await GraphiQLService.runSchemaRequest();
      dispatch(updateSchema(response.data.__schema));
      dispatch(updateResult(''));
    } catch {
      dispatch(updateSchema(null));
      dispatch(updateResult(''));
      dispatch(updateIsDocumentationShow(false));
      GraphiQLService.updateURL('no URL');
      toast.warn(dictionary.toastWrongURL[lang], { position: 'top-right' });
    }
  });

  const fillExampleURL = () => setValue('url', 'https://rickandmortyapi.com/graphql');

  return (
    <section className="flex items-center mt-20">
      <div className="whitespace-nowrap">
        {dictionary.currentURL[lang]}: {GraphiQLService.baseURL}
      </div>
      <Form onSubmit={handleSubmitURL} className="w-full flex justify-end flex-wrap p-3 gap-x-2">
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
          onClick={() => dispatch(updateIsDocumentationShow(!isDocumentationShow))}
        >
          {dictionary.documentation[lang]}
        </Button>
      </Form>
    </section>
  );
};
