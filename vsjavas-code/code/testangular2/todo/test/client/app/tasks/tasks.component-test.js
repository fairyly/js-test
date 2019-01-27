/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
describe('tasks component tests', function() {

  var sandbox;  
  var tasksComponent;
  var tasksService;
  var observable = { subscribe: function() {} };
  var updateTasksBindStub = function() {};
  var updateErrorBindStub = function() {};
  var updateMessageBindStub = function() {};
  var sortPipe = { transform: function(data) { return data; } };
  
  beforeEach(function() {
    tasksService = {
      get: function() {},
      add: function() {},
      delete: function() {}
    };   
    
    tasksComponent = new app.TasksComponent(tasksService, sortPipe);

    sandbox = sinon.sandbox.create();    
    
    sandbox.stub(tasksComponent.updateTasks, 'bind')
           .withArgs(tasksComponent)
           .returns(updateTasksBindStub);
           
    sandbox.stub(tasksComponent.updateError, 'bind')
           .withArgs(tasksComponent)
           .returns(updateErrorBindStub);

    sandbox.stub(tasksComponent.updateMessage, 'bind')
           .withArgs(tasksComponent)
           .returns(updateMessageBindStub);

    sandbox.stub(tasksService, 'get')
           .withArgs()
           .returns(observable);
  });
                                     
  afterEach(function() {
    sandbox.restore();
  });
  
  it('should set the selector attribute', function() {
    var componentAnnotations = 
      Reflect.getMetadata('annotations', app.TasksComponent)[0];
   
    expect(componentAnnotations.selector).to.be.eql('tasks-list');
  });
  
  it('should set the templateUrl attribute', function() {
    var componentAnnotations = 
      Reflect.getMetadata('annotations', app.TasksComponent)[0];
   
    expect(componentAnnotations.templateUrl).to.be.eql(
      'tasks.component.html');
  });

  it('should initialize message to an empty string', function() {
    expect(tasksComponent.message).to.be.eql('');
  });

  it('should initialize tasks to an empty array', function() {
    expect(tasksComponent.tasks).to.be.eql([]);
  });
              
  it('getTasks should register handlers with service', function() {
    var observableMock = 
      sandbox.mock(observable)
             .expects('subscribe')
             .withArgs(updateTasksBindStub, updateErrorBindStub);
    
    tasksComponent.getTasks();
    
    observableMock.verify();
  });

  it('updateTasks should update tasks', function() {
    var tasksStub = [{sample: 1}];
    tasksComponent.updateTasks(tasksStub);
    expect(tasksComponent.tasks).to.be.eql(tasksStub);
  });

  it('updateError should update message', function() {
    tasksComponent.updateError('Not Found');
    expect(tasksComponent.message).to.be.eql('Not Found');
  });
              
  it('getTasks should be called on init', function() {
    var getTasksMock = sandbox.mock(tasksComponent)
                              .expects('getTasks');
                              
    tasksComponent.ngOnInit();
    getTasksMock.verify();
  });

  it('updateTasks should call transform on pipe', function() {
    var tasksStub = '...fake input...';

    var expectedSortedTasks = '...fake output...';
    
    sandbox.stub(sortPipe, 'transform')
           .withArgs(tasksStub)
           .returns(expectedSortedTasks);
    
    tasksComponent.updateTasks(tasksStub);
    expect(tasksComponent.tasks).to.be.eql(expectedSortedTasks);
  });
              
  it('should register necessary providers', function() {
    var componentAnnotations = 
      Reflect.getMetadata('annotations', app.TasksComponent)[0];
      
    var expectedProviders = 
      [ng.http.HTTP_PROVIDERS, app.TasksService, app.TasksSortPipe];
   
    expect(componentAnnotations.providers).to.be.eql(expectedProviders);
  });

  it('TasksService should be injected into the component', function() {
    var injectedServices = 
      Reflect.getMetadata('parameters', app.TasksComponent);
                                              
    expect(injectedServices[0]).to.be.eql([app.TasksService]);
    expect(injectedServices[1]).to.be.eql([app.TasksSortPipe]);    
  });
                
  it('newTask should be initialized properly', function() {
    expect(tasksComponent.newTask.name).to.be.eql('');
    expect(tasksComponent.newTask.date).to.be.eql('');
  });
               
  it('should properly convert newTask with no data to JSON', function() {
    var newTask = tasksComponent.convertNewTaskToJSON();
    
    expect(newTask.name).to.be.eql('');
    expect(newTask.month).to.be.NAN;
    expect(newTask.day).to.be.NAN;
    expect(newTask.year).to.be.NAN;
  });

  it('should properly convert newTask with data to JSON', function() {
    var newTask = {name: 'task a', date: '6/10/2016'};    
    var newTaskJSON = {name: 'task a', month: 6, day: 10, year: 2016};

    tasksComponent.newTask = newTask;
    
    expect(tasksComponent.convertNewTaskToJSON()).to.be.eql(newTaskJSON);
  });

  it('addTask should register handlers with service', function() {
    var observableMock = 
      sandbox.mock(observable)
             .expects('subscribe')
             .withArgs(updateMessageBindStub, updateErrorBindStub);

    var taskStub = {};
    
    tasksComponent.convertNewTaskToJSON = function() { return taskStub; };

    sandbox.stub(tasksService, 'add')
           .withArgs(taskStub)
           .returns(observable);
    
    tasksComponent.addTask();
    
    observableMock.verify();
  });

  it('updateMessage should update message and call getTasks', function(done) {
    tasksComponent.getTasks = function() { done(); };
    tasksComponent.updateMessage('good');
    expect(tasksComponent.message).to.be.eql('good');
  });

  it('should set validateTask to common function', function() {
    expect(tasksComponent.validateTask).to.be.eql(validateTask);
  });

  it('disableAddTask should use validateTask', function() {
    tasksComponent.newTask = {name: 'task a', date: '6/10/2016'};    
    
    var validateTaskSpy = sinon.spy(tasksComponent, 'validateTask');                            
    expect(tasksComponent.disableAddTask()).to.be.false;
    expect(validateTaskSpy).to.have.been.calledWith(
      tasksComponent.convertNewTaskToJSON());
  });
                
  it('deleteTask should register handlers with service', function() {
    var sampleTaskId = '1234123412341234';                           

    var observableMock = 
      sandbox.mock(observable)
             .expects('subscribe')
             .withArgs(updateMessageBindStub, updateErrorBindStub);

    sandbox.stub(tasksService, 'delete')
           .withArgs(sampleTaskId)
           .returns(observable);

    tasksComponent.deleteTask(sampleTaskId);
    
    observableMock.verify();
  });

});
