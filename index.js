(function (angular) {
  'use strict';

  angular.module('brph.utils', [])
    .directive('brphVertCenter', function(){
      return {
        restrict : 'A',
        transclude : true,
        template : [
          '<div class="brph-vert-center-outer">',
						'<div class="brph-vert-center-inner" ng-transclude></div>',
					'</div>'
        ].join('\n'),
        link: function($elem){
          console.log($elem);
        }
      };
    });

})(angular);