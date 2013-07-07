'use strict';

angular.module('syrioExampleFrontendApp', [
	'SyrioFrontendComponents',
	'SyrioHarveyFrontend'
])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
			.when('/login', {
        templateUrl: 'bower_components/syrio_frontend_components/app/views/login.html',
        controller: 'SyrioFrontendComponents.loginCtrl'
      })
			.when('/harvey/editor', {
				templateUrl: 'bower_components/syrio_harvey_frontend/app/views/editor/main.html',
        controller: 'SyrioHarvey.Editor.mainCtrl'
			})
      .otherwise({
        redirectTo: '/'
      });
  }]);