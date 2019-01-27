/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
/*
var getTasks = function() {
  callService({method: 'GET', url: '/tasks'});
}

var callService = function() {}
*/ 

/*
var getTasks = function() {
  callService({method: 'GET', url: '/tasks'}, updateTasks);
}

var callService = function() {}
var updateTasks = function() {}
*/

var getTasks = function() {
  callService({method: 'GET', url: '/tasks'}, updateTasks);
};
  
/*
var callService = function(options, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url);
  xhr.send();
}
*/                 

/*
var callService = function(options, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url);

  xhr.onreadystatechange = function() {
    callback(xhr.status);
  }

  xhr.send();
}
*/                 
        
/*
var callService = function(options, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url);

  xhr.onreadystatechange = function() {
    callback(xhr.status, xhr.response);
  }

  xhr.send();
}
*/                 

/*
var callService = function(options, callback) {
  var xhr = new XMLHttpRequest();

  xhr.open(options.method, options.url);

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4)
      callback(xhr.status, xhr.response);
  }

  xhr.send();
}
*/         

var callService = function(options, callback) {
  var xhr = new XMLHttpRequest();

  xhr.open(options.method, options.url);

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4)
      callback(xhr.status, xhr.response);
  };

  xhr.setRequestHeader("Content-Type", options.contentType);

  xhr.send(options.data);
};
                
/*
var updateTasks = function(status, response) {
  var message = response + ' (status: ' + status + ')';
  document.getElementById('message').innerHTML = message;
}
*/                

/*
var updateTasks = function(status, response) {
  if(status === 200) {
    var tasks = JSON.parse(response);
  
    document.getElementById('taskscount').innerHTML = tasks.length;
  } else {
    var message = response + ' (status: ' + status + ')';
    document.getElementById('message').innerHTML = message;
  }
}
*/

/*
var updateTasks = function(status, response) {
  if(status === 200) {
    var tasks = JSON.parse(response);

    document.getElementById('taskscount').innerHTML = tasks.length;

    var row = function(task) {
      return '<tr><td>' + task.name + '</td>' +
        '<td>' + task.month + '/' + task.day + '/' +task.year + '</td>' +
        '</tr>';
    }           
    
    var table = '<table>' + tasks.map(row).join('') + '</table>';
    document.getElementById('tasks').innerHTML = table;        
  } else {
    var message = response + ' (status: ' + status + ')';

    document.getElementById('message').innerHTML = message;
  }
}
*/

var updateTasks = function(status, response) {
  if(status === 200) {
    var tasks = JSON.parse(response);

    document.getElementById('taskscount').innerHTML = tasks.length;

    var row = function(task) {
      return '<tr><td>' + task.name + '</td>' +
        '<td>' + task.month + '/' + task.day + '/' +task.year + '</td>' +
        '<td><A onclick="deleteTask(\'' + task._id + '\');">delete</A></td>' +
        '</tr>';
    };           
    
    var table = '<table>' + tasks.map(row).join('') + '</table>';
    document.getElementById('tasks').innerHTML = table;        
  } else {
    var message = response + ' (status: ' + status + ')';
    document.getElementById('message').innerHTML = message;
  }
};

var updateMessage = function(status, response) {
  document.getElementById('message').innerHTML = 
    response + ' (status: ' + status + ')';
  getTasks();
};                    

/*
var initpage = function() {
  getTasks();
}

window.onload = initpage;
*/                

var initpage = function() {
  getTasks();
  document.getElementById('submit').onclick = addTask;
};              
           
/*
var addTask = function() {
  var date = new Date(document.getElementById('date').value);
  var newTask = { 
    name: document.getElementById('name').value, 
    month: date.getMonth() + 1, 
    day: date.getDate(), 
    year: date.getFullYear() };
    
  callService({method: 'POST', url: '/tasks', 
    contentType: 'application/json', 
    data: JSON.stringify(newTask)}, updateMessage);
}

var updateMessage = function() {}
*/

var addTask = function(fooback) {
  var date = new Date(document.getElementById('date').value);
  var newTask = { 
    name: document.getElementById('name').value, 
    month: date.getMonth() + 1, 
    day: date.getDate(), 
    year: date.getFullYear() 
  }; 

  if(validateTask(newTask)) {
    callService({method: 'POST', url: '/tasks', 
      contentType: 'application/json', 
        data: JSON.stringify(newTask)}, updateMessage);    
  } else {
    updateMessage(0, 'invalid task'); 
  }
  
  return false;
};

var deleteTask = function(taskId) {
  callService({method: 'DELETE', url: '/tasks/' + taskId}, updateMessage);
};

window.onload = initpage;
