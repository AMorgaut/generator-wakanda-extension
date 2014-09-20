/* global studio: false, angular: false */
/* jslint browser: true, devel: true */

'use strict';

// declare a module
var myExtension = angular.module('myExtension', []);

myExtension.controller('myExtensionCtrl', function ($scope) {

	$scope.test = 'World (test ok from app.js)';
	

});