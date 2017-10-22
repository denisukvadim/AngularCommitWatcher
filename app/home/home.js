(function () {
    'use strict';

    angular
        .module('GitHubWatcher')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($http, $filter) {
        var home = this;
        home.commits = [];
        home.refreshCommits = refreshCommits;
        home.sortedBy = "Name";
        refreshCommits().then(function (data) {
            home.commits = data;
        });

        function refreshCommits() {
            return $http.get('https://api.github.com/repos/angular/angular/commits')
                .then(function (response) {
                    return response.data;
                })
                .catch(errorFunction);

            function errorFunction() {
                console.log("Request failed");
            }
        };


    };
})();