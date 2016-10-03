(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

  function NarrowItDownController($scope, MenuSearchService) {
    var ctrl = this;
    ctrl.narrowSearch = function(search) {
      ctrl.found = MenuSearchService.getMatchedMenuItems();
    }
  }

  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
            method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json'})
          .then(function (result) {
            // process result and only keep items that match
            var foundItems = result.data;

            console.log(result.data);

            // return processed items
            return foundItems;
      });
    }
  }
})();
