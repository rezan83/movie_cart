app.factory('items', ["$http", function($http) {

	var apiKey = `c9dc2e82`;
	var page = `1`;

	var source = `http://www.omdbapi.com/?s=Batman&page=${page}&apikey=${apiKey}`;
	
	var data = $http.get(source);
	data.success(data=>data).error(err=>err);

	return data;
}]);

//var source = "https://dog.ceo/api/breed/hound/images";
//var source = 'https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json';



