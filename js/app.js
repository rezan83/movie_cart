var app = angular.module('App', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/', {

		templateUrl: 'views/itemList.html',
        controller: 'itemList'

	}).when('/cart', {

		templateUrl: 'views/cart.html',
        controller: 'cart'

	}).otherwise({
		redirectTo: '/'
	})



}]);