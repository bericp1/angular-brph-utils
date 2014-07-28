(function (angular) {
  'use strict';

  angular.module('brph.utils', [])
    .directive('brphBlockClick', function(){
      return {
        restrict : 'A',
        link: function($elem){
          $elem.click(function($event){
            $event.preventDefault();
          });
        }
      };
    });

})(angular);