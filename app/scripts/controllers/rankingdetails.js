'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:RankingDetailsCtrl
 * @description
 * # RankingDetailsCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('RankingDetailsCtrl', function ($scope, ranking, $routeParams) {
	  $scope.player = ranking.get({id: $routeParams.id});
  });
