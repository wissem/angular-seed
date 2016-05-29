'use strict';

angular.module('ngApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/index.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','ngApp.ngService',function($scope,ngService) {

    ngService.getList.success(function(data){
        $scope.list = data;
    })
}]);