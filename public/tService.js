angular.module('tService', [])

	.factory('TweetFactory', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/');
			},
			getTweets : function(username) {
				console.log("QWER");
				return $http.post('/tweets/', username);
			}
		}
	}]);