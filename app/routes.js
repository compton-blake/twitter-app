/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app', 'angularAMD'], function(app, angularAMD) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
	        .state('index',
                angularAMD.route({
                    url: '/home',
                    templateUrl: 'templates/master.html',
                    controllerUrl: 'controllers/MasterCtrl'
                })
            )
    }])
});