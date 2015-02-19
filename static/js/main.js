require.config({

    paths: {
    	'domReady': '../modules/requirejs-domready/domReady',
        'jquery': '../modules/jquery/jquery',
        'angular': '../modules/angular/angular',
        'uiRouter': '../modules/ui-router/angular-ui-router'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});