const angular = require('angular');

angular.module('app-bootstrap').factory('logIn', [
  function login(email,password) {
    $http({
      url: 'https://books-training-rails.herokuapp.com/api/v1/users/sign_in',
      method: "POST",
      data: { 'email' : email,
              'password' : password}
    })
    .then(function(response) {
      console.log(response);
    }, 
    function(response) {
      console.log(response);
    });
    return {
      getMessage: () => message
    };
  }
]);
