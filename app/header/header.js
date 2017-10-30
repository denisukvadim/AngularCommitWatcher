(function () {
    'use strict';

    angular
        .module('HeaderSearch')
        .controller('HeaderCtr', HeaderCtr);

    function HeaderCtr($http, $filter) {
        var header = this;

        header.showModal = showModal;

        function showModal() {
            $('#myModal').modal('show');
        }

    };
})();