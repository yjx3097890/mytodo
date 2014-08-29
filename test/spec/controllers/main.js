'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no todo to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('应该添加一个TODO到list', function () {
    scope.todo = 'test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('delTodo应该从list中删除一个todo', function () {
    scope.todo = 'test1';
    scope.addTodo();
    scope.delTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
