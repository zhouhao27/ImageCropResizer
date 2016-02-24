// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('PhotoController', function($scope) {
  $scope.result = '';
  
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
      setTimeout(function() {
        $scope.$apply();
      });
    }, function(error) {
      
    }, options);
    
 /*
    $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.imgURI = "data:image/jpeg;base64," + imageData;
    }, function(err) {
        // An error occured. Show a message to the user
    });
*/
    
  }
  
  $scope.resize = function() {
    ImageCropResizer.cropResize(function(data) {
    }, function(error) {      
    }, null, 600,300, null);    
  }
})
