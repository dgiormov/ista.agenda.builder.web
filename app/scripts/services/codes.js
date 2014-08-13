'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.codes
 * @description
 * # codes
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('codes', function codes($resource) {
  	return $resource('rest/codes');
  });
