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
        template:'<a ui-sref="categories">Show menu categories</a>'
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

    .state('itemDetail', {
        url:'/item-detail/{itemId}',
        templateUrl: './main-items.template.html',
        controller:'DetailsController as details',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemId);
            }]
        }
    });

    }

})();
