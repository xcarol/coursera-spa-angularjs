(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoryDetailController', CategoryDetailController);
    
    
    CategoryDetailController.$inject = ['MenuDataService', 'items'];
    
    function CategoryDetailController(MenuDataService, items) {
        var categoryDetail = this;
        categoryDetail.items = items;
    }
    
})();