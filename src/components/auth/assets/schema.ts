import * as yup from 'yup';
import { IForm, LangType } from '../../../types/interface';

export const schemaDictionary = {
  schemaEmail: {
    ru: 'Неверный формат электронной почты',
    en: 'Invalid email format',
  },

  schemaRequierd: {
    ru: 'Обязательное поле для заполнения!',
    en: 'Field is required!',
  },

  schemaLength: {
    ru: 'Минимальная длина пароля: 6 символов',
    en: 'Password must be at least 6 characters',
  },

  schemaPassNum: {
    ru: 'Пароль должен содержать хотя бы одну цифру',
    en: 'The password should contain at least one number',
  },

  schemaPassUp: {
    ru: 'Пароль должен содержать хотя бы одну заглавную букву',
    en: 'The password should contain at least one uppercase letter',
  },

  schemaPassLow: {
    ru: 'Пароль должен содержать хотя бы одну строчную букву',
    en: 'The password should contain at least one lowercase letter',
  },
  schemaPassSpec: {
    ru: 'Пароль должен содержать хотя бы один специальный символ',
    en: 'The password should contain at least one special character',
  },
};

export const getSchema = (language: LangType) => {
  const schema: yup.ObjectSchema<IForm> = yup.object({
    email: yup
      .string()
      .email(schemaDictionary['schemaEmail'][language])
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        schemaDictionary['schemaEmail'][language]
      )
      .required(schemaDictionary['schemaRequierd'][language]),
    password: yup
      .string()
      .min(6, schemaDictionary['schemaLength'][language])
      .required(schemaDictionary['schemaRequierd'][language])
      .matches(/\d/, schemaDictionary['schemaPassNum'][language])
      .matches(/[A-Z]/, schemaDictionary['schemaPassUp'][language])
      .matches(/[a-z]/, schemaDictionary['schemaPassLow'][language])
      .matches(/[!?@#$%^&*]/, schemaDictionary['schemaPassSpec'][language]),
  });
  return schema;
};
