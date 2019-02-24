var expect = require('chai').expect;
var db = require('../../../db');
var ObjectId = require('mongodb').ObjectId;
var task = require('../../../models/task');

describe('model tests', function() {
  var sampleTasks;

  before(function(done) {
    db.connect('mongodb://localhost/runoob',{ useNewUrlParser: true }, done);
    console.log('db',db.get())
  });

  after(function() {
    db.close();
  });

  var id = function(idValue) {
    return new ObjectId(idValue);
  };

  beforeEach(function(done) {
    sampleTask = {name: 'a new task', month: 12, day: 10, year: 2016};

    sampleTasks = [
      {_id: id('123412341240'), name: 'task1', month: 10, day: 5, year: 2016},
      {_id: id('123412341241'), name: 'task2', month: 11, day: 2, year: 2016},
      {_id: id('123412341242'), name: 'task3', month: 12, day: 8, year: 2016},
    ];

    db.get().collection('tasks').insert(sampleTasks, done); // 出现  TypeError: db.get(...).collection is not a function
  });

  afterEach(function(done) {
    db.get().collection('tasks').drop(done);
  });

  /**
   * 设计 all 函数
   */
  it('all should return all the tasks', function(done) {
    var callback = function(err, tasks) {
      expect(tasks).to.be.eql(sampleTasks);
      done();
    };
    console.log('db',db)
    task.all(callback);
  });

   /**
   * 设计 get 函数
   */
  it('get should return task with given id', function(done) {
    var callback = function(err, task) {
      expect(task.name).to.be.eql('task1');
      expect(task.month).to.be.eql(10);
      done();
    };
    console.log('db',db)
    task.get('123412341240', callback);
  });
});
