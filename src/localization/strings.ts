import { Dictionary, LangType } from '../types/interface';

export const dataEN = {
  nav_welcome: 'Home',
  nav_lang_ru: 'RU',
  nav_lang_eng: 'EN',

  button_logout: 'Log out',
  button_signin: 'Log in',
  button_signup: 'Create account',

  auth_guest_question: `Don't have an account yet?`,
  auth_user_question: 'Already have an account?',

  email: 'Email',
  password: 'Password',

  NotFound_title: 'Sorry, the page you are looking for does not exist.',
  NotFound_content: 'Please check the URL or go back to ',
  NotFound__link_to_main: 'Main',

  link_to_main: 'Main page',

  main: 'Main',
};

export const dataRU = {
  nav_welcome: 'Домашняя',
  nav_lang_ru: 'РУ',
  nav_lang_eng: 'АНГ',

  button_logout: 'Выйти',
  button_signin: 'Войти',
  button_signup: 'Создать аккаунт',

  auth_guest_question: 'Нет аккаунта?',
  auth_user_question: 'Уже есть аккаунт?',

  email: 'Почтовый адрес',
  password: 'Пароль',

  NotFound_title: 'Извините, такой страницы не существует.',
  NotFound_content: 'Пожалуйста, проверьте URL или возвращайтесь на ',
  NotFound__link_to_main: ' главную',

  link_to_main: 'Главная',

  main: 'Главная',
};

export const dictionary: Dictionary = {
  nav_welcome: {
    ru: 'Домашняя',
    en: 'Home',
  },
  nav_lang_ru: {
    ru: 'RU',
    en: 'РУ',
  },
  nav_lang_eng: {
    ru: 'АНГ',
    en: 'EN',
  },
  button_logout: {
    ru: 'Выйти',
    en: 'Log out',
  },
  button_signin: {
    ru: 'Войти',
    en: 'Log in',
  },
  button_signup: {
    ru: 'Создать аккаунт',
    en: 'Create account',
  },
  auth_guest_question: {
    ru: 'Нет аккаунта?',
    en: `Don't have an account yet?`,
  },
  auth_user_question: {
    ru: 'Уже есть аккаунт?',
    en: 'Already have an account?',
  },
  email: {
    ru: 'Почтовый адрес',
    en: 'Email',
  },
  password: {
    ru: 'Пароль',
    en: 'Password',
  },
  NotFound_title: {
    ru: 'Извините, такой страницы не существует.',
    en: 'Sorry, the page you are looking for does not exist.',
  },
  NotFound_content: {
    ru: 'Пожалуйста, проверьте URL или возвращайтесь на ',
    en: 'Please check the URL or go back to ',
  },
  NotFound__link_to_main: {
    ru: ' главную',
    en: 'Main',
  },
  link_to_main: {
    ru: 'Главная',
    en: 'Main page',
  },
  main: {
    ru: 'Главная',
    en: 'Main',
  },
};

export const useLanguage = <K extends keyof Dictionary>(key: K, lang: LangType) => {
  return dictionary[key][lang];
};
