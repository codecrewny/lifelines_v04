/*jslint white: false */
'use strict';

angular.module('mean.chat',['firebase'])
  .controller('ChatController', ['$scope', 'PresenceService', '$firebase',function($scope, PresenceService, $firebase) {
    //var chatRef = new Firebase('https://brilliant-fire-2797.firebaseio.com');
    $scope.totalViewers = 0;
    $scope.$on('onOnlineUser', function() {
      $scope.$apply(function() {
        $scope.totalViewers = PresenceService.getOnlineUserCount();
        /*if ($scope.totalViewers === 0) {
          console.log("new Session; removing the chat");
          $scope.messages.remove();
        } else {
          console.log("existing Session; getting the chat messages");
          $scope.messages = $firebase(chatRef.limit(15));
        }*/
      });
    });
    $scope.username = 'Guest' + Math.floor(Math.random()*101);
    $scope.addMessage = function() {
      $scope.messages.$add({
        from: $scope.username, content: $scope.message
      });
      $scope.message = "";
    }
  }]
  );
