/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
(function(app) {
  app.TasksSortPipe = ng.core
    .Pipe({
      name: 'sort'
    })
    .Class({
      constructor: function() {},
      transform: function(tasks) {
        var compareTwoTasks = function(task1, task2) {
          return task1.year - task2.year ||
            task1.month - task2.month ||
            task1.day - task2.day ||
            task1.name.localeCompare(task2.name);
        };                                 
        
        return tasks.slice().sort(compareTwoTasks);
      }
    });
})(window.app || (window.app = {}));
