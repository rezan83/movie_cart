app.controller('cart', ['$scope', '$rootScope', function($scope, $rootScope) {

	$scope.cart = $rootScope.cart;

	$rootScope.removeCart = function(array, index) {
	// remove cart item from dom
		$rootScope.cart[index].showElement = false;
	// remove item from global cart array
		array.splice(index, 1);
		
	}

}]);