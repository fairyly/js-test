/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var http = require('http');
var app = require('../../app');

before(function() {
  var port = process.env.PORT || 3030;

  http.createServer(app).listen(port);
});

beforeEach(function(done) {
   var db = require('../../db');
   var config = require('../../config.json');
   var dburl = config[app.get('env')].dburl;
   

   var callback = function() {
     db.get().collection('tasks').remove(function() {
       var tasks = [
         {name: 'Test Models', month: 12, day: 1, year: 2016},
         {name: 'Test Routes', month: 12, day: 2, year: 2016},
         {name: 'Test AngularJS', month: 12, day: 3, year: 2016},
         {name: 'Test UI', month: 12, day: 4, year: 2016}
       ];
       db.get().collection('tasks').insert(tasks, done);       
     });
   };

   db.connect(dburl, callback);  
});
