'use strict';

// Declare app level module which depends on views, and components
angular
    .module('GitHubWatcher', ['ngRoute', 'yaru22.angular-timeago'])
    .config(config);

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
}
