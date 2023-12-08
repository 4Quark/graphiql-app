import * as yup from 'yup';
import { IForm } from '../../../types/interface';

export const schema: yup.ObjectSchema<IForm> = yup.object({
  email: yup.string().email().required('Email is required!'),
  password: yup.string().min(6).required('Password is required!'),
});
