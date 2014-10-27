function EmailCtrl($rootScope, $routeParams, MailboxService, $$getEmail) {
	var vm = this;
	vm.email = $$getEmail.data;
}

EmailCtrl.resolve = {
	'$$getEmail': function(MailboxService, $route) {
		return MailboxService.getEmail($route.current.params.id);
	}
};

angular
	.module('app')
	.controller('EmailCtrl', EmailCtrl);
