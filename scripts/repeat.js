
var myApp = angular.module('myModule', []);
myApp.controller('repeatController', function ($scope) {
    var employees = [{
        name: 'taan',
        gender: 'male',
        salary: 2800
    },
{
    name: 'viet',
    gender: 'male',
    salary: 2800
}, 
{
    name: 'tung',
    gender: 'male',
    salary: 2800
}, 
{
    name: 'linh',
    gender: 'male',
    salary: 2800
}, 
{
    name: 'dat',
    gender: 'male',
    salary: 2800
}];
$scope.employees = employees;
});