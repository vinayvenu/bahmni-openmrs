'use strict';

angular.module('bahmni-app.initialization', [])
    .factory('initialization', ['$rootScope', '$q', function($rootScope, $q){
        var initializationPromiseDefer = $q.defer();
        
        return initializationPromiseDefer.promise;
    }]);