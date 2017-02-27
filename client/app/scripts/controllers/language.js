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
        if (!vm.settings.languageString.length){
          vm.responseHtml = '<div>You did not enter any characters</div>';
          return;
        }
        var data = {
          languageString: vm.settings.languageString
        };
        var request = $http.post('main/detect', data);
        request.success(function(data) {
          if (data){
            vm.responseHtml = '<div>This language looks likes <b>' + data + '</b></div>';
          }
          else{
            vm.responseHtml = '<div>Sorry. We were not able to match your language</div>';
          }
        });
      }


    });
})();
