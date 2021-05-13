const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: ['userService', '$window', '$state', function (userService, $window, $state) {
    this.tryLogin = (email, password) => {
      userService.login(email, password)
        .then(response => {
          const AccessTokenValue = response.headers('access-token');
          $window.localStorage.setItem('AccessToken', AccessTokenValue);
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
