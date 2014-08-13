'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the istaAngularApp
 */
 angular.module('istaAngularApp')
 .controller('MainCtrl', function ($scope, session) {
     $scope.sessions = session.query();
 });
