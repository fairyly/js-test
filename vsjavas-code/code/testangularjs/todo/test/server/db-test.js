/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var db = require('../../db');

var expect = require('chai').expect;

describe('db tests', function() {
  it('should pass this canary test', function() {
    expect(true).to.be.true;
  });

  it('get should return null connection by default', function() {
    expect(db.get()).to.be.null;
  });

  it('close should set connection to null', function() {
    db.close();
    expect(db.connection).to.be.null;
  });

  it('close should close existing connection', function(done) {
    db.connection = { close: function() { done(); } };
    db.close();
    expect(db.connection).to.be.null;
  });

  it('connect should set connection given valid database name', function(done) {
    var callback = function(err) {
      expect(err).to.be.null;
      expect(db.get().databaseName).to.be.eql('todotest');
      db.close();
      done();
    };
    
    db.connect('mongodb://localhost/todotest', callback);
  });

  it('connect should reject invalid schema', function(done) {
    var callback = function(err) {
      expect(err).to.be.instanceof(Error);
      done();
    };
    
    db.connect('badschema://localhost/todotest', callback);    
  });

  it('connect should reject invalid name', function(done) {
    var callback = function(err) {
      expect(err).to.be.instanceof(Error);
      done();
    };
    
    db.connect('mongodb', callback);    
  });

});
