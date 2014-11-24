'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:RankingDetailsCtrl
 * @description
 * # RankingDetailsCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('TopSessionCtrl', function($scope, topsession, topspeaker) {
	  $scope.speakers = topspeaker.query({});
	  $scope.sessions = topsession.query({});
  });
