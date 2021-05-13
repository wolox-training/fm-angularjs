const angular = require('angular');

angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('bookList', {
        url: '/',
        component: 'bookList',
        resolve: {
          authentification: function ($state) {
            if (!window.localStorage.getItem('AccessToken')) {
              $state.transitionTo('login');
            }
          }
        }
      }).state('login', {
        url: '/login',
        component: 'login',
        resolve: {
          authentification: function ($state) {
            if (window.localStorage.getItem('AccessToken')) {
              $state.transitionTo('bookList');
            }
          }
        }
      }).state('component2',
        {
          url: '/component2',
          component: 'component2'
        });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run(['$transitions',
  function ($transitions) {
    $transitions.onBefore({ from: 'home' }, transition => {
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });
  }
]);
