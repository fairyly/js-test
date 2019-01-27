/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
(function(app) {
  app.TasksService = ng.core.Class({
    constructor: [ng.http.Http, function(_http) { 
      this.http = _http;
    }],
    get: function() {
      return this.http.get('/tasks')
                 .map(this.extractData)
                 .catch(this.returnError);
    },
    extractData: function(response) {
      if(response.status !== 200)
        throw new Error('Request failed with status: ' + response.status);
                                 
        try {
          return response.json();           
        } catch(ex) {
          return response.text();
        }
    },
    add: function(task) {                 
      var options = 
        {headers: new ng.http.Headers({'Content-Type': 'application/json'})};

      return this.http.post('/tasks', JSON.stringify(task), options)
                 .map(this.extractData)
                 .catch(this.returnError);
    },
    delete: function(taskId) {
      return this.http.delete('/tasks/' + taskId)
                 .map(this.extractData)
                 .catch(this.returnError);
    },
    returnError: function(error) { 
      return Rx.Observable.throw(error.message); 
    }, 
  });
})(window.app || (window.app = {}));