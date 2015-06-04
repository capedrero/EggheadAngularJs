var app = angular.module('app', []);

//Se inyecta el servicio 'Data' sobre los controladores.
function Ctrl($scope) {
	$scope.colors = [
		{name:'black', shade:'dark'},
		{name:'white', shade:'light'},
		{name:'red', shade:'dark'},
		{name:'blue', shade:'dark'},
		{name:'yellow', shade:'light'}
	];

	$scope.myColor = $scope.colors[2];

};

