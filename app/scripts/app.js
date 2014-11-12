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
  .config(function($routeProvider) {
    $routeProvider
      .when('/days/:id', {
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
      .when('/ranking/:id', {
        templateUrl: 'views/ratingdetails.html',
        controller: 'RatingDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/days/27'
      });
  }).controller('LoginCtrl', function($scope, UserService) {
    $scope.userDetails = UserService.get(function(data) {
      if (data.hasCookie && !data.isLogged) {
        window.location = 'authorize?provider=auto';
      }
    });
  }).controller('wellcomeModalCtrl', function($scope, $cookies) {
	  $scope.showLogin = false;
    if (!$cookies.hideWellcome) {
      $('#wellcomeModal').modal('show');
    }
    $scope.goToLogin = function() {
       $scope.showLogin = true;
       $cookies.hideWellcome = true;
    };

    $scope.hide = function() {
      $cookies.hideWellcome = true;
    };
  })
  /**
   * $http interceptor.
   * On 401 response (without 'ignoreAuthModule' option) stores the request
   * and broadcasts 'event:auth-loginRequired'.
   * On 403 response (without 'ignoreAuthModule' option) discards the request
   * and broadcasts 'event:auth-forbidden'.
   */
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(['$rootScope', '$q', function($rootScope, $q, httpBuffer) {
      return {
        responseError: function(rejection) {
          switch (rejection.status) {
            case 401:
              var deferred = $q.defer();
              $('#loginModal').modal('show');
              return deferred.promise;
            case 403:
              $('#loginModal').modal('show');
              break;
          }
          return $q.reject(rejection);
        }
      };
    }]);
  }]);

// quick and dirty fix for colapsable not closing
jQuery(document).ready(function() {
  jQuery("#navbar-ex1-collapse").click(function() {
    jQuery("#navbar-ex1-collapse.in").collapse('hide');
  });
});
