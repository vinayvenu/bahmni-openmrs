'use strict';


angular.module('resources.appService', [])
	.factory('appService', ['$http', '$rootScope', function ($http, $rootScope) {
			var extensionPointIdForHomePage =  "bhamni.homepageLink";
			var openmrsUrl = "/openmrs"

			var allApps = function(){
				 return $http.get(openmrsUrl + "/module/appframework/apps.json", {
				 	method: "GET"
				 });
			};


			var enabledAppsOnHomePage = function(){
				return $http.get(openmrsUrl + "/module/appframework/enabled_extensions.json?extensionPointId=" + extensionPointIdForHomePage, {
				 	method: "GET"
				 });
			}

			return {
				allApps : allApps,
				enabledAppsOnHomePage : enabledAppsOnHomePage
			};
	}]);