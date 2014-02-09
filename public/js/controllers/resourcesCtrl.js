'use strict';

var womensApp = angular.module('womensApp', []);

womensApp.controller('WomenListCtrl', function($scope, $http){
  $http.get('women_resources/resources.json').success(function(data) {
    $scope.women_resources = data;
  });
 
});