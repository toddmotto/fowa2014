function InboxCtrl($rootScope, MailboxService, $$getInbox) {
	var vm = this;
	vm.items = $$getInbox.data;

  vm.searchTerm = '';
  $rootScope.$on('search:change', function (evt, data) {
    vm.searchTerm = data;
  });
}

InboxCtrl.resolve = {
	'$$getInbox': function (MailboxService) {
		return MailboxService.getInboxEmails();
	}
};

angular
	.module('app')
	.controller('InboxCtrl', InboxCtrl);
