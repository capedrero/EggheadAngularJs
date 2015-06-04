var app = angular.module('app', []);
app.factory('Data', function(){
	 return {message:"I'm data from a service"} ;
});
//Se inyecta el servicio 'Data' sobre los controladores.
function FirstCtrl($scope, Data) {
	$scope.data = Data;
};

function SecondCtrl($scope, Data) {
	//asignamos el objeto json que hemos creado en la factoria '{clave:valor}'
	$scope.data = Data;
};

