import i18n from 'i18next';
import {
  initReactI18next
} from 'react-i18next';

const resources = {
  en: {
    translation: {
        home: 'Home',
        details: 'Details',
        Bookmark: 'Bookmarked Items',
        Instructor: 'Instructor',
        Tags: 'Tags'
    },
  },
  fr: {
    translation: {},
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;