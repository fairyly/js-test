/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var expect = require('chai').expect;
var validateTask = 
  require('../../../public/javascripts/common/validate-task');

describe('validate task tests', function() {
  var sampleTask;

  var expectFailForProperty = function(property, value) {
    sampleTask[property] = value;
    expect(validateTask(sampleTask)).to.be.false;
  };
  
  beforeEach(function() {
    sampleTask = {name: 'a new task', month: 12, day: 10, year: 2016};    
  });

  it('should return true for valid task', function() {
    expect(validateTask(sampleTask)).to.be.true;
  });

  it('should return false for undefined task', function() {
    expect(validateTask()).to.be.false;
  });
  it('should return false for null task', function() {
    expect(validateTask(null)).to.be.false;
  });
  it('should return false for undefined name', function() {
    expectFailForProperty('name');
  });
  it('should return false for null name', function() {
    expectFailForProperty('name', null);
  });
  it('should return false for empty name', function() {
    expectFailForProperty('name', '');
  });

/*
  ['month'].forEach(function(property) {
    it('should return false for undefined ' + property, function() {
      expectFailForProperty(property);
    });

    it('should return false for null ' + property, function() {
      expectFailForProperty(property, null);
    });

    it('should return false for non number ' + property, function() {
      expectFailForProperty(property, 'text');
    });    
  });
*/

  ['month', 'day', 'year'].forEach(function(property) {
    it('should return false for undefined ' + property, function() {
      expectFailForProperty(property);
    });

    it('should return false for null ' + property, function() {
      expectFailForProperty(property, null);
    });

    it('should return false for non number ' + property, function() {
      expectFailForProperty(property, 'text');
    });    
  });
});
