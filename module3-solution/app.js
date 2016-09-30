(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
         .controller('NarrowItDownController', NarrowItDownController)
         .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['$scope'];

  function NarrowItDownController($scope) {
  }

  function MenuSearchService() {

  }
})();
