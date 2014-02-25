'use strict';

(function() {
  describe('MEAN services', function() {
    describe('Unit: Presence Service', function() {
      // Load the controllers module
      beforeEach(module('mean'));
      var listRefMock = {"d":{"r":3,"b":{"s":"ok","d":""}},"t":"d"};
			var presenceRefMock = {"t":"d","d":{"r":1,"a":"l","b":{"p":"/presence","h":""}}};
			var httpBackend = null;
			var presenceService = null;
      beforeEach(inject(function($httpBackend, Presence) {
				httpBackend = $httpBackend;
				httpBackend.when('GET','https://brilliant-fire-2797.firebaseio.com/presence/').respond(listRefMock);
				httpBackend.when('GET','https://brilliant-fire-2797.firebaseio.com/.info/connected').respond(presenceRefMock);
				presenceService = Presence;
      }));

      it('should get the number of online users', function() {
				var numOnlineUsers = 0;
        presenceService.getOnlineUserCount()
      });
    });
  });
})();