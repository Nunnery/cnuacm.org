var angular = require('angular');

var idx = require('./app/index');
require('angular-ui-router');

var routesConfig = require('./routes');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', idx);
