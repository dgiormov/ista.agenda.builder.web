'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:CodesCtrl
 * @description
 * # CodesCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('CodesCtrl', function ($scope, challenge) {
	  $scope.tittle = "Challenges are available for Gold+ users only. Check out Achievemnts tab.";
	  $scope.description = "";
  	  $scope.counter = 0;
	  $scope.challenge = challenge.get(function(){
		  if($scope.challenge.rank > 1){
		  	$scope.tittle = "Challenge unlocked"
		 	$scope.description = "Text description of the challenge";
	  	 	$scope.counter = $scope.challenge.counter;
		  }
	  	
	  });
  });
