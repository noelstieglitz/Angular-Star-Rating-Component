'use strict';

notflixApp.controller('MoviesController',
    function($scope, $window){
        $scope.movies =  [{
            id : 1,
            title : 'Blood Sport',
            starRating: 3,
            maxStarRating: 5,
            releasedYear: 1990,
            review: "An Epic story of love and loss."
        },
        {
            id : 2,
            title : 'Blood Sport II: 2 much 2 Blood',
            starRating: 4,
            maxStarRating: 5,
            releasedYear: 1991,
            review: "Based on the coming of age novel \"Never Been in Love... twice\"."
        },
        {
            id : 3,
            title : 'Blood Sport III:   O(log N) Blood Growth',
            starRating: 5,
            maxStarRating: 5,
            releasedYear: 1992,
            review: "The third and final conclusion to the trilogy of our time."
        }];

        $scope.updateModel = function(newRating){
            console.log(newRating);
        }
    });