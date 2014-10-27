/**
 * $routeProvider previously built into Angular,
 * now as standalone ngRoute module. Alternative to ng-route
 * called ui-router
 *
 * $routeProvider returns .when() and .otherwise()
 * When: ('/routeName', {config Object});
 * 

 DO:
 $routeProvider
 .when('/inbox', {
 	templateUrl: 'views/mailbox.html',
 	controller: 'InboxCtrl as vm',
 	resolve: InboxCtrl.resolve
 });

 DONT:
 $routeProvider
 .when('/inbox', {
 	templateUrl: 'views/mailbox.html',
 	controller: 'InboxCtrl as vm',
 	resolve: {
		'getMessages': function () {
			return MailBoxService.getMyMessages();
		},
		'getImportantMessages': function () {
			return MailBoxService.getImportant();
		}
 	}
 });

 Resolve properties get DI'd as the given name into the
 Controller they're instantiating (See SentCtrl as example)

 * 
 * HTML5 Mode
 *
 */
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
	})
	.when('/sent', {
	    templateUrl: 'views/mailbox.html',
	    controller: 'SentCtrl as vm',
	    resolve: SentCtrl.resolve
	})
	.otherwise({
	    redirectTo: 'inbox'
	});
};

angular
	.module('app')
	.config(Router);