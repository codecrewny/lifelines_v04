'use strict';

angular.module('mean.system')
	.controller('LifeLinesController', ['$scope', 'Global', function ($scope, Global) { 
		$scope.global = Global; 
	}]);