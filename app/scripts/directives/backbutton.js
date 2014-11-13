'use strict';

/**
 * @ngdoc directive
 * @name istaAngularApp.directive:backButton
 * @description
 * # backButton
 */
angular.module('istaAngularApp')
  .directive('backButton', function() {
    return {
      restrict: 'E',
      template: '<div class="add-session session-added"><i class="fa fa-chevron-left"></i></div>',
      link: function(scope, element) {
        element.bind('click', function() {
          history.back();
          scope.$apply();
        });
      }
    };
  });
