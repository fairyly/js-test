/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var expect = require('chai').expect;
var Util = require('../src/util');

describe('util tests', function() {
  //...canary test not shown...
  
  it('should pass this canary test', function() {
    expect(true).to.eql(true);
  });

  var util;
  
  beforeEach(function() {
    util = new Util();
  });

  it('should pass if f2c returns 0C for 32F', function() {
    var fahrenheit = 32;

    var celsius = util.f2c(fahrenheit);

    expect(celsius).to.eql(0);
  });

});
