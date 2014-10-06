'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
	.controller('DetailsCtrl', function($scope, $routeParams, sessionDetails, sessionComments, RatingService) {
		$scope.descrClass="description-collapsed";
		$scope.session = sessionDetails.get({
			id: $routeParams.id
		});
		$scope.refreshComments = function(){
		$scope.comments = sessionComments.query({
			session_id: $routeParams.id
		});
			$scope.comment = "";
		}
		$scope.refreshComments();
		$scope.onSave = function() {
		      sessionComments.save({ session_id: $routeParams.id}, {data: $scope.comment});
			  $scope.refreshComments();
		}
		$scope.expandColapse = function(){
			if($scope.descrClass ==="description-expanded"){
				$scope.descrClass="description-collapsed";
			} else {
				$scope.descrClass="description-expanded";
			}
		}
		
		$scope.getStarSelectedClass = function(starNumber){
			if(starNumber <= $scope.session.rating){
				return "yes-rated";
			} else {
				return "not-rated";
			}
		}
		$scope.rate = function(stars, session){
   		 new RatingService().$save({
   				  	sessionId: session.id,
   					rating: stars}, function(){
   						$scope.session.rating = stars;
   					}, function(){
   						$scope.session.rating = 0;
   					});
			
		}
	});