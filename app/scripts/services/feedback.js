'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.codes
 * @description
 * # codes
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('feedback', function($resource) {
  	return $resource('rest/feedback');
  });