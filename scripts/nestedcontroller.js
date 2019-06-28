// (function () {
//     var app = angular.module('myApp', []).
//     controller(['$scope'], function ($scope) {
//         var countries = [{name: 'viet nam', cities: [{
//             name: 'ha noi',
//             name: 'da nang',
//             name: 'ho chi minh city'
//         }]},
//     {
//         name: 'usa',
//         cities: [{
//             name: 'new york',
//             name: 'los angeles',
//             name: 'washington'
//         }]
//     }, 
// {
//     name: 'japan',
//     cities: [{
//         name: 'tokyo',
//         name: 'osaka',
//         name: 'hokkaido'
//     }]
// }, ];
// $scope.countries = countries;        
    
// });
    
// });
var myApp = angular.module('myApp', []).
controller('nestedController', function ($scope) {
    var countries = [{
            name: 'viet nam',
            cities: [
                {
                name: 'ha noi'},
                {name: 'da nang'},
                {name: 'ho chi minh city'}
            ]
        },
        {
            name: 'usa',
            cities: [
                {
                name: 'new york'},
                {name: 'los angeles'},
                {name: 'washington'}
            ]
        },
        {
            name: 'japan',
            cities: [
                {
                name: 'tokyo'},
                {name: 'osaka'},
                {name: 'hokkaido'}
            ]
        }
    ];
    $scope.countries = countries;
});