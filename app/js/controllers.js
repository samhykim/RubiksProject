'use strict';

/* Controllers */

angular.module('rubiks')

.controller('MainController', function ($scope, $location, status) {
	$scope.title = "Welcome to the Rubix Cube World!";

	$scope.$location = $location;
    $scope.routeIs = function(routeName) {
        return $location.path() === routeName;
    };
})

.controller('InteractController', function ($scope, status, $timeout) {
	status.warn("Here is an interactive Rubik's Cube (sort of not really...it's just a cube lol) you can play with. I couldn't " +
		"find individuals pictures of each face or have paint or photoshop to draw them....I didn't" +
				" have time to be able to have the user rotate each layer of the cube. " +
				"Gahhh if only I had more time.");

	$scope.counter = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout,1000);
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
    
    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }
})

.controller("RecordsController", function ($scope, Records, status) {
	status.warn("This table shows all of the records of the fastest Rubik's Cube times in the world." + 
				" I wasn't able to add all the records in time however."); 
	

  	$scope.records = Records.query();
})
;