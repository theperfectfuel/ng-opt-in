var app = angular.module('optInApp', []);

app.controller('Ctrl', function($scope) {
	$scope.title = "My Opt In Page";
});

app.directive('optIn', function() {
	return {
		templateUrl: 'templates/opt-in.html',
		transclude: true,
	}
});