// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('PhotoController', function($scope) {
  $scope.thumbnail = 'http://nemanjakovacevic.net/wp-content/uploads/2013/07/placeholder.png';
  $scope.result = '';
  
  $scope.pickPhoto = function() {
    modusecho.echo('hello world!!!',function(data) {
      alert(data);
    }, function(error) {
      alert(error);
    });    
  }
})
