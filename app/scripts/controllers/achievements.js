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
	  
	  
	  $scope.help = function(achievement){
		  var helpText = "";
		  switch(achievement) {
		      case "login":
		          helpText = "Login";
		          break;
		      case "prepare":
		          helpText = "Prepare for the conference by selecting, which sessions you will attend.";
		          break;
		      case "share":
		          helpText = "Share your experience in social networks. (Share buttons are in session details)";
		          break;
		      case "rate":
		          helpText = "Rate session or speaker.";
		          break;
		      case "comment":
		          helpText = "Place a comment in some session slot.";
		          break;
		      case "top100":
		          helpText = "Manage to get in Top 100 in our leaderboard.";
		          break;
		      case "liked5":
		          helpText = "Recieve 5+ likes on comment you have posted.";
		          break;
		      case "fillupsurvey":
		          helpText = "Give us some feedback for the conference";
		          break;
		      case "tshirt":
		          helpText = "Help our charity cause, buy a T-Shirt and enter the code in the application.";
		          break;
				
			  }
			  $('#mTitle').html('To win this achievement you have to:');
			  $('#mDesc').html(helpText);
	      	  $('#messageModal').modal('show');
			 
	  }
	  
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
