'use strict';

describe('Controller: TaskCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var TaskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskCtrl = $controller('TaskCtrl', {
      $scope: scope
    });

  }));

  it('should attach a list of tasks to the scope', function () {
    expect(scope.tasks.length).toBe(4);
  });

  it('should attach a list of tabs to the scope', function () {
    expect(scope.tabs.length).toBe(2);
  });
});
