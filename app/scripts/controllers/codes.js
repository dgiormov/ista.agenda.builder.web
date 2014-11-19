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
	  $scope.tittle = "Unlock the challenge by reaching Gold User status !";
	  $scope.description = "";
  	  $scope.counter = 0;
	  $scope.challenge = challenge.get(function(){
		  if($scope.challenge.rank > 1){
			  if($scope.challenge.unlocked){
				  $scope.tittle = "Challenge unlocked";		  	
	  	  	 	  $scope.counter = $scope.challenge.counter;
			  } else {
				  $scope.tittle = "You can unlock the challenge now.";
  	  	 	  $scope.counter = "";
		  		}
		  }
	  	
	  });
	  
	  $scope.goldAndUnlocked = function(){
		  return $scope.challenge.rank > 1 && $scope.challenge.unlocked;
	  }
	  $scope.goldAndLocked = function(){
		  return $scope.challenge.rank > 1 && !$scope.challenge.unlocked;
	  }
	  
  });
