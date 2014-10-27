function Router($routeProvider) {
	$routeProvider
	.when('/inbox', {
		templateUrl: 'views/mailbox.html',
		controller: 'InboxCtrl as vm',
		resolve: InboxCtrl.resolve
	})
	.when('/email/:id', {
		templateUrl: 'views/email.html',
		controller: 'EmailCtrl as vm',
		resolve: EmailCtrl.resolve
	});
};

angular
	.module('app')
	.config(Router);