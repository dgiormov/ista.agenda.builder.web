'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.ranking
 * @description
 * # ranking
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('UserService', function user($resource) {
    return $resource('/rest/user');
  });
