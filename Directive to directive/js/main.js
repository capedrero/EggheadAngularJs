var app = angular.module('appPrincipal', []);
app.directive('pila', function(){
   return {
       restrict : 'E',
       //Al añadir aquí el scope, modificamos el general para aislarlo
       //para las repeticiones de la directiva
       scope : {},
       controller : function($scope){

           $scope.pila = [];

           this.pushPilaBarcelona = function(){
               $scope.pila.push("Barcelona");
           };

           this.pushPilaMadrid = function(){
               $scope.pila.push("Madrid");
           };
       },
       link : function(scope, element){
           element.addClass("button");
           element.bind("click", function(){
              console.log(scope.pila);
           });
       }
   }
});

app.directive('madrid', function(){
    return {
        restrict: 'A',
        //IMPORTANTE
        //No le pone la cejiulla porque se llama dentro del mismo elemento pila a estos atributos.
        require: 'pila',
        link: function(scope, element, attrs, controladorPila){
            controladorPila.pushPilaMadrid();
        }
    }
});

app.directive('barcelona', function(){
    return {
        restrict: 'A',
        require: 'pila',
        link: function(scope, element, attrs, controladorPila){
            controladorPila.pushPilaBarcelona();
        }
    }
});