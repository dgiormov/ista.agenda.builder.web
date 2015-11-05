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
      .when('/feedback', {
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackCtrl'
      })
      .when('/top', {
        templateUrl: 'views/topsessions.html',
        controller: 'TopSessionCtrl'
      }).
      when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeModalCtrl'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html'
      })
      .otherwise({
        redirectTo: function() {
          // set default date
          var day = new Date().getDate() === 26 ? 26 : 27;
          return '/days/' + day;
        }
      });
  })
  .run(function($cookies, $location){
    if (!$cookies.hideWellcome) {
      $location.path('/welcome');
    }
  }).controller('LoginCtrl', function($scope, UserService) {
    $scope.userDetails = UserService.get(function(data) {
      if (data.hasCookie && !data.isLogged) {
        window.location = 'authorize?provider=auto';
      }
    });
  })
  /**
   * $http interceptor.
   * On 401 response (without 'ignoreAuthModule' option) stores the request
   * and broadcasts 'event:auth-loginRequired'.
   * On 403 response (without 'ignoreAuthModule' option) discards the request
   * and broadcasts 'event:auth-forbidden'.
   */
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(['$rootScope', '$q', function($rootScope, $q) {
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
            case 400:
            case 405:
            case 406:
            case 409:
            case 412:
            case 428:
              if (typeof rejection.data.message !== 'undefined') {
                $('#mTitle').html('Error');
                $('#mDesc').html(rejection.data.message);
                $('#messageModal').modal('show');
              }
              break;
          }
          return $q.reject(rejection);
        }
      };
    }]);
  }]);

// quick and dirty fix for colapsable not closing
jQuery(document).ready(function() {
  jQuery('#navbar-ex1-collapse').click(function() {
    jQuery('#navbar-ex1-collapse.in').collapse('hide');
  });
});
