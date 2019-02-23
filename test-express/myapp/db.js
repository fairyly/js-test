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
};

module.exports = dbConnect;
