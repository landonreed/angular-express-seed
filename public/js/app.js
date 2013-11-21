'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'
    }).
    when('/data', {
      templateUrl: 'partials/data',
      controller: 'DataCtrl'
    }).
    when('/details', {
      templateUrl: 'partials/details',
      controller: 'DetailsCtrl'
    }).
    when('/edit', {
      templateUrl: 'partials/edit',
      controller: 'EditCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
