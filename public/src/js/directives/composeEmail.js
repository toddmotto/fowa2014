/**
 * Two types of Directives:
 * 
 * - Add behaviour
 *   - Everything you do (ng-*) is a Directive
 *   - Don't return a template.
 *   - vm.username = 'Hi';
 *   - <input ng-model="vm.username"> : wraps all events for ng-model and persists JS Object
 *   - Not limited on how much behavior you want to add
 *   - <input ng-model="vm.username" ng-change="vm.doSomething()" ab-whatever="">

 *
 * Stemmed from Microsoft: .htc
 *
 * Web components along, componentize the web: Eric Bidelman (Google, Polymer)
 * 
 * - Act as more "Web Components"
 *   - HTML Imports <head>:
           <link rel="import" href="googlemap.html">
 *   - ShadowDOM
           <div>
               <shadow>
           </div>
 *   - Custom Elements
           <google-maps> (try to create two-word directive names)
 *   - Templates
           HTML5 spec: <template> element
           Lower level than Directives
 * 
 */
function composeEmail() {
	/** 
	 * All a directive does is return an Object
	 * Add properties you need, check the full list on Angular's API docs
	 */
	return {
		/**
		 * restrict:
		 * DO use these:
		 * - E: Element, <compose-email></compose-email>
		 * - A: Attribute, <div compose-email></div>
		 *
		 * DONT use these:
		 * - C: Class Name, <div class="compose-email"></div>
		 * - M: Comment, <!-- directive: compose-email -->
		 */
		restrict: 'EA',

		/**
		 * scope:
		 * inheritance: (scope: true) 
		 *
		 * isolate: pass specificly scoped values into a Directive
		 * scope: { longtitude: '=', latitude: '=' } // same as '=longitude'
		 *
		 * scopes passed "down" are only available in the $scope Object
		 * even with ControllerAs
		 *
		 */
		scope: true,

		/**
		 * replace: removes the root element from the DOM
		 * Note: Each Directive needs a single root element
		 */
		replace: true,

		/**
		 * template:
		 * templateUrl: Like HTML Imports from HTML5 spec
		 * { templateUrl: 'tmpl/compose-email.html' }
		 * <script type="text/ng-template" id="tmpl/compose-email.html">
			<div>{{ vm.username }}</div>
		   </script>
		 *
		 * Angular loads first time loaded Directives into the $templateCache
		 * ng-templatecache for Grunt/Gulp, performance first module
		 *
		 */
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
					'<a href="" class="button" ng-click="vm.send()">Send</a>',
				'</div>',
			'</div>'
		].join(''),

		/**
		 * optional controllerAs namespace
		 */
		controllerAs: 'vm',

		/**
		 * controller, create a new one or assign existing
		 * controller: 'MainCtrl'
		 */
		controller: function ($scope, $rootScope, MailboxService) {
			// pulling in longtitude would require DI-ing $scope
			// $scope.longtitude // -2323029
			var vm = this;

			// Google map example to pull through existing
			// scope values: vm.longtitude = $scope.longtitude;

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
				vm.show = false;
				var email = {
				    to: vm.to,
				    subject: vm.subject,
				    contents: vm.emailText,
				    from: 'Todd Motto',
				    timestamp: +new Date(),
				    read: true
				};
				$rootScope.$broadcast('email:sent', email);
				console.log(email);

		        // MailboxService
		        // .sendEmail(email)
		        // .then(function () {
		        //     $rootScope.$broadcast('email:sent', email);
		        // });
		    }

			// special $scope methods
			$scope.$on('compose:show', resetEmail);

		},
		/**
		 * link: post-compile and DOM manipulation
		 * 
		 */
		link: function ($scope, $element, $attrs, $ctrl) {
			/**
			 * add DOM manipulation events here
			 */

			/**
			 * $scope: Try avoid using $scope here
			 */

			/**
			 * $element: refers to the root element in the template
			 * var zone = $element.find('.dragzone');
			 * zone.on('dragend'[, callback]);
			 */

			/**
			 * $attrs: An array of values from the Element
			 */

			/**
			 *
			 * $ctrl: 
			 * var zone = $element.find('.dragzone');
			 * 

			 zone.on('dragend', function (event) {
			 	$ctrl.uploadFile(event.target);
			 });

			 */

		}
	};
}

angular
	.module('app')
	.directive('composeEmail', composeEmail);
