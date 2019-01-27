/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var fetchModelById = function(modelId) {
  return element(by.id(modelId));
};

var fetchBindingById = function(bindingID) {
  return element(by.id(bindingID));
};

var fetchClickById = function(clickId) {
  return element(by.id(clickId));
};

var sendKey = function(element, text) { 
  text.split('').forEach(function(ch) {
    element.sendKeys(ch);
  });  
};

var TasksAPage = function() {
  browser.get('/');
};

TasksAPage.prototype = {
  get tasksCount() { 
    return fetchBindingById('length').getText(); 
  },

  get tasksAsText() { 
    return element(by.css('table')).getText();
  },

  get message() { return fetchBindingById('message').getText(); },
  
  deleteAt: function(index) {
    return element.all(by.css('table tr')).get(index)
           .element(by.tagName('A'));
  },
                   
  set name(text) { sendKey(fetchModelById('name'), text); },

  set date(text) { 
    var textSplit = text.split('/');
    var dateElement = fetchModelById('date');
    sendKey(dateElement, textSplit[0]); 
    sendKey(dateElement, '/' + textSplit[1]); 
    sendKey(dateElement, '/' + textSplit[2]); 
  },
  
  submit: function() { 
    fetchClickById('submit').click(); 
  },
  
  get submitDisabled() {
    return fetchClickById('submit').getAttribute('disabled');
  }
};

module.exports = TasksAPage;