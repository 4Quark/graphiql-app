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

  responsibilities: {
    ru: 'Обязанности',
    en: 'Responsibilities',
  },

  developerMariaRespons: {
    ru: ['Настройка проекта'],
    en: ['Project setup'],
  },

  developerAntonRespons: {
    ru: ['Функциональный редактор для редактирования запросов и форматирования', 'ErrorBoundary'],
    en: ['Functional editor enabling query editing and prettifying', 'ErrorBoundary'],
  },

  developerIrynaRespons: {
    ru: [
      'Маршрутизатор: защищенные и общедоступные маршруты',
      'Контекст приложения и локализация',
      'Пользовательская аутентификация через Firebase',
    ],
    en: [
      'Router: protected and public routes',
      'App Context and Localisation',
      'User Authentication via Firebase',
    ],
  },

  location: {
    ru: 'Город: ',
    en: 'Located in ',
  },

  developerMariaLocation: {
    ru: 'Москва, Россия',
    en: 'Moscow, Russia',
  },

  developerAntonLocation: {
    ru: 'Анталия, Турция',
    en: 'Antalya, Turkey',
  },

  developerIrynaLocation: {
    ru: 'Берлин, Германия',
    en: 'Berlin, Germany',
  },

  reactTitle: {
    ru: 'Курс React',
    en: 'React Course',
  },

  reactParagraph_01: {
    ru: `Курс React - это бесплатная образовательная программа, организованная сообществом разработчиков Rolling Scopes.`,
    en: `React Course is free-of-charge and community-based education program conducted by The
    Rolling Scopes developer community.`,
  },
  reactParagraph_02: {
    ru: 'Учиться в RS School может каждый, независимо от возраста, профессиональной занятости или места жительства. Однако перед началом программы важно обладать достаточными базовыми знаниями.',
    en: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence. However, you should have sufficient base knowledge before the program begins.',
  },

  reactLink: {
    ru: 'Подробнее',
    en: 'More details',
  },

  projectTitle: {
    ru: 'GraphiQL',
    en: 'GraphiQL',
  },

  projectSubtitle: {
    ru: 'GraphiQL',
    en: 'Final task in React course',
  },

  projectParagraph_01: {
    ru: '123',
    en: '456',
  },

  projectParagraph_02: {
    ru: '123',
    en: '456',
  },

  projectParagraph_03: {
    ru: '123',
    en: '456',
  },

  projectLink: {
    ru: 'Полное задание',
    en: 'Full task description',
  },
};

export const useLanguage = (key: DictionaryKey, option: LangType) => {
  return dictionary[key][option];
};

export const getDeveloperData = (key: TDevName) => {
  return dictionary[key] as TDeveloper;
};
