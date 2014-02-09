/*jslint white: false */
'use strict';

angular.module('mean.chat', ['firebase']).controller('ChatController', ['$scope', '$firebase', function($scope, $firebase) {
  var ref = new Firebase('https://brilliant-fire-2797.firebaseio.com');
  $scope.messages = $firebase(ref.limit(15));
  $scope.username = 'Guest' + Math.floor(Math.random()*101);
  $scope.addMessage = function() {
    $scope.messages.$add({
      from: $scope.username, content: $scope.message
    });
    $scope.message = "";
  }}]);
