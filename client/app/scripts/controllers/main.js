'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	var content = "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent";

	$scope.type = "";
	var i=0;
	setInterval(function(){
	    if(i<content.length){
		  	$scope.type += content[i];
	     i++;
     }
		 $scope.$apply();
	}, 100);
}

);
