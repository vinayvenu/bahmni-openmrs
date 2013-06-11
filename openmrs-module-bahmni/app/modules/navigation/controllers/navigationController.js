'use strict';

angular.module('openmrs-module-bhamni.navigation', [])
    .controller('NavigationController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
        var loginPagePath = "/registration/login";

        $scope.createNew = function() {
            $location.url("/registration/patient/new");
        };

        $scope.logout = function () {
            $rootScope.errorMessage = null;
            sessionService.destroy();
            $location.url(loginPagePath);
        }

        $scope.onLoginPage = function() {   
            return $location.path() === loginPagePath;
        }
    }]);
