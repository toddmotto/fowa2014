function MailboxService ($http) {

	this.getEmail = function( id ) {
		return $http({
			method: 'GET',
			url: '/rest/emails/' + id + '.json'
		});
	};

	this.getSentEmails = function( ) {
		return $http({
			method: 'GET',
			url: '/rest/sent.json'
		});
	};

	this.getInboxEmails = function( ) {
		return $http({
			method: 'GET',
			url: '/rest/inbox.json'
		});
	};

	this.sendEmail = function(email) {
		return $http({
			method: 'PUT',
			url: '/rest/send'
		});
	};

}

angular
	.module('app')
	.service('MailboxService', MailboxService);
