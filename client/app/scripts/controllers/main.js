'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function($scope, $anchorScroll, $location) {
      var content = "Hi I'm Blake. I'm a software engineer, a designer, and a product person.";

      $scope.type = "";
      var i = 0;
      setInterval(function() {
        if (i < content.length) {
          $scope.type = $scope.type.replace('|', '');
          if (i == content.length - 1) {
            $scope.type += content[i];
          } else {
            $scope.type += content[i] + '|';

          }
          i++;

        }
        $scope.$apply();
      }, 100);

      $scope.scrollTo = function(id) {
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
      };
    }

  );
