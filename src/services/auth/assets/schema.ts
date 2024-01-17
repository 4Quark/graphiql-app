import * as yup from 'yup';
import { IForm, LangType } from '../../../types/interface';
import { VALIDATION_PATTERN } from './utils/patterns';
import { dictionary } from '../../localization/dictionary';

export const getSchema = (lang: LangType) => {
  const schema: yup.ObjectSchema<IForm> = yup.object({
    email: yup
      .string()
      .email(dictionary.schemaEmail[lang])
      .matches(VALIDATION_PATTERN.EMAIL, dictionary.schemaEmail[lang])
      .required(dictionary.schemaRequierd[lang]),
    password: yup
      .string()
      .min(6, dictionary.schemaLength[lang])
      .required(dictionary.schemaRequierd[lang])
      .matches(VALIDATION_PATTERN.PASS_NUM, dictionary.schemaPassNum[lang])
      .matches(VALIDATION_PATTERN.PASS_UPPER, dictionary.schemaPassUp[lang])
      .matches(VALIDATION_PATTERN.PASS_LOWER, dictionary.schemaPassLow[lang])
      .matches(VALIDATION_PATTERN.PASS_SPEC_CHAR, dictionary.schemaPassSpec[lang]),
  });
  return schema;
};
