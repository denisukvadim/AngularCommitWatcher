'use strict';

// Declare app level module which depends on views, and components
angular
    .module('HeaderSearch', ['ngRoute', 'yaru22.angular-timeago'])
    .config(config);

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
    $routeProvider
        .when('/', {
            templateUrl: 'header/header.html',
            controller: 'HeaderCtr',
            controllerAs: 'header'
        });
}
