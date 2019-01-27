/*var expect = require('chai').expect;
var linesCount = require('../src/file.js');

describe('async test1',function(){
  it('shoud pass this canary test',function(){
    expect(true).to.eql(true);
  });

  it('shoud return the correct lines count',function(done){
    let callback = function(count){
      expect(count).to.be.eql(18);
      done();
    }
    linesCount('src/file.js')
              .then(callback);
  });
});*/

/* 结合 eventually 和 done() */

/*var expect = require('chai').use(require('chai-as-promised')).expect;
var linesCount = require('../src/file.js');

describe('async test1',function(){
  it('shoud return the correct lines count',function(){
    return expect(linesCount('src/file.js')).to.eventually.eql(18);
  });
});*/

/* 反向测试 */

/*var expect = require('chai').use(require('chai-as-promised')).expect;
var linesCount = require('../src/file.js');

describe('async test1',function(){
  it('shoud return the correct lines count',function(done){
    expect(linesCount('src/files.js')).to.be.rejected.notify(done);
  });
});*/

/* */
var expect = require('chai').use(require('chai-as-promised')).expect;
var linesCount = require('../src/file.js');

describe('async test1',function(){
  it('shoud return the correct lines count',function(done){
     expect(linesCount('src/files.js')).to.be.rejectedWith('unable to open file src/files.js').notify(done);
  });
});
