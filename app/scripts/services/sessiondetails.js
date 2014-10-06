'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.sessionDetails
 * @description
 * # sessionDetails
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('sessionDetails', function sessionDetails($resource) {
  	return $resource('rest/sessions/:id');
  })
  .service('RatingService', function sessionDetails($resource) {
  	return $resource('rest/rating/session');
  });
