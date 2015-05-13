define(['app'], function (app) {
    'use strict';
    app.register.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
       $scope.test = "Dave";

       $http.get('/test-xhr').then(function(response) {
       		console.log(response);
       }, function(errResponse) {

       });

    }]);
});