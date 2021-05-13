const angular = require('angular');

angular.module('app-bootstrap').service('formService', [
  function() {
    this.emailPattern = '/^([\w-\.] + )@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)' +
    '|(([\w-] + \.) + ))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/';
  }
]);
