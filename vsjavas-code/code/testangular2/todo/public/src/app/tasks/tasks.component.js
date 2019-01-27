/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
(function(app) {
  app.TasksComponent = ng.core
    .Component({
      selector: 'tasks-list',
      templateUrl: 'tasks.component.html',
      providers: [ng.http.HTTP_PROVIDERS, app.TasksService, app.TasksSortPipe]
    })
    .Class({
      constructor: [app.TasksService, app.TasksSortPipe,
        function(_tasksService, _sortPipe) {
          this.tasks = [];
          this.message = '';        
          this.newTask = {name: '', date: ''};       
          this.service = _tasksService;               
          this.sortPipe = _sortPipe;
          this.validateTask = validateTask;
        }],
      getTasks: function() {
        this.service.get()
                    .subscribe(this.updateTasks.bind(this), 
                               this.updateError.bind(this));
      },      
      updateTasks: function(tasks) { 
        this.tasks = this.sortPipe.transform(tasks); 
      },                                       
      convertNewTaskToJSON: function() {
        var dateParts = this.newTask.date.split('/');

        return {
          name: this.newTask.name,
          month: parseInt(dateParts[0]),
          day: parseInt(dateParts[1]),
          year: parseInt(dateParts[2])
        };        
      },
      addTask: function() {
        this.service.add(this.convertNewTaskToJSON())
                    .subscribe(this.updateMessage.bind(this), 
                               this.updateError.bind(this));
      },                                                     
      disableAddTask: function() {
        return !this.validateTask(this.convertNewTaskToJSON());
      },
      updateMessage: function(message) {
        this.message = message;      
        this.getTasks();
      },
      updateError: function(error) { this.message = error; },
      deleteTask: function(taskId) {
        this.service.delete(taskId)
                    .subscribe(this.updateMessage.bind(this), 
                               this.updateError.bind(this));        
      },
      ngOnInit: function() { this.getTasks(); }
    });
})(window.app || (window.app = {}));