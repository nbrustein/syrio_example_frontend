'use strict';

angular.module('syrioExampleFrontendApp', ['SyrioFrontendComponents'])
  .config(['$routeProvider', function ($routeProvider) {
		$routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
			.when('/login', {
        templateUrl: 'bower_components/syrio_frontend_components/app/views/login.html',
        controller: 'SyrioFrontendComponents.loginCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
