var db = require('../db');
var ObjectId = require('mongodb').ObjectId;
var collectionName = 'runoob';

var all =  {
  all: function(callback) {
    db.get().collection(collectionName).find().toArray(callback);
  },
  get: function(taskId) {
    db.get().collection(collectionName).find({'_id': new ObjectId(taskId)}).limit(1).next(callback)
  }
};

module.exports = all;
