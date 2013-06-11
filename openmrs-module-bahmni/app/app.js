'use strict';


angular.module('openmrs-module-bahmni', ['openmrs-module-bahmni.homepage','openmrs-module-bhamni.navigation'])
angular.module('openmrs-module-bahmni').config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/home', {templateUrl: 'modules/home/views/home.html', controller: 'HomePageController'});
        $routeProvider.otherwise({redirectTo: '/home'});
        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
    }]).run(function($rootScope, $templateCache) {
        //Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        }
    )});