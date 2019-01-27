/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var expect = require('chai').expect;
var linesCount = require('../src/files');

describe('test server-side callback', function() {
  it('should return correct lines count for a valid file', function(done) {
    var callback = function(count) {
      expect(count).to.be.eql(15);
      done();
    };
    
    linesCount('src/files.js', callback);
  });

  it('should report error for an invalid file name', function(done) {
    var onError = function(error) {
      expect(error).to.be.eql('unable to open file src/flies.js');
      done();
    };
    linesCount('src/flies.js', undefined, onError);
  });
});
