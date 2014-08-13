'use strict';

describe('Service: sessionDetails', function () {

  // load the service's module
  beforeEach(module('istaAngularApp'));

  // instantiate service
  var sessionDetails;
  beforeEach(inject(function (_sessionDetails_) {
    sessionDetails = _sessionDetails_;
  }));

  it('should do something', function () {
    expect(!!sessionDetails).toBe(true);
  });

});
