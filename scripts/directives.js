var myApp = angular.module('myApp', []).
controller('myController', function ($scope) {
    
}).directive('welcomePage', function () {

    var html = "<h1>Welcome to my Directive</h1>";
    return {
        template: html
    }
});