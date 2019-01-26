// var expect = require('chai').expect;
// let isPalindrome = require('../src/palindrome.js');

describe('unit test3',function(){

  it('should pass this test',function(){
    expect(true).to.eql(true);
  });

  it('should return true for argument mom',function(){
    expect(isPalindrome('mom')).to.be.true;
  });
});