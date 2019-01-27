/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var db = require('../db');
var ObjectId = require('mongodb').ObjectId;
var validateTask = require('../public/javascripts/common/validate-task');

var collectionName = 'tasks';

module.exports = {
  all: function(callback) {
    db.get().collection(collectionName).find().toArray(callback);
  },


  get: function(taskId, callback) {
    db.get().collection(collectionName)
      .find({'_id': new ObjectId(taskId)}).limit(1).next(callback);
  },

  validate: validateTask,

  add: function(newTask, callback) {

    var found = function(err, task) {
      if(task)
        callback(new Error('duplicate task'));
      else
        db.get().collection(collectionName).insertOne(newTask, callback);
    };                  
   
    if(this.validate(newTask))
      db.get().collection(collectionName).find(newTask).limit(1).next(found);
    else
      callback(new Error("unable to add task"));
  },
               
  delete: function(taskId, callback) {
    var handleDelete = function(err, result) {
      if(result.deletedCount != 1)
        callback(new Error("unable to delete task with id: " + taskId));
      else
        callback(null);      
    };

    db.get().collection(collectionName)
      .deleteOne({'_id': new ObjectId(taskId)},  handleDelete);
  },
};
