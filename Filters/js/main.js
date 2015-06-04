var app = angular.module('app', []);
app.factory('Cities', function(){
	return [
		{name:'Madrid', country:'Spain'},
		{name:'Barcelona', country:'Spain'},
		{name:'Paris', country:'France'},
		{name:'Nantes', country:'France'},
		{name:'London', country:'England'}
	];
});
app.directive('ejemplo', function(){
	return {
		restrict:"E",
		template:"<h1>HOLA COPONNNNNNN!!!!!</h1>"
	};
});
app.directive('caca', function(){
	return {
		restrict:"A",
		link: function(){
			alert("directiva por atributo 2");
		}
	};
});
app.directive('ejemplo3', function(){
	return {
		restrict:"A",
		link: function(){
			alert("directiva por atributo 3");
		}
	};
});
app.factory('Data', function () {
	return { message: "I'm data from a service" }
});
//Filtro aplicado como función con un parámetro de entrada
//He incoporado más parámetros
app.filter('reverse', function(){
	return function(input, arg1, arg2){
		return input.split("").reverse().join("")+" "+arg1+" "+arg2;
		//return input+" "+arg1+" "+arg2;
	}
});

function FirstCtrl($scope, Data) {
	$scope.data = Data;
}

function SecondCtrl($scope, Data) {
	$scope.data = Data;

	$scope.reversedMessage = function(message) {
		return message.split("").reverse().join("");
	};

}
//Controlador con filtro normal
function FilterCtrl($scope, Cities) {
	$scope.cities = Cities;
}


