(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['user', 'menuItems'];

function UserInfoController(user, menuItems) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.favoriteDish = {};
  
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
