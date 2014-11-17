'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:CodesCtrl
 * @description
 * # CodesCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('AchievementsCtrl', function ($scope, achievements) {
	  $scope.myAchievements = achievements.get();
	  $scope.getCss = function(level, achievement, altAch){
		  if(level == 1){
			  if($scope.myAchievements.rank1 === 'undefined'){
				  return 0.5;
			  }
			  if($.inArray(achievement, $scope.myAchievements.rank1) == -1){
			  	return 0.5;
			  } else {
			  	return 1;
			  }
		  } else if(level == 2){
			  if($scope.myAchievements.rank2 === 'undefined'){
				  return 0.5;
			  }
			  if($.inArray(achievement, $scope.myAchievements.rank2) == -1){
				  if(altAch === 'undefined'){
					  return 0.5;		  	
				  } else{
				  	if($.inArray(altAch, $scope.myAchievements.rank2) == -1){
						return 0.5;
					} else {
						return 1;
					}
				  }

			  } else {
			  	return 1;
			  }
			  
		  } else if(level == 3){
			  if($scope.myAchievements.rank3 === 'undefined'){
				  return 0.5;
			  }
			  if($.inArray(achievement, $scope.myAchievements.rank3) == -1){
			  	return 0.5;
			  } else {
			  	return 1;
			  }
			  
		  }
	  }
  });
