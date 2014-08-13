'use strict';

/**
 * @ngdoc overview
 * @name istaAngularApp
 * @description
 * # istaAngularApp
 *
 * Main module of the application.
 */
angular
  .module('istaAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sessions/:id', {
        templateUrl: 'views/sessiondetails.html',
        controller: 'DetailsCtrl'
      })
      .when('/codes', {
        templateUrl: 'views/codes.html',
        controller: 'CodesCtrl'
      })
      .when('/ranking', {
        templateUrl: 'views/ranking.html',
        controller: 'RankingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
