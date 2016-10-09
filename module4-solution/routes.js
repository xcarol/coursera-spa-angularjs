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
        template:'<a ui-sref="categories">See our Premade No Cookie Shopping List!</a>'
    })
    
    .state('categories', {
        url: '/categories',
        templateUrl: './main-categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })
    
    .state('categories.itemDetail', {
        templateUrl: './items.template.html',
        controller: 'CategoryDetailController as itemDetail',
        params: {
            itemId: null
        },
        resolve:{
            itemDetail: ['MenuDataService', function (MenuDataService, params) {
                return MenuDataService.getItemsForCategory(params.itemId);
            }]
        }
    });
    
    }

})();