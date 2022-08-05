import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS21ВидПоддержкиLForm from './forms/i-i-s-i-s-s21-вид-поддержки-l';
import IISISS21ФормаLForm from './forms/i-i-s-i-s-s21-форма-l';
import IISISS21ВидПоддержкиEForm from './forms/i-i-s-i-s-s21-вид-поддержки-e';
import IISISS21ФормаEForm from './forms/i-i-s-i-s-s21-форма-e';
import IISISS21ВидПоддержкиModel from './models/i-i-s-i-s-s21-вид-поддержки';
import IISISS21ФормаModel from './models/i-i-s-i-s-s21-форма';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s21-вид-поддержки': IISISS21ВидПоддержкиModel,
    'i-i-s-i-s-s21-форма': IISISS21ФормаModel
  },

  'application-name': 'I s s21',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s21',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s21',
          title: 'I s s21'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s21': {
          caption: 'ISS21',
          title: 'ISS21',
          'i-i-s-i-s-s21-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          },
          'i-i-s-i-s-s21-форма-l': {
            caption: 'Форма',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s21-вид-поддержки-l': IISISS21ВидПоддержкиLForm,
    'i-i-s-i-s-s21-форма-l': IISISS21ФормаLForm,
    'i-i-s-i-s-s21-вид-поддержки-e': IISISS21ВидПоддержкиEForm,
    'i-i-s-i-s-s21-форма-e': IISISS21ФормаEForm
  },

});

export default translations;
