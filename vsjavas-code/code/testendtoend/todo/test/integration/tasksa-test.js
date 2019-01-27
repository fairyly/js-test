/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var eventually = require('./eventually');
var TasksPage = require('./tasksa-page');

describe('tasks ui test', function() {
  var page;
  
  beforeEach(function() {
    page = new TasksPage();
  });
  
  it('page should show correct task count', function() {
    eventually(page.tasksCount).eql('4');
  });
  
  it('page should display tasks', function() {
    eventually(page.tasksAsText).contain('Test Models');
    eventually(page.tasksAsText).contain('Test UI');
  });
  
  it('should successfully add a task', function() {
    page.name = 'Create Quality Code';
    page.date = '12/15/2016';
    page.submit();
    
    eventually(page.message).contain('task added');
    eventually(page.tasksAsText).contain('Create Quality Code');
  });
  
  it('should successfully delete a task', function() {
    page.deleteAt(1).click();
    
    eventually(page.message).contain('task deleted');
    eventually(page.tasksAsText).not.contain('Test Routes');
  });

  it('should disable submit button on page load', function() {
    eventually(page.submitDisabled).eql('true');
  });

  it('should enable submit button on data entry', function() {
    page.name = 'Create Quality Code';
    page.date = '12/15/2016';
  
    eventually(page.submitDisabled).not.eql('true');
  });
});
