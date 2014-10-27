function AppCtrl($location, $routeParams, $rootScope, MailboxService) {

	var vm = this;

	// variables
	vm.searchTerm = '';
	vm.unread = {
		count: 0
	};

	// methods
	vm.composeEmail = composeEmail;
	vm.onSearchChange = onSearchChange;
	vm.getClass = getClass;

	function composeEmail() {
		$rootScope.$broadcast('compose:show');
	}

	function onSearchChange() {
    	$rootScope.$broadcast('search:change', vm.searchTerm);
		if ($location.$$url !== '/inbox') {
			$location.url('/inbox');
		}
	}

	function getClass(name) {
		return {
			'nav__list--active': name === $location.$$url
		};
	}

	// resolves
	MailboxService
	.getInboxEmails()
	.then(function (response) {
		for (var prop in response.data) {
			if (!response.data[prop].read) {
				vm.unread.count++;
			}
		}
	}, function (reason) {
		// handle errors
	});
}

angular
	.module('app')
	.controller('AppCtrl', AppCtrl);
