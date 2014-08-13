'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.ranking
 * @description
 * # ranking
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('ranking', function ranking($resource) {
    return $resource('/rest/ranking');
  });
