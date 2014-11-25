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
	  $scope.counterInPercents = 0;
	  $scope.imgurl = "images/challenge/baby.png";
	  $scope.challenge = challenge.get(function(){
		  if($scope.challenge.rank > 1){
			  if($scope.challenge.unlocked){
				  if(!$scope.challenge.code){
					  $scope.tittle = "Challenge started";
					  $scope.imgurl = "images/challenge/charity.jpg";
		  	  	 	  $scope.counter = $scope.challenge.counter;
				  	  $scope.counterInPercents = $scope.challenge.counter / 2;
					  if($scope.counterInPercents > 100){
						  $scope.counterInPercents = 100;
					  }
				  } else {
					  $scope.tittle = "Well done, you have completed the challenge";
					  $scope.imgurl = "images/challenge/charity.jpg";
		  	  	 	  $scope.counter = $scope.challenge.counter;
				  	  $scope.counterInPercents = $scope.challenge.counter / 2;
					  if($scope.counterInPercents > 100){
						  $scope.counterInPercents = 100;
					  }
				  }
				  if($scope.challenge.counter > 200){
					  $scope.tittle = "Additional donation unlocked";
					  $scope.imgurl = "images/challenge/ista3.jpg";
				  }
			  } else {
				  $scope.tittle = "You can unlock the challenge now.";
  			  	  $scope.imgurl = "images/challenge/treasure-map.png";
				  $scope.counter = "";
				  $scope.counterInPercents = "";
		  		}
		  }
	  	
	  });
	  
	  $scope.goldAndUnlocked = function(){
		  return $scope.challenge.rank > 1 && $scope.challenge.unlocked && !$scope.challenge.code;
	  };
	  $scope.goldAndLocked = function(){
		  return $scope.challenge.rank > 1 && !$scope.challenge.unlocked;
	  };
	  $scope.goldAndFinished = function(){
		  return $scope.challenge.rank > 1 && $scope.challenge.unlocked && $scope.challenge.code && $scope.challenge.counter <200;
	  };

	  $scope.finito = function(){
		  return $scope.challenge.rank > 1 && $scope.challenge.unlocked && $scope.challenge.code && $scope.challenge.counter >=200;
	  };
  });
