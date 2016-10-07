(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'index.html'
    })
    
    .state('categories', {
        url: '/categories',
        templateUrl: 'categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    
    .state('categories.categoryDetail', {
        templateUrl: 'items.template.html',
        controller: 'CategoryDetailController as categoryDetail',
        params: {
            itemId: null
        }
    });
    
    }

})();