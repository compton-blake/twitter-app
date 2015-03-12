define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MasterCtrl', ['$scope', function ($scope) {
       $scope.test = "Larry";
    }]);
});