import { Dictionary, LangType } from '../types/interface';

export const dictionary: Dictionary = {
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

  EB_subtitle_01: {
    ru: 'У нас возникли проблемы с отображением этой части приложения.',
    en: 'We are having trouble displaying this part of the application.',
  },

  EB_subtitle_02: {
    ru: 'Пожалуйста, попробуйте обновить страницу.',
    en: 'Please try refreshing the page.',
  },

  developerMaria: {
    ru: 'Мария Самойлова',
    en: 'Maria Samoilova',
    github: 'https://github.com/4Quark',
  },

  developerIryna: {
    ru: 'Ирина Жебрик',
    en: 'Iryna Zhebryk',
    github: 'https://github.com/iradzh',
  },

  developerAnton: {
    ru: 'Антон Гулько',
    en: 'Anton Gulko',
    github: 'https://github.com/johngaalt',
  },
};

export const useLanguage = <K extends keyof Dictionary>(key: K, lang: LangType) => {
  return dictionary[key][lang];
};

export const useGitLink = <K extends keyof Dictionary>(key: K) => {
  return dictionary[key]['github'];
};
