const angular = require('angular');

angular.module('app-bootstrap').service('userService', ['$http', 
  function($http) {
    this.login = (email, password) => $http.post(
      'https://books-training-rails.herokuapp.com/api/v1/users/sign_in', { email: email,
      password: password });
  }
]);
