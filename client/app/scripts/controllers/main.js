'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function($scope) {
      var content = "Hi I'm Blake. I'm a software engineer, a designer, and a product person.";

      $scope.type = "";
      var i = 0;
      setInterval(function() {
        if (i < content.length) {
          $scope.type = $scope.type.replace('|', '');
          if (i == content.length - 1){
            $scope.type += content[i];
          }
          else{
            $scope.type += content[i] + '|';

          }
          i++;

        }
        $scope.$apply();
      }, 100);
    }

  );
