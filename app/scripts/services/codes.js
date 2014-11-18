'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.codes
 * @description
 * # codes
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('codes', function($resource) {
  	return $resource('rest/codes');
  })
  .service('challenge', function ($resource) {
  	return $resource('rest/me/challenge');
  });
