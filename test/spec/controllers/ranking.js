'use strict';

describe('Controller: RankingCtrl', function () {

  // load the controller's module
  beforeEach(module('istaAngularApp'));

  var RankingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankingCtrl = $controller('RankingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
