(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user', 'menuItems', 'ApiPath'];

function UserInfoController(user, menuItems, ApiPath) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.favoriteDish = {};
  $ctrl.ApiPath = ApiPath;
  
  if (user != null) {
    for (var i = 0 ; i < menuItems.menu_items.length ; i++) {
      if (menuItems.menu_items[i].short_name == user.favoriteDish) {
        $ctrl.favoriteDish = menuItems.menu_items[i];
        break;
      }
    }
  }
}

})();
