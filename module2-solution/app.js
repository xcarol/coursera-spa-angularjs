(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyShoppingController', ToBuyShoppingController)
         .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];

  function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
    var ctrl1 = this;
    ctrl1.items = ShoppingListCheckOffService.getItemsToBuy;
    ctrl1.buyItem = function(item) {
      ShoppingListCheckOffService.buyItem(item);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];

  function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
    var ctrl2 = this;
    ctrl2.items = ShoppingListCheckOffService.getItemsBought;
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var itemsTobuy = [
      { name: "cauliflower", quantity: 2 },
      { name: "carrots", quantity: 50 },
      { name: "lettuce", quantity: 1 },
      { name: "onions", quantity: 20 },
      { name: "coriander", quantity: 4 },
      { name: "potatos", quantity: 15 },
      { name: "beetroot", quantity: 3 }
    ];
    var itemsBought = [];

    service.getItemsToBuy = itemsTobuy;
    service.getItemsBought = itemsBought;

    service.buyItem = function(item) {
      var idx = itemsTobuy.indexOf(item);
      itemsTobuy.splice(idx, 1);
      itemsBought.push(item);
    }
  }
})();
