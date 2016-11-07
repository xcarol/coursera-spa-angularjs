(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;
  var userInfo = null;

  service.setUserInfo = function (user) {
      userInfo = user;
  };


  service.getUserInfo = function () {
      return userInfo;
  };

}



})();
