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

  /**
   * 对数据库连接进行异步测试-正向测试
   * 传入连接的数据库名，测试是否链接
   */

  it('connect should set onnection given valid database name', function(done) {
    var callback = function(err) {
      expect(err).to.be.null;
      console.log(db.get().s.url);
      expect(db.get().s.url).to.be.eql('mongodb://localhost/runoob');
      db.close();
      done();
    };
    db.connect('mongodb://localhost/runoob', callback)
  });

  /**
   * 对数据库连接进行异步测试-反向测试
   * 如果传入的数据库名错误，测试是否链接
   */
  it('connect should reject invalid name', function(done) {
    var callback = function(err) {
      expect(err).to.be.instanceof(Error);
      done();
    };
    db.connect('mongodb', callback)
  });

});
