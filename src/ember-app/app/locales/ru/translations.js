import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s21',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s21',
          title: 'I s s21'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s21-вид-поддержки-l': IISISS21ВидПоддержкиLForm,
    'i-i-s-i-s-s21-форма-l': IISISS21ФормаLForm,
    'i-i-s-i-s-s21-вид-поддержки-e': IISISS21ВидПоддержкиEForm,
    'i-i-s-i-s-s21-форма-e': IISISS21ФормаEForm
  },

});

export default translations;
