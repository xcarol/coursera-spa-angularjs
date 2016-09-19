(function () {
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunch = "";

    $scope.checkLunch = function() {
      var items = $scope.lunch.split(',');

      for(var i = 0 ; i < items.length ; i++) {
        if (items[i].length == 0) {
          items.splice(i, 1);
          i--;
        }
      }

      if(items.length == 0 || (items.length == 1 && items[0].length == 0)) {
        $scope.good = false;
        $scope.message = "Please enter data first";
      } else if (items.length <= 3) {
        $scope.good = true;
        $scope.message = "Enjoy!";
      } else {
        $scope.good = true;
        $scope.message = "Too much!";
      }
    }
  }
})();
