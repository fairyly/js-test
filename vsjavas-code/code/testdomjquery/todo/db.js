/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var MongoClient = require('mongodb').MongoClient;

module.exports = {
  connection: null,
  
  get: function() { return this.connection; },

   close: function() {
     if(this.connection) {
       this.connection.close();
       this.connection = null;
     }
   },

  connect: function(dbname, callback) {
    var self = this;
  
    var cacheConnection = function(err, db) {
      self.connection= db;
      callback(err);
    };
  
    try {
      MongoClient.connect(dbname, cacheConnection);
    } catch(ex) {
      callback(ex);
    }
  }
  
};
