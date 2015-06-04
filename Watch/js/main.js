var app = angular.module('app', []);

function CartController($scope) {
    $scope.bill = {};
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    //No se le pasa el scope a la funcion!!
    $scope.totalCart = function () {
        var tot = 0;
        for (var i = 0; i < $scope.items.length; i++) {
            tot += $scope.items[i].quantity * $scope.items[i].price;
        };
        return tot;
    };
/////////////////////////////////////////
    $scope.subTotal = function () {
      if($scope.totalCart()>100){
          $scope.bill.discount  = 10; $scope.bill.discount>100
      }else{
          $scope.bill.discount=0;
      }
        return $scope.totalCart()-$scope.bill.discount;
    };
    //Solucion con watch:
   /* function calculateDiscount(newValue, oldValue, scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }
    $scope.$watch($scope.totalCart, calculateDiscount);*/

};

