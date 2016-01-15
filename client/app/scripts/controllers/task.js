'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TaskCtrl
 * @description

 */
(function() {

  angular.module('clientApp')
    .controller('TaskCtrl', function($scope) {

      //Initialize our data
      $scope.tasks = [{
        'taskName': 'Walk the dog.',
        'completed': true
      }, {
        'taskName': 'Take out the trash.',
        'completed': false
      }, {
        'taskName': 'Fold the laundry.',
        'completed': false
      }, {
        'taskName': 'Brush your teeth.',
        'completed': false,
      }];

      $scope.tabs = [{
        'tabName': 'chart',
        'icon': 'fa fa-pie-chart',
        'label': 'CHART',
      }, {
        'tabName': 'taskList',
        'icon': 'fa fa-list',
        'label': 'TASKS'
      }];


    });
})();
