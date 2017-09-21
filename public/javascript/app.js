var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'/views/home.html',
		//controllerAs:'vm',
		controller:'homeCtrl'
	});
	
});