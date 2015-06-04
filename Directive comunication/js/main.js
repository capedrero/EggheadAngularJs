var app = angular.module('appPrincipal', []);
app.directive('pais', function(){
    return {
        restrict: 'E',
        controller: function () {
            this.makeAnuncio = function (msg) {
                console.log(msg);
            }
        }
    }
})
app.directive('provincia', function(){
    return {
        restrict:'E',
        controller:function(){
            this.makeAnuncio=function(msg){
                console.log(msg);
            }
        },
        require:'^pais'//,
       /* link:function(element, scope, attrs, ctrPais){
            ctrPais.makeAnuncio("Esto es un anuncio de la provincia para España");
        }*/

    }
})
app.directive('ciudad', function(){
    return {
        restrict:'E',
        //IMPORTANTE el tema de 'require', le ponen la cejilla para referirse a los padres
        // de la nueva directiva en el arbol DOM del html.
        require:['^provincia', '^pais'],
        link:function(element, scope, attrs, ctrls){
            ctrls[0].makeAnuncio("Esto es un anuncio de Madrid para su comunidad");
            ctrls[1].makeAnuncio("Esto es un anuncio de Madrid para España");
        }

    }
})