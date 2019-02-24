var MongoClient = require('mongodb').MongoClient;

var dbConnect =  {
  connection: null,
  get: function() {
    return this.connection;
  },
  close: function() {
    if (this.connection) {
      this.connection.close();
      this.connection = null;
    }
  },
  connect: function(dbname, callback) {
    var that = this;

    var cacheConnection = function(err, db) {
      that.connection = db;
      callback(null);
    }

    try {
      MongoClient.connect(dbname, cacheConnection);
    }catch(ex) {
      callback(ex);
    }

  }
};

module.exports = dbConnect;
