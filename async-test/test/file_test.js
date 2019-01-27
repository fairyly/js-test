var expect = require('chai').expect;
var linesCount = require('../src/file.js');

describe('async test1',function(){
  it('shoud pass this canary test',function(){
    expect(true).to.eql(true);
  });

  // it('shoud return the correct lines count',function(){
  //   let callback = function(count){
  //     expect(count).to.be.eql(999);
  //   }
  //   linesCount('src/file.js',callback);
  // });

  // it('shoud return the correct lines count',function(done){
  //   let callback = function(count){
  //     expect(count).to.be.eql(155);
  //   }
  //   linesCount('src/file.js',callback);
  // });

  // it('shoud return the correct lines count',function(done){
  //   let callback = function(count){
  //     expect(count).to.be.eql(15);
  //   }
  //   linesCount('src/file.js',callback);
  // });

  // it('shoud return the correct lines count',function(done){
  //   let callback = function(count){
  //     expect(count).to.be.eql(15);
  //     done();
  //   }
  //   linesCount('src/file.js',callback);
  // });

  it('shoud report error for an invalid file name',function(done){
    let onError = function(error){
      expect(error).to.be.eql('unable to open file src/files.js');
      done();
    }
    linesCount('src/files.js',undefined, onError);
  });
});
