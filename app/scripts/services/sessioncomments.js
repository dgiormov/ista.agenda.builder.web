'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.sessionComments
 * @description
 * # sessionComments
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('sessionComments', function sessionComments($resource) {
  	return $resource('/rest/comments/:session_id');
  });
