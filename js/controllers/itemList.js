app.controller('itemList', ['$scope', '$rootScope', 'items', function($scope, $rootScope, items) {

	items.success(function(data) {
		$scope.items = data.Search;

	});

	// global cart array
	$rootScope.cart = [];

	// add item to cart
	$rootScope.addToCart = function(item) {

		$rootScope.cart.push(item);

	}

}]);