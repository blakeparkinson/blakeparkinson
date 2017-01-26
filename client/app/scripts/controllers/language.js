'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LanugaugeCtrl
 * @description

 */
(function() {

  angular.module('clientApp')
    .controller('LanguageCtrl', function($scope, $http) {
      var vm = this;
      vm.settings = {
        languageString: ''
      };

      vm.getLanugage = function(){
        if (!vm.settings.lanugageString.length){
          vm.responseText = 'You did not enter any characters';
          return;
        }
        var data = {
          languageString: vm.settings.languageString
        };
        var request = $http.post('main/detect', data);
        request.success(function(data) {
          console.log(data);
        });
      }


    });
})();
