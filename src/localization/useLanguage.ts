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

  team: {
    ru: 'Команда:',
    en: 'Team:',
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
    ru: `The Rolling Scopes - это бесплатная и образовательная программа на основе сообщества, проводимая сообществом разработчиков The Rolling Scopes с 2013 года.`,
    en: `The Rolling Scopes is free-of-charge and community-based education program conducted by The Rolling Scopes developer community
    since 2013.`,
  },
  reactParagraph_02: {
    ru: 'Курс по React доступен как для выпускников курса по JavaScript, так и для новых студентов. По завершении обучения студенты получат электронный сертификат об окончании.',
    en: 'React course is availible for JS-course graduates as well as new students. After accomplishing an education, students will receive an electronic certificate of completion.',
  },

  reactParagraph_03: {
    ru: `Этот курс доступен только на английском языке.`,
    en: `This course is available only in English.`,
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
    ru: 'Финальный проект курса React',
    en: 'Final task in React course',
  },

  projectParagraph_01: {
    ru: 'Добро пожаловать в GraphiQL App, совместный проект нашей команды! Кроме того, мы внежрили здесь такие возможности как аутентификация пользователя и возможность работы с любым указанным пользователем открытым конечным точкам GraphQL.',
    en: 'Welcome to the GraphiQL App, a collaborative effort by our team of developers! Here we provide a robust playground/IDE for making GraphQL requests. Our application goes beyond the standard GraphiQL example by incorporating advanced features such as user authentication and the ability to work with any user-specified open GraphQL endpoint.',
  },

  projectLink: {
    ru: 'Полное задание',
    en: 'Full task description',
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
  }
};

export const useLanguage = (key: DictionaryKey, option: LangType) => {
  return dictionary[key][option];
};

export const getDeveloperData = (key: TDevName) => {
  return dictionary[key] as TDeveloper;
};
