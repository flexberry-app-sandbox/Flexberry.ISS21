import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s21-вид-поддержки-l');
  this.route('i-i-s-i-s-s21-вид-поддержки-e',
  { path: 'i-i-s-i-s-s21-вид-поддержки-e/:id' });
  this.route('i-i-s-i-s-s21-вид-поддержки-e.new',
  { path: 'i-i-s-i-s-s21-вид-поддержки-e/new' });
  this.route('i-i-s-i-s-s21-форма-l');
  this.route('i-i-s-i-s-s21-форма-e',
  { path: 'i-i-s-i-s-s21-форма-e/:id' });
  this.route('i-i-s-i-s-s21-форма-e.new',
  { path: 'i-i-s-i-s-s21-форма-e/new' });
});

export default Router;
