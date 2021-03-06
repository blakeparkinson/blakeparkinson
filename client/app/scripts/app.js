'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'analytics.mixpanel',
    'angular-svg-round-progress'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/task', {
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl',
        controllerAs: 'task'
      })
      .when('/language', {
        templateUrl: 'views/language.html',
        controller: 'LanguageCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);

  });

angular.module('analytics.mixpanel')
  .config(['$mixpanelProvider', function($mixpanelProvider) {
    $mixpanelProvider.apiKey('1840988862eca86edd2dacc90144f3aa'); // your token is different than your API key
  }]);
