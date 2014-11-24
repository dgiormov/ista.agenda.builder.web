'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.sessionComments
 * @description
 * # sessionComments
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('topsession', function($resource) {
  	return $resource('/rest/stats/session');
  }).service('topspeaker', function($resource) {
  	return $resource('/rest/stats/speaker');
  });
