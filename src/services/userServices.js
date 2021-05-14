const angular = require('angular');

angular.module('app-bootstrap').service('userService', ['$http', '$window',
  function($http, $window) {
    this.login = (email, password) => $http.post(
      'https://books-training-rails.herokuapp.com/api/v1/users/sign_in', { email: email,
        password: password });
    this.getBooks = () => $http.get(
      'https://books-training-rails.herokuapp.com/api/v1/books?', {
        headers: { 'access-token': $window.localStorage.getItem('AccessToken'),
          uid: $window.localStorage.getItem('uid'), client: $window.localStorage.getItem('client') }
      });
  }
]);
