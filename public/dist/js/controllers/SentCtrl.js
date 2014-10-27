function SentCtrl($rootScope, $$getSent) {
	var vm = this;
	vm.items = $$getSent.data;

  $rootScope.$on('email:sent', function (evt, data) {
    console.log(data, vm.items);
    vm.items.push(data);
  } );
}

SentCtrl.resolve = {
	'$$getSent': function (MailboxService) {
		return MailboxService.getSentEmails();
	}
};

angular
	.module('app')
	.controller('SentCtrl', SentCtrl);
