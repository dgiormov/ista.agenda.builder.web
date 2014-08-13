'use strict';

/**
 * @ngdoc function
 * @name istaAngularApp.controller:RankingCtrl
 * @description
 * # RankingCtrl
 * Controller of the istaAngularApp
 */
angular.module('istaAngularApp')
  .controller('RankingCtrl', function ($scope, ranking) {
    $scope.allRanking = ranking.get();
  });
