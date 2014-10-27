/**
 *

 Presentational logic layer:
 - No DOM manipulation
 - Just JavaScript "programming"
 vm.items = [1,2,3,4];
 vm.items.splice(1, 1);
 vm.items = [1,3,4];

 Using `this` inside our Controllers creates more Class-like
 Controllers, namespace `this` with `vm`.

 Keep functions outside of the Angular core (such as anonymous functions)
 So we can continue using the resolve property

 */
function SentCtrl(/* $scope, */$rootScope, $$getSent) {

	/**
	 * Use the $$ namespace to determine which DI services
	 * are special use cases
	 */

	/**
	 * Everything you bind when using ControllerAs syntax
	 * gets bound to the current $scope:
	 * Scope: { hashkey: 'oSI3', vm: {} }
	 *
	 * When to use $scope?
	 *  
	 * Events: $scope.($emit|$broadcast|$on)
	 * 
	 * $emit: Fires an event up the scope with any data we pass
	 * var emailClicked = 5;
	 * $scope.$emit('email:clicked', emailClicked);
	 *
	 * $broadcast: Fires an event downwards
	 * var emailClicked = 5;
	 * $scope.$broadcast('email:clicked', emailClicked);
	 *
	 * $on: Listens to the events
	 * $scope.$on('email:clicked', function (evt, data) {
	 *   console.log(evt, data);
	 * });
	 *
	 * You can cancel events using evt.stopPropagation();
	 * 
	 * Note: $rootScope has the all the same APIs
	 * $rootScope.$emit is slightly different, a more direct
	 * event bus as there is no parent.
	 *
	 * When using $rootScope/$scope events
	 *
	 * $rootScope is a persistant instance and available in Services
	 * but you cannot get a $scope instance.
	 *
	 * Notes on event unbinding:
	 * var unbind = $rootScope.$on('email:clicked', function (evt, data) {
	 *   console.log(evt, data);
	 * });
	 *
	 * ****** IMPORTANT:
	 * Remember to unbind the $rootScope listeners ($on only):
	 * When Controller is destroyed Angular fires the $destroy event
	 * var unbind = $rootScope.$on('email:clicked', function (evt, data) {
	 *   console.log(evt, data);
	 * });
	 * $scope.$on('$destroy', unbind);
	 *
	 * I get destroyed automatically:
	 * $scope.$on('email:clicked', fn);
	 *
	 */

	/**
	 * vm = ViewModel
	 * Namespacing internally to acknowledge a ViewModel pattern
	 * $scope is technically a ViewModel:
	 * 
	 */
	var vm = this;
	vm.items = $$getSent.data;
	/**
	 * Without resolve property we have to manually
	 * resolve the data inside Controllers:
	 * 
	 	vm.items = []; // becomes an Array waiting for data
	 	MailboxService
	 	.getSentEmails()
	 	.then(function (response) {
	 		vm.items = response;
	 	});
	 */

	$rootScope.$on('email:sent', function (event, data) {
		// No need for .bind() to access `this` another 
		// benefit to using var vm = this;
		vm.items.push(data);
	});
}

/**
 * Create a custom property on any Controller
 * Just has to be an Object which returns a Promise
 * This promise is resolved _before_ the Controller
 * is instantiated
 */
SentCtrl.resolve = {
	// Prefix with whatever you like
	'$$getSent': function (MailboxService) {
		// This just has to return a Promise
		return MailboxService.getSentEmails();
	}
};

angular
	.module('app')
	.controller('SentCtrl', SentCtrl);
