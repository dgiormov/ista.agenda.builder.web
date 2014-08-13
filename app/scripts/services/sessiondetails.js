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
  	return $resource('rest/sessions1/:id');
  });
