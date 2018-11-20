app.controller('cart', ['$scope', '$rootScope', function($scope, $rootScope) {


	$scope.cart = $rootScope.cart;

	$rootScope.removeCart = function(array, index) {

		$rootScope.cart[index].showElement = false;

		array.splice(index, 1);
		
	}

}]);