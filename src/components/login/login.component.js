const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: ['formService', function (formService) {
    this.emailPattern = formService.emailPattern;
  }]
}), ['ui.router'];
