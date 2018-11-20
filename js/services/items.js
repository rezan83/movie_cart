app.factory('items', ["$http", function($http) {

	// api key should be seperate if sensative
	var apiKey = `c9dc2e82`;
	//page number i can make it chosed by user along with search item
	var page = `1`;
	// s=Batman is the search query i choos this to make it simple and because i am batman :D
	var source = `http://www.omdbapi.com/?s=Batman&page=${page}&apikey=${apiKey}`;
	
	var data = $http.get(source);
	data.success(data=>data).error(err=>err);

	return data;
}]);

