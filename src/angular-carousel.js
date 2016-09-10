angular.module("k-angularCarousel",[])
.directive('angularCarouselDirective',function($interval){
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
      });
      $interval(scope.next,2000);


    },
    template:'<div class="carousels"><div class="carousel" ng-repeat="image in images" ng-show="image.visiable"><img ng-src="{{image.src}}" alt="{{image.title}}"/></div>'+
             '<div class="arrow"><a href="#" class="left_arrow" ng-click="prev()">&#60;&#60;Prev</a><a href="#" class="right_arrow" ng-click="next()">&#62;&#62;Next</a></div></div>'

  };


});