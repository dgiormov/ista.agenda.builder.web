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
	$scope.refreshLeaderboard = function(){
		$scope.allRanking = ranking.get();
	}
	$scope.refreshLeaderboard();
	$scope.code="";
	
	$scope.enterCode = function() {
	      codes.save({}, {code: $scope.code}, function(resp){
			  $scope.code = "";
			  $('#mTitle').html('Congratulations');
			  $('#mDesc').html("You have won: "+ resp.points + " points.");
	      	  $('#messageModal').modal('show');
			  $scope.refreshLeaderboard();
	      });
	}
  });
