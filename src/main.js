var app = angular.module("carouselApp",['ngAnimate','k-angularCarousel']);


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
