(function () {
"use strict";

angular.module('public')
.controller('NewsletterSignupController', NewsletterSignupController);

NewsletterSignupController.$inject = ['menuItems', 'UserService'];

function NewsletterSignupController(menuItems, UserService) {
  var $ctrl = this;
  
  $ctrl.menuItems = menuItems.menu_items;
  $ctrl.userService = UserService;
  $ctrl.favoriteDishNotFound = false;

  var userInfo = $ctrl.userService.getUserInfo();
  if (userInfo) {
    $ctrl.firstName = userInfo.firstName;
    $ctrl.lastName = userInfo.lastName;
    $ctrl.email = userInfo.email;
    $ctrl.phone = userInfo.phone;
    $ctrl.favoriteDish = userInfo.favoriteDish;
  }
  
  $ctrl.go = function () {
      var foundFavoriteDish = false;
      
      for (var i = 0 ; i < $ctrl.menuItems.length ; i++) {
          if ($ctrl.menuItems[i].short_name == $ctrl.favoriteDish) {
              foundFavoriteDish = true;
              $ctrl.favoriteDishNotFound = false;
              break;
          }
      }
      
      if (foundFavoriteDish == false) {
          $ctrl.favoriteDishNotFound = true;
          return;
      }
      
      $ctrl.userService.setUserInfo({
          firstName: $ctrl.firstName,
          lastName: $ctrl.lastName,
          email: $ctrl.email,
          phone: $ctrl.phone,
          favoriteDish: $ctrl.favoriteDish
      });
  }

  $ctrl.isUserRegistered = function() {
      return $ctrl.userService.getUserInfo() !== null;
  }

}

})();
