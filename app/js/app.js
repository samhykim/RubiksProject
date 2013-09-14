'use strict';

/* App Module */

angular.module('rubiks', ['$strap.directives','ngResource'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: '/app/partials/main.html',
            controller: 'MainController',
        })

        .when('/interact', {
            templateUrl: '/app/partials/interact.html',
            controller: 'InteractController',
        })

        .when('/records', {
            templateUrl: '/app/partials/records.html',
            controller: 'RecordsController',
        })

        .when('/tutorial', {
            templateUrl: '/app/partials/tutorial.html',
        })


        .otherwise({redirectTo: '/main'});
}]);
