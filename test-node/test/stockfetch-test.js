/**
 * 金丝雀测试
 */
var expect = require('chai').expect;
var sinon = require('sinon');
var fs = require('fs');
var StockFetch = require('../src/stockfetch.js');

describe('unit test1',function(){
  it('shoud pass this canary test',function(){
    expect(true).to.eql(true);
  });
});

describe('StockFetch test1',function(){
  var stockFetch;
  var sandbox;

  beforeEach(function(){
    stockFetch = new StockFetch();
    sandbox = sinon.sandbox.create();
  });

  afterEach(function(){
    sandbox.restore();
  });

  it('shoud pass this canary test',function(){
    expect(true).to.eql(true);
  });

  /**
   * 增加测试
   */
  it('shoud pass this canary test',function(done){
    var onError = function(){
      expect(true).to.eql(true);
      done();
    };

    sandbox.stub(fs, 'readFile',function(fileName, callBack) {
      callBack(new Error('failed'));
    })

    stockFetch.readTickersFile('invalid', onError);
  });

  /**
   * 正向测试
   */

  it('shoud pass this canary test',function(done){
    var rawData = 'GOOD\nAAPL';
    var parsedData = ['GOOD', 'AAPL'];

    sandbox.stub(stockFetch, 'parseTickers').withArgs(rawData).returns(parsedData);

    sandbox.stub(stockFetch, 'processTickers',function(data) {
      expect(data).to.eql(parsedData);
      done();
    })

    sandbox.stub(fs, 'readFile',function(fileName, callBack) {
      callBack(null, rawData);
    })

    stockFetch.readTickersFile('tickeers.txt');
  });

  /**
   * 反向测试
   */

  it('shoud return error if given file is empty',function(done){
    var onError = function(err) {
      expect(err).to.eql('file:tickeers.txt has invalid content');
      done();
    };

    sandbox.stub(stockFetch, 'parseTickers').withArgs('').returns([]);

    sandbox.stub(fs, 'readFile',function(fileName, callBack) {
      callBack(null, '');
    })

    stockFetch.readTickersFile('tickeers.txt',onError);
  });
});







