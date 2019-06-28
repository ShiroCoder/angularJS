var app = angular.module('myApp', []).
controller('eventController', function ($scope) {
   var technologies = [
       {name : 'C#', like: 0, offsets: 0, dislike: 0},
       {name : 'ASP', like: 0, offsets: 0, dislike: 0},
       {name : 'JS', like: 0, offsets: 0, dislike: 0}, 
       {name : 'Java', like: 0, offsets: 0, dislike: 0},       
   ] ;
   $scope.technologies = technologies;
   $scope.increaseLike = function (tech) {
       tech.like++;     
       tech.offsets = tech.like - tech.dislike;
   }
   $scope.increaseDislike = function (tech) {
       tech.dislike++;  
       tech.offsets = tech.like - tech.dislike;

   }
});