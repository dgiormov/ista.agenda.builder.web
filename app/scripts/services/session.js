'use strict';

/**
 * @ngdoc service
 * @name istaAngularApp.session
 * @description
 * # session
 * Service in the istaAngularApp.
 */
angular.module('istaAngularApp')
  .service('session', function session($resource) {
    return $resource('rest/sessions');
  })
  .service('PersonService', ["$resource", function($resource){
  	return $resource("rest/book/session");
  }]);
