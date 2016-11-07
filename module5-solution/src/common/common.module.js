(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://coursera-spa-angularjs.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
