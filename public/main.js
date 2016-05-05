angular.module('twitterLittleApp', [])

	.controller('controller', ['$scope','$http','TweetFactory', function($scope, $http, TweetFactory) {
		$scope.username = "";

		// get landing page
		TweetFactory.get()
			.success(function() {
				$scope.tweets = [];
			});

		// get the tweets
		$scope.search = function() {
			console.log("QWER12312341234");
				TweetFactory.getTweets($scope.username)
					.success(function(data) {
						$scope.tweets = JSON.parse(data);
					});
			}
	}]);