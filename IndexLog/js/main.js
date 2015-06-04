var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "app.html",
      controller: "ctrl"
    }
  );
});
app.controller("ctrl", function($scope, $route) {
	$scope.message = "This is my app!!!";
});
//app.run(function($rootscope, $log){
//	$rootscope.$log = $log;
//});
