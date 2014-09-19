/* global studio: false, angular: false */
/* jslint browser: true, devel: true */

'use strict';

// declare a module
var myApp = angular.module('<%= extensionName %>', []);

myApp.controller('<%= extensionName %>Ctrl', function ($scope) {

	$scope.test = 'World (test ok from app.js)';
	

});