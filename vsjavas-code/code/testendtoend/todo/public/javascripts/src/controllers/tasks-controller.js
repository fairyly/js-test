/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var TasksController = function(tasksService, $filter, $document) {
  var controller = this;  
  
  controller.tasks = [];
  controller.message = '';  

  controller.newTask = {name: '', date: ''};
  
  controller.getTasks = function() {
    tasksService.get(controller.updateTasks, controller.updateError);
  };

  controller.updateTasks = function(tasks) {
    controller.tasks = controller.sortTasks(tasks);
  };

  controller.updateError = function(error, status) {
    controller.message = error + ' (status: ' + status + ')';
  };

  controller.sortTasks = function(tasks) {
    var orderBy = $filter('orderBy');
    return orderBy(tasks, ['year', 'month', 'day', 'name']);
  };

  $document.ready(controller.getTasks);

  controller.convertNewTaskToJSON = function() {
    var dateParts = controller.newTask.date.split('/');
  
    return {
      name: controller.newTask.name,
      month: parseInt(dateParts[0]),
      day: parseInt(dateParts[1]),
      year: parseInt(dateParts[2])
    };
  };

  controller.addTask = function() {
    tasksService.add(
      controller.convertNewTaskToJSON(controller.newTask),
      controller.updateMessage,
      controller.updateError);
  };

  controller.updateMessage = function(message) {
    controller.message = message;
    controller.getTasks();
  };

  controller.disableAddTask = function() {
    return !validateTask(controller.convertNewTaskToJSON());
  };

  controller.deleteTask = function(taskId) {
    tasksService.delete(
      taskId, controller.updateMessage, controller.updateError);    
  };
};

angular.module('todoapp')
       .controller('TasksController', 
         ['TasksService', '$filter', '$document', TasksController]);