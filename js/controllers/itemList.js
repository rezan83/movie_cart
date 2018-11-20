

app.controller('itemList', ['$scope', '$rootScope', '$routeParams', 'items', function($scope, $rootScope, $routeParams, items) {

	items.success(function(data) {
		$scope.items = data.Search;

	});

	
	$rootScope.cart = [];


	$rootScope.addToCart = function(item) {

		$rootScope.cart.push(item);

	}



}]);

	// filter(a => a!== item)
//});
	// function(a) {
	// 		if (indexOf(a)!== index) {
	// 			return a
	// 		}
		

	// 	}


	//$scope.dogIndex = parseInt($routeParams.Id);




	// var cart = [];

	// var add = document.selectElementById('add');


// app.controller('BookController', ['$scope', '$routeParams', 'books', function($scope, $routeParams, books) {
//   // Your code here
//   books.success(function(data){
//     $scope.book = data[$routeParams.bookId];
//   });

//   // Using this property to create the URL in line 9 of views/book.html
//   $scope.currentBookIndex = parseInt($routeParams.bookId);
  
// }]);
