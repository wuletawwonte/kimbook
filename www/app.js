

var app = angular.module('kimBook', ['onsen', 'ngRoute', 'ngSQLite']);

app.config(function($routeProvider) { 
	$routeProvider
	.when('/', {
		templateUrl: './templates/home.html',
		controller: 'homeCtrl'
	}).when('/election', {
		templateUrl: './templates/election.html',
		controller: 'electionCtrl'
	}).otherwise({
		template: '404'
	})
});


app.controller('homeCtrl', function() {

	mySplitter.content.load('./templates/home.html');

})