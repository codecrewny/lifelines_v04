'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html'
        }).
        when('/resources', {
            templateUrl: 'views/resources.html',
            controller: 'WomenListCtrl'
        }).
        when('/lawyers', {
            templateUrl: 'views/lawyers.html',
            controller: 'LawyersListCtrl'
        }).
        when('/contact', {
            templateUrl: 'views/contact.html'
        }).
        when('/online', {
            templateUrl: 'views/online.html'
        }).
        when('/chat', {
            templateUrl: 'views/chat.html',
            controller: 'ChatController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);