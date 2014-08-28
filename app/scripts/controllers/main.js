'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];
    $scope.addTodo = function () {
        if ($scope.todo) {
            $scope.todos.unshift($scope.todo);
        }

        $scope.todo = '';
    };
    $scope.delTodo = function (i) {
        $scope.todos.splice(i, 1);
    };
  });
