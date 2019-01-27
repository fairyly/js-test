/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
describe('main tests', function() {
  var handler;

  document.addEventListener = function(event, eventHandler) {
    if(event === 'DOMContentLoaded')
      handler = eventHandler;
  };
  
  it('main registers TasksComponent with bootstrap', function(done) {
    ng.platformBrowserDynamic.bootstrap = function(component) {
      expect(component).to.be.eql(app.TasksComponent);
      done();
    };

    handler();
  });
});
