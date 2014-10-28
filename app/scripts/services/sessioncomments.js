'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.sessionComments
 * @description
 * # sessionComments
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('sessionComments', function($resource) {
  	return $resource('/rest/comments/:session_id');
  }).service('sessionCommentsLike', function($resource) {
  	return $resource('/rest/comments/:id/like');
  });
