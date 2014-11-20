'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:RankingDetailsCtrl
 * @description
 * # RankingDetailsCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('FeedbackCtrl', function($scope, feedback) {
    $scope.canPost = feedback.get();
    $scope.postFeedback = function() {
      feedback.save({}, {
        q1: $scope.q1,
        q2: $scope.q2
      }, function() {
        $scope.canPost.hasProvided = true;
        $scope.canPost.available = false;
      }, function() {});
    };
  });
