'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:RankingCtrl
 * @description
 * # RankingCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('RankingCtrl', function ($scope, ranking, codes) {
    $scope.allRanking = ranking.get();
	
	$scope.code="";
	
	$scope.enterCode = function() {
	      codes.save({}, {code: $scope.code}, function(){
	      });
	}
  });
