var app = angular.module('appCtrl', []);

//La primera forma no es muy recomendable, porque no se sabe que scope está
//ejecutando
app.controller('ctrl', function($scope){
    $scope.loadAlert = function(){
        alert('ALERT CARGADO');
    };
    $scope.loadAlert1 = function(){
        alert('ALERT 1 CARGADO');
    };
    $scope.loadAlert2 = function(){
        alert('ALERT 2 CARGADO');
    };
});
/*app.directive('enter', function(){
    return function(scope, element) {
        element.bind("mouseenter", function () {
           scope.$apply('loadAlert()');
            //Esta opción no es muy recomendable, porque no sabemos el scope de donde viene.
            //scope.loadAlert();
            //La mejor opción es desacoplarlo del modelo como atributo.

        });
    }
});*/
//La mejor opción es desacoplarlo del modelo como atributo.
app.directive('enter', function(){
    return function(scope, element, attrs) {
        element.bind("mouseenter", function () {
            scope.$apply(attrs.enter);
        });
    }
});