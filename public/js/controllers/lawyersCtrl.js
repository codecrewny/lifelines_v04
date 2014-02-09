'use strict';

var lawyersApp = angular.module('lawyersApp', []);

lawyersApp.controller('LawyersListCtrl', function($scope, $http){
  
    $scope.lawyers = [ 
    	{name: "John Lawyer", title: "Attorney", location: "Bronx"},
    	{name: "Gustavo Sanchez", title: "Attorney", location: "Brookyln"},
    	{name: "Saul Goodman", title: "Attorney", location: "Queens"},
    	{name: "Sarah Spillman", title: "Counselor", location: "Manhattan"},
    	{name: "Casey Novak", title: "Attorney", location: "Manhattan"},
    	{name: "Archie Ammons", title: "Counselor", location: "Brooklyn"},
    	{name: "Alexandra Cabbot", title: "Attorney", location: "Staten Island"},
	];
 
});