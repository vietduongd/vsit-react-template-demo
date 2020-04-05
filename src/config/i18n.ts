import i18n from 'i18next';
import vi from "./language/vn.json"
import en from "./language/vn.json"
i18n
  .init({
    // we init with resources
    resources: {
      en: en,
      vn: vi
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;