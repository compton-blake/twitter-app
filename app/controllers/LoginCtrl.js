define(['app'], function (app) {
    'use strict';
    app.register.controller('LoginCtrl', ['$scope', '$http', function ($scope, $http) {
       $scope.test = "Dave";

       $http.get('/test-xhr').success(function(data, status, headers, config){
       	console.log(data);
       }).error(function(data, status, headers, config) {
       	console.log(data);
       });

    }]);
});