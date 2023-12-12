import * as yup from 'yup';
import { IForm } from '../../../types/interface';

export const schemaEN: yup.ObjectSchema<IForm> = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format')
    .required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Field is required!')
    .matches(/\d/, 'The password should contain at least one number')
    .matches(/[A-Z]/, 'The password should contain at least one uppercase letter')
    .matches(/[a-z]/, 'The password should contain at least one lowercase letter')
    .matches(/[!?@#$%^&*]/, 'The password should contain at least one special character.'),
});

export const schemaRU: yup.ObjectSchema<IForm> = yup.object({
  email: yup
    .string()
    .email('Неверный формат электронной почты')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Неверный формат электронной почты')
    .required('Электронная почта обязательна для заполнения!'),
  password: yup
    .string()
    .min(6, 'Минимальная длина пароля: 6 символов')
    .required('Обязательное поле!')
    .matches(/\d/, 'Пароль должен содержать хотя бы одну цифру')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
    .matches(/[!?@#$%^&*]/, 'Пароль должен содержать хотя бы один специальный символ.'),
});
