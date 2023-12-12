import * as yup from 'yup';
import { IForm } from '../../../types/interface';

export const schema: yup.ObjectSchema<IForm> = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format')
    .required('Email is required!'),
  password: yup
    .string()
    .min(6)
    .required('Field is required!')
    .matches(/\d/, 'The password should contain at least one number')
    .matches(/[A-Z]/, 'The password should contain at least one uppercase letter')
    .matches(/[a-z]/, 'The password should contain at least one lowercase letter')
    .matches(/[!?@#$%^&*]/, 'The password should contain at least one special character.'),
});
