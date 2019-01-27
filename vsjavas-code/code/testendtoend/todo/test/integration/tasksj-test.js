/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
var expect = require('chai').expect;
require('chai').use(require('chai-as-promised'));

describe('tasks ui test', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('/tasksj.html');
  });

  afterEach(function() {
    browser.ignoreSynchronization = false;
  });
    
  it('should show correct task count', function() {
    expect(element(by.id('taskscount')).getText()).to.be.eventually.eql('4');
  });

  it('should display tasks on the page', function() {
    expect(element(by.id('tasks')).getText())
      .to.eventually.contain('Test Models');
    expect(element(by.id('tasks')).getText())
      .to.eventually.contain('Test UI');
  });

  it('should successfully add a task', function() {
    element(by.id('name')).sendKeys('Create Quality Code');
    element(by.id('date')).sendKeys('12/15/2016');
    element(by.id('submit')).click();
    
    expect(element(by.id('message')).getText())
      .to.eventually.contain('task added');
    expect(element(by.id('tasks')).getText())
      .to.eventually.contain('Create Quality Code');
  });

  it('should successfully delete a task', function() {
    element.all(by.linkText('delete')).get(1).click();
  
    expect(element(by.id('message')).getText())
      .to.eventually.contain('task deleted');
    expect(element(by.id('tasks')).getText())
      .to.eventually.not.contain('Test Routes');
  });
});
