var app = angular.module('appPrincipal', []);
app.directive('panel', function(){
   return {
       restrict: 'E',
       transclude:true,
       template: '<div class="panel" ng-transclude>Componente directiva panel</div>'
   }
});