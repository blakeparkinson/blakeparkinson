'use strict';
(function() {

  var app = angular.module('clientApp');

  app.directive('chartItem', function() {
    return {
      scope: {
        'chartDetails': '=',
        'tasks': '=',
        'tabs': '='
      },
      require: [],
      restrict: 'AE',
      link: function() {

      },
      controller: function($scope, $mixpanel) {
        $scope.selectedTab = 'chart';
        $scope.selectedIndex = 0;

        /**
         * switchTab - handles navigation from the buttom two tabs
         */
        $scope.switchTab = function(tab, $index) {
          $mixpanel.track('selected tab: ' + tab.tabName);
          $scope.selectedTab = tab.tabName;
          $scope.selectedIndex = $index;
          if (tab.tabName == 'chart') {
            initializeChart();
          }
        };

        /**
         * toggleInput - handles adding another task from the input field
         */
        $scope.addTask = function() {
          if (this.taskText) {
            $mixpanel.track('added task: ' + this.taskText);
            $scope.tasks.push({
              'taskName': this.taskText,
              'completed': false,
            });

            //reset the task
            this.taskText = '';

            //change button display
            $scope.addText = 'Another?';

            //hide input
            $scope.showInput = false;
          }
        };

        $scope.addText = 'Add Task';
        $scope.showInput = false;

        /**
         * toggleInput - toggles whether to display the input value to add another task
         */

        $scope.toggleInput = function() {
          $mixpanel.track('toggled task input');
          $scope.showInput = !$scope.showInput ? true : false;
        };

        /**
         * initializeChart - handles Chart rendering, looks up how many tasks are selected
         */
        function initializeChart() {
          var checked = 0,
            unchecked = 0;
          _.forEach($scope.tasks, function(task) {
            if (task.completed) {
              checked++;
            } else {
              unchecked++;
            }
          });

          //round the percentage up to the next whole number
          var percentage = Math.round(checked / $scope.tasks.length * 100);
          $scope.chartdetails = {
            'checked': checked,
            'unchecked': unchecked,
            'total': $scope.tasks.length,
            'percentage': percentage
          };
        }

        initializeChart();

      },
      templateUrl: 'views/chart-item.html',

    };

  });
})();
