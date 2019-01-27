/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var TasksService = function($http) {
  var service = this;
  
  service.get = function(success, error) {
    $http.get('tasks')
         .success(success)
         .error(error);
  };

  service.add = function(task, success, error) {
    $http.post('tasks', task)
         .success(success)
         .error(error);
  };  

  service.delete = function(taskId, success, error) {
    $http.delete('tasks/' + taskId)
         .success(success)
         .error(error);
  };
};
       
angular.module('todoapp')
       .service('TasksService', ['$http', TasksService]);
       