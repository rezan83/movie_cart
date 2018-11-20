app.controller('itemList', ['$scope', '$rootScope', 'items', function($scope, $rootScope, items) {

	items.success(function(data) {
		$rootScope.items = data.Search;

	});

	// global cart array
	$rootScope.cart = [];
	$rootScope.total = 0;

	// add item to cart
	$rootScope.addToCart = function(item, index) {

		// disabling adding bottun so item get added only once
		$rootScope.items[index].noAdd = true;
		// adding to cart
		$rootScope.cart.push(item);
		$rootScope.total += 1;

	}

}]);