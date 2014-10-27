/**
 * global module method where everything hangs off off
 * 
 * setters: angular.module('app', []);
 * Empty array = no dependencies
 * To create a new module, you need the Array
 *
 * getters: angular.module('app');
 * No second argument, fetches an existing module
 *
 * Needs to be loaded first, otherwise further 
 * assets will be trying to hook into unknown modules
 *
 * Best practices:
 * 1) Don't use chaining:
 * angular.module('app', [])
 * .controller('MainCtrl', function () {})
 * .directive('composeEmail', function () {})
 * .factory('AuthService', function () {});
 *
 * 2) Don't use a variable
 * var app = angular.module('app', []);
 * Relies on the same scope
 * app.controller('MainCtrl', function () {});
 *
 * (function () {
 	  var app = angular.module('app', []);
   })();
   app.controller() // undefined
 *
 * Everything is global in Angular (window.angular), don't
 * rely on the same scope for hooking into modules
 *
 * Benefits to using a variable however:
 * 1) Minification
 * var app becomes var a;
 * 2) Function calls to the getter, not a huge issue
 * was created for a specific reason, so we should use it
 *
 * (function (app) {
	 // app namespace internally
   })(angular.module('app', []));
 *
 */

// this module name refers to the DOM bootstrapping
angular
.module('app', [
	'ngRoute'/*
	, 'AuthModule'
	, 'Transmit'
	*/
]);