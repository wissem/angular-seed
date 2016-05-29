'use strict';

// Declare app level module which depends on views, and components
angular.module('ngApp', [
  'ngRoute',
  'ngApp.home',
  'ngApp.version',
  'ngApp.ngService',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);