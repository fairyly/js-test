/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
describe('tasks service tests', function() {
  var sandbox;               
  var http;
  var observable;
  var tasksService;

  beforeEach(function() {                                
    sandbox = sinon.sandbox.create();

    http = {
      get: function() {},
      post: function() {},
      delete: function() {}
    };
    
    tasksService = new app.TasksService(http);

    observable = { 
      map: function() {},
      catch: function() {}
    };


    sandbox.stub(http, 'get')
           .withArgs('/tasks')
           .returns(observable);

    sandbox.stub(observable, 'map')
           .withArgs(tasksService.extractData)
           .returns(observable);

    sandbox.stub(observable, 'catch')
           .withArgs(tasksService.returnError)
           .returns(observable);
  });
  
  afterEach(function() {
    sandbox.restore();
  });
         
  it('get should make GET request to /tasks', function() {
    expect(tasksService.get()).to.be.eql(observable);
    expect(http.get.calledWith('/tasks')).to.be.true;
    expect(observable.map.calledWith(tasksService.extractData)).to.be.true;
    expect(observable.catch.calledWith(tasksService.returnError)).to.be.true;
  });
     
  it('extractData should return result from json()', function() {
    var fakeJSON = {};
    var response = {status: 200, json: function() { return fakeJSON; } };
    
    expect(tasksService.extractData(response)).to.be.eql(fakeJSON);
  });

  it('extractData should throw exception for invalid status', function() {
    var response = {status: 404 };
    
    expect(function() { 
      tasksService.extractData(response);
      }).to.throw('Request failed with status: 404');
  });

  it('returnError should return an error Observable', function() {
    var error = {message: 'oops'};
    var obervableThrowMock = 
      sandbox.mock(Rx.Observable)
             .expects('throw')
             .withArgs(error.message);
           
      tasksService.returnError(error);
      obervableThrowMock.verify();
  });      

  it('should inject HTTP into the constructor', function() {
    var injectedServices = 
      Reflect.getMetadata('parameters', app.TasksService);
                                              
    expect(injectedServices[0]).to.be.eql([ng.http.Http]);
  });

  it('add should pass task to /tasks using POST', function() {
    var taskStub = {name: 'foo', month: 1, day: 1, year: 2017};

    var options = 
      {headers: new ng.http.Headers({'Content-Type': 'application/json'})};
               
    sandbox.stub(http, 'post')
           .withArgs('/tasks', JSON.stringify(taskStub), options)
           .returns(observable);

    expect(tasksService.add(taskStub)).to.be.eql(observable);
    expect(observable.map.calledWith(tasksService.extractData)).to.be.true;
    expect(observable.catch.calledWith(tasksService.returnError)).to.be.true;


  });

  it('extractData should return text if not json()', function() {
    var fakeBody = 'somebody';
    var response = {status: 200, text: function() { return fakeBody; } };
    
    expect(tasksService.extractData(response)).to.be.eql(fakeBody);
  });

  it('delete should pass task to /tasks using DELETE', function() {
    var taskId = '1234';

    sandbox.stub(http, 'delete')
           .withArgs('/tasks/' + taskId)
           .returns(observable);

    expect(tasksService.delete(taskId)).to.be.eql(observable);
    expect(observable.map.calledWith(tasksService.extractData)).to.be.true;
    expect(observable.catch.calledWith(tasksService.returnError)).to.be.true;
  });

});
