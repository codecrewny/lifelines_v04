'use strict';

(function() {
  describe('MEAN controllers', function() {
    describe('ChatController', function() {
      // Load the controllers module
      beforeEach(module('mean'));
      var scope, ChatController;
      beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ChatController = $controller('ChatController', {
          $scope: scope
        });
      }));
    });
  });
})();