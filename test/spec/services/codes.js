'use strict';

describe('Service: codes', function () {

  // load the service's module
  beforeEach(module('istaAngularApp'));

  // instantiate service
  var codes;
  beforeEach(inject(function (_codes_) {
    codes = _codes_;
  }));

  it('should do something', function () {
    expect(!!codes).toBe(true);
  });

});
