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
	  
	  
	  $scope.getStar = function(index, rating){
		  if(index <= rating){
			  return "fa-star";
		  }
		  if(index>rating && index-1<rating){
			  return "fa-star-half-o";
		  }
		  return "fa-star-o";
	  }
  });
