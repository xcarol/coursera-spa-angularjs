(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .directive('foundItems',FoundItems)
         .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

  function FoundItems() {
      var ddo = {
        scope: {
          items: '<',
          title: '@'
        },
      };
      return ddo;
  }

  function NarrowItDownController($scope, MenuSearchService) {
    var ctrl = this;
    ctrl.narrowSearch = function(search) {
      ctrl.found = MenuSearchService.getMatchedMenuItems();
    }
  }

  MenuSearchService.$inject = ['$http'];

  function find_matches (result) {
    // process result and only keep items that match
    var foundItems = [];
    var reg_isearch = new RegExp(searchTerm, "i");
    for (var i = 0 ; i < result.data.length ; i++) {
      if (result.data[i].name.search(reg_isearch))
        foundItems.push(result.data[i]);
    }
    console.log("si paso por aqui");
    console.log(foundItems);
    return foundItems;
  };

  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
            method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json'})
          .then(find_matches);
    }
  }

})();
