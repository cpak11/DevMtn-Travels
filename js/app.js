angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('locations', {
              url: '/locations',
              templateUrl: '/views/locations.html',
              controller: 'locationsCtrl'
            })
            .state('packages', {
              url: '/packages/:country',
              templateUrl: '/views/packages.html',
              controller: 'packagesCtrl'
            })
            .state('contact', {
              url: '/contact',
              templateUrl: '/views/contact.html',
              parent: 'home'
            })
            .state('adventurers', {
              url: '/adventurers',
              templateUrl: '/views/about-adventurers.html',
              parent: 'home'
            })
            .state('booked', {
              url: '/booked/:id',
              templateUrl: '/views/booked.html',
              controller: 'bookedCtrl'
            })
            ;

        $urlRouterProvider
            .otherwise('/');
    });
