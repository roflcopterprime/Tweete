angular.module('twitterBigApp', [])


	.controller('controller', ['$scope','$http','Twitter', function($scope, $http, Twitter) {
		$scope.username = "";

		// get landing page
		TweetFactory.get()
			.success(function() {
				$scope.tweets = [];
			});

		// get the tweets
		$scope.search = function() {
				TweetFactory.getTweets($scope.username)
					.success(function(data) {
						$scope.tweets = JSON.parse(data);
					});
			}
		};
	}]);