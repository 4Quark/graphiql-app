import { DictionaryKey, LangType, TDevName, TDeveloper } from '../types/interface';

export const dictionary = {
  nav_welcome: {
    ru: 'Домашняя',
    en: 'Home',
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

  EB_title: {
    ru: 'Упс! Что-то пошло не так.',
    en: 'Oops! Something went wrong.',
  },

  EB_subtitle: {
    ru: `У нас возникли проблемы с отображением этой части приложения. \nПожалуйста, попробуйте обновить страницу.`,
    en: `We are having trouble displaying this part of the application. \nPlease try refreshing the page.`,
  },

  developerMaria: {
    ru: 'Мария Самойлова',
    en: 'Maria Samoilova',
    github: 'https://github.com/4Quark',
    linkedin: 'https://www.linkedin.com/feed/',
    email: 'mariya_baranova@list.ru',
  },

  developerIryna: {
    ru: 'Ирина Жебрик',
    en: 'Iryna Zhebryk',
    github: 'https://github.com/iradzh',
    linkedin: 'https://www.linkedin.com/feed/',
    email: 'irinazhebrik@gmail.com',
  },

  developerAnton: {
    ru: 'Антон Гулько',
    en: 'Anton Gulko',
    github: 'https://github.com/johngaalt',
    linkedin: 'https://www.linkedin.com/feed/',
    email: 'rajon777666@gmail.com',
  },

  submitURL: {
    ru: 'выбрать URL',
    en: 'submit URL',
  },
  example: {
    ru: 'пример URL',
    en: 'URL example',
  },
  documentation: {
    ru: 'документация',
    en: 'documentation',
  },
  toastWrongURL: {
    ru: 'Упс! Кажется, введенный URL не поддерживает запросы GraphQL',
    en: 'Oops! It seems the URL you entered does not support GraphQL queries',
  },
  toastEmptyQuery: {
    ru: 'Необходимо ввести адрес API',
    en: 'The address of the API is needed',
  },
  toastWrongQuery: {
    ru: 'Что-то пошло не так',
    en: 'Something go wrong',
  },
};

export const useLanguage = (key: DictionaryKey, option: LangType) => {
  return dictionary[key][option];
};

export const getDeveloperData = (key: TDevName) => {
  return dictionary[key] as TDeveloper;
};
