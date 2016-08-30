var app = angular.module("carouselApp",['ngAnimate']);

app.directive('angularCarouselDirective',function($timeout){
  return {
    restrict:'AE',
    replace: true,
    scope:{
        images:'='
    },
    link:function(scope,elem,attr){
      scope.currentIndex =0;
      scope.next = function() {
        scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
      };
      scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
      };
      scope.$watch("currentIndex",function(){
        scope.images.forEach(function(image){
          image.visiable=false;
        });
        scope.images[scope.currentIndex].visiable=true;
      })
    },
    templateUrl:'carousel.html'

  };


});
app.controller('MainController',function($scope){

    $scope.images=[
      {
        src:"http://i.imgur.com/emBm6jv.jpg",
        title:'image1'
      },
      {
        src:"http://i.imgur.com/l49aYS3.jpg",
        title:"image2"
      },
      {
        src:"http://i.imgur.com/a0bs8oJ.jpg",
        title:"image3"
      }

    ]


});
