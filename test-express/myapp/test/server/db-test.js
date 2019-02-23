var expect = require('chai').expect;
var db = require('../../db');

describe('db tests', function() {
  it('should pass this canary test', function() {
    expect(true).to.be.true;
  });

  it('should return null connection by default', function() {
    expect(db.get()).to.be.null;
  });

  it('should return null connection by default', function() {
    db.close();
    expect(db.connection).to.be.null;
  });

  it('should return null connection by default', function(done) {
    db.connection = {
      close: function() {
        done();
      }
    };
    db.close();
    expect(db.connection).to.be.null;
  });
});
