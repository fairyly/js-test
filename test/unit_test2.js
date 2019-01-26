// var expect = require('chai').expect;
// let Unit = require('../src/unit.js');

describe('unit test2',function(){
  let unit;
  beforeEach(function(){
    unit = new Unit();
  })
  
  it('should pass if f2c return 0c for 32F',function(){
    let fahrenheit = 32;
    let celsius = unit.f2c(fahrenheit);
    expect(celsius).to.eql(0);
  });

  it('should pass if f2c return 10c for 50F',function(){
    let fahrenheit = 50;
    let celsius = unit.f2c(fahrenheit);
    expect(celsius).to.eql(10);
  });
});