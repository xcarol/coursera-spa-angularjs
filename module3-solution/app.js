(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearchService', MenuSearchService)
         .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

  function NarrowItDownController($scope, MenuSearchService) {
    var ctrl = this;

    ctrl.search_term = "";

    ctrl.narrowSearch = function() {
      if (ctrl.search_term.length == 0) {
        ctrl.items = [];
      } else {
        MenuSearchService.getMatchedMenuItems(ctrl.search_term).then(function(foundItems){
          ctrl.items = foundItems;
        });
      }
    }

    ctrl.removeItem = function(index) {
      ctrl.items.splice(index,1);
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
            var foundItems = [];
            var menu_items = result.data.menu_items;
            var search_regex = new RegExp(searchTerm, "i");

            for(var i = 0 ; i < menu_items.length ; i++) {
              if (menu_items[i].description.search(search_regex) != -1)
                foundItems.push(menu_items[i]);
            }

            return foundItems;
      });
    }
  }
})();
