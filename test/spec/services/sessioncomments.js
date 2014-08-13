'use strict';

describe('Service: sessionComments', function () {

  // load the service's module
  beforeEach(module('istaAngularApp'));

  // instantiate service
  var sessionComments;
  beforeEach(inject(function (_sessionComments_) {
    sessionComments = _sessionComments_;
  }));

  it('should do something', function () {
    expect(!!sessionComments).toBe(true);
  });

});
