/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'angularAMD',
    'uiRouter',
    './controllers/module',
    './directives/module',
    './filters/module',
    './services/module'
], function (ng, angularAMD) {
    'use strict';

    var app = angular.module("app", ['ui.router', 'app.controllers'], function() {
        console.log('App Loaded');
    });

    return app;
});