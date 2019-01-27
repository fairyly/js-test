/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
/*
var validateTask = function(task) {  
  return true;
}

*/

/*
var validateTask = function(task) {  
  if(task)
    return true;
  return false;
}
*/

/*
var validateTask = function(task) {  
  if(task && task.name)
    return true;
  return false;
}
*/

/*
var validateTask = function(task) {  
  if(task && task.name &&
    task.month && !isNaN(task.month))
    return true;
  return false;
}
*/

var validateTask = function(task) {  
  if (task && task.name && 
    task.month && !isNaN(task.month) && 
    task.day && !isNaN(task.day) && 
    task.year && !isNaN(task.year))
    return true;
    
  return false;
};
(typeof module !== 'undefined') && (module.exports = validateTask);
