// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('PhotoController', function($scope) {
  $scope.imageData = null;
  
  $scope.pickPhoto = function() { 
    
    var options = { 
      quality : 75, 
      destinationType : Camera.DestinationType.DATA_URL, 
      sourceType : Camera.PictureSourceType.PHOTOLIBRARY, 
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };
 
    navigator.camera.getPicture(function(imageData) {
      $scope.thumbnail = "data:image/jpeg;base64," + imageData;
      $scope.imageData = imageData;
      setTimeout(function() {
        $scope.$apply();
      });
    }, function(error) {
      
    }, options);
       
  }
  
  $scope.resize = function() {
    ImageCropResizer.cropResize(function(data) {   
      $scope.resultImage = "data:image/jpeg;base64," + data.imageData;
      setTimeout(function() {
        $scope.$apply();
      });      
    }, function(error) {
      alert(error);      
    }, $scope.imageData, 100,100, null);    
  }
})
