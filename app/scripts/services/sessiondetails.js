'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.sessionDetails
 * @description
 * # sessionDetails
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('sessionDetails', function($resource) {
  	return $resource('rest/sessions/:id');
  })
  .service('RatingService', function($resource) {
  	return $resource('rest/rating/session');
  })
  .service('SpeakerRatingService', function($resource) {
  	return $resource('rest/rating/speaker');
  })
  
  .service('shareService', function($resource) {
  	return $resource('rest/me/share');
  });
