define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('AnotherCtrl', ['$scope', function ($scope) {
       $scope.test = "Dave";
    }]);
});