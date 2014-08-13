'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
	.controller('DetailsCtrl', function($scope, $routeParams, sessionDetails, sessionComments) {
		$scope.session = sessionDetails.get({
			id: $routeParams.id
		});
		$scope.comments = sessionComments.query({
			session_id: $routeParams.id
		});
	});