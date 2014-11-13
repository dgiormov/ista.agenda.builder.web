'use strict';

describe('Controller: RatingdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('istaAngularApp'));

  var RatingdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RatingdetailsCtrl = $controller('RatingdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
