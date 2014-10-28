'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
	.controller('DetailsCtrl', function($scope, $routeParams, sessionDetails, sessionComments, RatingService, PersonService) {
		$scope.descrClass="description-collapsed";
		$scope.bioStatus = new Array();
		$scope.session = sessionDetails.get({
			id: $routeParams.id
		}, function(){
			var speakers = $scope.session.speakers;
			for(var i=0; i<speakers.length; i++){
				$scope.bioStatus[i] = "description-collapsed";
			}
		});
		
		$scope.addSession = function(session) {
			new PersonService().$save({
				id: session.id,
				isSelected: !session.isSelected
			}, function() {
				session.isSelected = !session.isSelected;
			}, function(response){
				if(response.status == 401){
				 	$('#loginModal').modal('show');
				}
			});
		}
		
		$scope.refreshComments = function(){
		$scope.comments = sessionComments.query({
			session_id: $routeParams.id
		});
			$scope.comment = "";
		}
		$scope.refreshComments();
		$scope.onSave = function() {
		      sessionComments.save({ session_id: $routeParams.id}, {data: $scope.comment}).success(function(){
   				  $scope.refreshComments();
		      }).error(function(response){
  				if(response.status == 401){
  				 	$('#loginModal').modal('show');
  				}
		      });
		}
		$scope.expandColapse = function(){
			if($scope.descrClass ==="description-expanded"){
				$scope.descrClass="description-collapsed";
			} else {
				$scope.descrClass="description-expanded";
			}
		}
		
		$scope.expandColapseBio = function(indexBio){
			if($scope.bioStatus[indexBio] ==="description-expanded"){
				$scope.bioStatus[indexBio]="description-collapsed";
			} else {
				$scope.bioStatus[indexBio]="description-expanded";
			}
		}
		
		$scope.getBioClass = function(indexBio){
			return $scope.bioStatus[indexBio];
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
   					}, function(response){
   						$scope.session.rating = 0;
						if(response.status == 401){
						 	$('#loginModal').modal('show');
						}
   					});
		}
		$scope.getTrackClass = function(session) {
			if(session.$resolved){
				return session.track.replace(" ", "-").toLowerCase();				
			} else {
				return "";
			}
		}
		$scope.isAdded = function(outer){
			if(!$scope.session.isSelected){
				if(outer){
					return "not-added";
				} else{
					return "fa-plus";
				}
			} else {
				if(outer){
					return "session-added";
				} else{
					return "fa-check";
				}
			}
		}
});