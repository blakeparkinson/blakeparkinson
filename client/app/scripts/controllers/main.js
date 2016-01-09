'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function($scope, $anchorScroll, $location, $http, $mixpanel) {
    $mixpanel.track('page visited');
      var content = "Hi I'm Blake, a software engineer and designer.";


      $scope.type = "";
      $scope.sendBtn = 'Send Message';
      $scope.mailInfo = {};
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
        $mixpanel.track('topnav click: ' + id);
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
      };

      $scope.trackNav = function(page){
        $mixpanel.track('navigated to: ' + page);

      };

      $scope.sendMail = function(mailInfo) {
        $mixpanel.track('send message');
        var data = {
          'sender': mailInfo.email,
          'textBody': mailInfo.message
        };
        $scope.sendBtn = 'Sending...';

        var request = $http.post('main/email',data);
        request.success(function(data) {
          $scope.mailInfo = {};
          $scope.messageSent = true;
          $scope.sendBtn = 'Send Another?';
        });

        request.error(function(data) {
          console.log(data); // <-- changed
        });
      };
    }

  );
