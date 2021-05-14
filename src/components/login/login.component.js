const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: ['userService', '$window', '$state', function (userService, $window, $state) {
    this.tryLogin = (email, password) => {
      userService.login(email, password)
        .then(response => {
          const AccessTokenValue = response.headers('access-token');
          const uid = response.headers('uid');
          const client = response.headers('client');
          $window.localStorage.setItem('AccessToken', AccessTokenValue);
          $window.localStorage.setItem('uid', uid);
          $window.localStorage.setItem('client', client);
          $state.transitionTo('bookList');
        })
        .catch(error => {
          this.loginError = true;
          console.log(error);
        });
    };
    this.loginError = false;
  }]
});
