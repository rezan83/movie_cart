app.controller('cart', ['$scope', '$rootScope', function($scope, $rootScope) {

	$scope.cart = $rootScope.cart;

	$rootScope.removeCart = function(array, index, item) {

		// renabling adding bottun in the home main list
		$rootScope.items[$rootScope.items.indexOf(item)].noAdd = false;

		// remove cart item from dom
		$rootScope.cart[index].showElement = false;
		// remove item from global cart array and from total
		array.splice(index, 1);
		$rootScope.total -= 1;
	}

}]);

