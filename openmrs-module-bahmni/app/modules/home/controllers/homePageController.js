'use strict';

angular.module('openmrs-module-bahmni.homepage',['resources.appService'])
	.controller('HomePageController', ['$scope', 'appService', function($scope, appService){
		$scope.apps = appService.enabledAppsOnHomePage();

	}]);