/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var fetchById = function(id) {
  return element(by.id(id));
};

var sendKey = function(element, text) {
  element.sendKeys(text);
};

var TasksJPage = function() {
  browser.get('/tasksj.html');
};

TasksJPage.prototype = {
  get tasksCount() { return  fetchById('taskscount').getText(); },
  get tasksAsText() { return fetchById('tasks').getText(); },
  get message() { return fetchById('message').getText(); },
  
  deleteAt: function(index) {
    return element.all(by.linkText('delete')).get(index);
  },
  
  set name(text) { sendKey(fetchById('name'), text); },
  set date(text) { sendKey(fetchById('date'), text); },
  
  submit: function() { fetchById('submit').click(); }
};

module.exports = TasksJPage;
