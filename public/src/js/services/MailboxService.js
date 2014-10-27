/**
 * Inject any Services we need
 * Can't get a $scope instance however
 */
function MailboxService ($http) {

	/**
	 * Business logic layer:
	 * - Fetch and return copies of data
	 * - These are singletons
	 * Don't try do too much inside a Service, such as: var unreadCount = 0;
	 * No presentational logic, use Controllers only
	 * to prevent data being persisted and destroyed correctly
	 * For _performance_ reasons!!
	 */

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
