var superheroes = angular.module('appSuperheroes', []);
var evento = angular.module('appEvento', []);

//La palabra template crea la etiqueta directamente como si fuera HTML.
superheroes.directive('superman11', function(){
	return {
		restrict:"A",
		template:"<h1>HOLA COPONNNNNNN!!!!!</h1>"
	};
});
superheroes.directive('auperman', function(){
	return {
		restrict:"A",
		link: function(){
			alert("Soy mas FUERTE");
		}
	};
});
superheroes.directive('flash', function(){
	return {
		restrict:"A",
		link: function(){
			alert("Soy mas RAPIDO");
		}
	};
});
superheroes.directive('dircom', function(){
	return {
		restrict:"M",
		link: function(){
			alert("Directiva por comentario");
		}
	};
});
superheroes.directive('pataliebre', function(){
	return {
		restrict:"A",
		link: function(){
			alert("Soy un PATALIEBRE!!");
		}
	};
});
//El comportamiento es distinto dependiendo del evento seleccionado.
//mouseenter y mouseleave son más simples se aplican sobre el elemento padre y no afectan los elementos hijos del dom
//mouseover y mouseout se ven afectados por los hijos aplicándose al entrar en un hijo.
var eventEn="mouseenter";
var eventSal="mouseleave";
/*evento.directive('mouseen', function(){
		return {
			restrict:"A",
			link: function(scope, element){
				element.bind(eventEn, function(){
					console.log("He ENTRADO por el contenido con el raton");
				});
			}
		};
});

evento.directive('mousesal', function(){
	return {
		restrict:"A",
		link: function(scope, element){
			element.bind(eventSal, function(){
				console.log("He SALIDO por el contenido con el raton");
			});
		}
	};
});*/
//En este segundo ejemplo se enlaza el tipo de elemento al pasar el cursor sobre él.
evento.directive('mouseen', function(){
	return {
		restrict:"A",
		link: function(scope, element){
			element.bind(eventEn, function(){
				//element.addClass("panel");
				console.log("He ENTRADO por el contenido con el raton");
			});
		}
	};
});

evento.directive('mousesal', function(){
	return {
		restrict:"A",
		link: function(scope, element){
			element.bind(eventSal, function(){
				console.log("He SALIDO por el contenido con el raton");
				//element.removeClass("panel");
			});
		}
	};
});