function composeEmail() {
	return {
		restrict: 'EA',
		scope: true,
		replace: true,
		template: [
			'<div class="compose" ng-show="vm.show">',
				'<div class="compose__header">',
					'Compose New Email',
					'<span class="compose__header--close" ng-click="vm.close()">',
						'<i class="fa fa-times fa-fw"></i>',
					'</span>',
				'</div>',
				'<div class="compose__message">',
					'<input type="text" ng-model="vm.to" placeholder="To...">',
					'<input type="text" ng-model="vm.subject" placeholder="Subject...">',
					'<textarea ng-model="vm.emailText" placeholder="Compose your message..."></textarea>',
					'<a class="button">Send</a>',
				'</div>',
			'</div>'
		].join(''),
		controllerAs: 'vm',
		controller: function ($scope, $rootScope, MailboxService) {

			var vm = this;

			// variables
			vm.show = false;
			vm.to = '';
			vm.subject = '';
			vm.emailText = '';

			// methods
			vm.close = close;
			vm.send = send;

			function close () {
				vm.show = false;
			}

			function resetEmail() {
				vm.to = '';
				vm.subject = '';
				vm.emailText = '';
				vm.show = true;
			}

			function send() {
				var email;
		        // MailboxService
		        // .sendEmail(email)
		        // .then(function () {
		        //     $rootScope.$broadcast('email:sent', email);
		        // });
		    }

			// special $scope methods
			$scope.$on('compose:show', resetEmail);

		}
	};
}

angular
	.module('app')
	.directive('composeEmail', composeEmail);
