angular.module('tService', [])

	.factory('TweetFactory', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/');
			},
			getTweets : function(username) {
				return $http.post('/tweets/', username);
			}
		}
	}]);