'use strict';
angular.module('istaAngularApp')
  .controller('WelcomeModalCtrl', function($scope, $cookies, $location) {
  $scope.showLogin = false;
  $('#wellcomeModal').modal('show');

  $scope.goToLogin = function() {
    $scope.showLogin = true;
    $cookies.hideWellcome = true;
  };

  $scope.hide = function() {
    $('.modal-backdrop.fade.in').remove();
    $cookies.hideWellcome = true;
    $location.path('/');
  };
});
