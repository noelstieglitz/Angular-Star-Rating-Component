'use strict';

notflixApp.directive('starRating', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/templates/starRating.html',
        link: function(scope){

            var setRating = function(){
                scope.stars = [];
                var starRating = scope.starRating;
                for(var i = 0; i < scope.maxStarRating; i++){
                    scope.stars.push({empty:i >= starRating, index:i+1});
                }
            };

            scope.click = function(starRating) {
                scope.starRating = starRating;
                scope.ratingChanged({newRating: starRating});
            };

            scope.$watch('starRating', function(oldVal, newVal) {
                if (newVal) {
                    setRating();
                }
            });
        },
        scope: {
            starRating: "=",
            maxStarRating: "=",
            ratingChanged: "&"
        }
    };
});