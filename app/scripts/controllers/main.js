'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.addTodo = function () {
        if ($scope.todo) {
            $scope.todos.unshift($scope.todo);
        }

        $scope.todo = '';
    };
    $scope.delTodo = function (i) {
        $scope.todos.splice(i, 1);
    };

    $scope.$watch('todos', function () {
        localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);
  });
