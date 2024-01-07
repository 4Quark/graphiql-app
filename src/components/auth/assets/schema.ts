import * as yup from 'yup';
import { IForm, LangType } from '../../../types/interface';
import { VALIDATION_PATTERN } from '../../../utils/patterns';

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
      .matches(VALIDATION_PATTERN.EMAIL, schemaDictionary['schemaEmail'][language])
      .required(schemaDictionary['schemaRequierd'][language]),
    password: yup
      .string()
      .min(6, schemaDictionary['schemaLength'][language])
      .required(schemaDictionary['schemaRequierd'][language])
      .matches(VALIDATION_PATTERN.PASS_NUM, schemaDictionary['schemaPassNum'][language])
      .matches(VALIDATION_PATTERN.PASS_UPPER, schemaDictionary['schemaPassUp'][language])
      .matches(VALIDATION_PATTERN.PASS_LOWER, schemaDictionary['schemaPassLow'][language])
      .matches(VALIDATION_PATTERN.PASS_SPEC_CHAR, schemaDictionary['schemaPassSpec'][language]),
  });
  return schema;
};
