var app = angular.module('app', []);

function Ctrl($scope) {
	$scope.countries = [
		{name: 'Spain'},
		{name: 'France'},
		{name: 'England'}
	];
	$scope.cities = [
		{name:'Madrid', country:'Spain'},
		{name:'Barcelona', country:'Spain'},
		{name:'Paris', country:'France'},
		{name:'Nantes', country:'France'},
		{name:'London', country:'England'}
	];
	//Inicio el primer combo
	$scope.selCountry = $scope.countries[0];
	//Se llama para cambiar el array del segundo combo
	$scope.fCity = function(){
		$scope.aCities = [];
		for(var i =0; i<$scope.cities.length;i++){
			if($scope.cities[i].country===$scope.selCountry.name) {
				$scope.aCities.push($scope.cities[i]);
			};
		};
		//Para la segunda opción no modelo
		//$scope.selCity=$scope.aCities[0];
	};
	//Inicializo el segundo combo
	$scope.fCity();
};

