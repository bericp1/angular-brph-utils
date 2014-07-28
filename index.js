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
    });

})(angular);