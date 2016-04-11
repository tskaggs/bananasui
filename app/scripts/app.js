'use strict';

/**
 * @ngdoc overview
 * @name bananasuiApp
 * @description
 * # bananasuiApp
 *
 * Main module of the application.
 */
angular
  .module('bananasuiApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('public', {
        url: '',
        abstract: true,
        template: '<ui-view></ui-view>',
        controller: 'MainCtrl'
      })
      .state('public.main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('public.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      });
  });
