'use strict';

angular.module('mean.system').factory('PresenceService', ['$rootScope',
  function($rootScope) {
    var onlineUsers = 0;

    // Create our references
    var listRef = new Firebase('https://brilliant-fire-2797.firebaseio.com/presence/');
    var userRef = listRef.push(); // This creates a unique reference for each user
    var presenceRef = new Firebase('https://brilliant-fire-2797.firebaseio.com/.info/connected');

    // Add ourselves to presence list when online.
    presenceRef.on('value', function(snap) {
      if (snap.val()) {
        userRef.set(true);
        // Remove ourselves when we disconnect.
        userRef.onDisconnect().remove();
      }
    });

    // Get the user count and notify the application
    listRef.on('value', function(snap) {
      onlineUsers = snap.numChildren();
      $rootScope.$broadcast('onOnlineUser');
    });

    var getOnlineUserCount = function() {
      return onlineUsers;
    }

    return {
      getOnlineUserCount: getOnlineUserCount
    }
  }
]);
