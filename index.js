(function (angular) {
  'use strict';

  angular.module('brph.utils', [])
    .directive('brphBlockClick', function(){
      return {
        restrict : 'A',
        link: function(scope, $elem){
          $elem.on('click', function(event){
            event.preventDefault();
          });
        }
      };
    })
    .directive('brphFloatHeight', ['$rootScope', function($rootScope){
      var thisHeight = function(){
        return $(this).outerHeight(true);
      };
      var floatFilter = function(){
        var $this = $(this);
        return $this.css('float') === 'left' || $this.css('float') === 'right';
      };
      var adjustHeight = function($elem){
        $elem.height(function() {
          return Math.max.apply(Math, $(this).children().filter(floatFilter).map(thisHeight));
        });
      };
      return {
        restrict : 'A',
        link: function(scope, $elem){
          adjustHeight($elem);
          $rootScope.$on('$stateChangeSuccess', function(){
            adjustHeight($elem);
          });
        }
      };
    }]);

})(angular);