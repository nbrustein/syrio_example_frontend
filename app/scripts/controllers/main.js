'use strict';

angular.module('syrioExampleFrontendApp')
  .controller('MainCtrl', ['$scope', 'SyrioHarvey.assets', function ($scope, harveyAssets) {
    $scope.menuItems = [
      harveyAssets.editorMenuItem
    ];
  }]);
