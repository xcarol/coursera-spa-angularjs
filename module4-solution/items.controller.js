(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('DetailsController', DetailsController);
    
    
    DetailsController.$inject = ['MenuDataService', 'items'];
    
    function DetailsController(MenuDataService, items) {
        var details = this;
        details.items = items.menu_items;
    }
    
})();