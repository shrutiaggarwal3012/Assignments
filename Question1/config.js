angular.module('mobileApp',['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home/home.html',
			controller: 'KeyPadCtrl'
			});

	$urlRouterProvider.otherwise('home');
}]);