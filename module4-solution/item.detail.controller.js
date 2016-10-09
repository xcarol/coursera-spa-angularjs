(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoryDetailController', CategoryDetailController);
    
    
    CategoryDetailController.$inject = ['$stateParams', 'items'];
    
    function CategoryDetailController($stateParams, items) {
      var itemDetail = this;
      var item = items[$stateParams.itemId];
      itemDetail.name = item.name;
//      itemDetail.quantity = item.quantity;
//      itemDetail.description = item.description;
    }
})();