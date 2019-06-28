var myApp = angular.module('myModule', []);

myApp.controller('myController', myController);

function myController($scope) {
    $scope.message = "Angular JS Application";
    
}

myApp.controller('sumCalculator',function ($scope) {
 $scope.sum=0;

 $scope.cal= function () {
       var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
       var newValueA = parseInt(a);
       var newValueB = parseInt(b);
       console.log(newValueA,typeof(newValueA), newValueB, typeof(newValueB));
        $scope.sum = newValueA + newValueB;
    }
});

myApp.controller('inputTextBox', function ($scope) {
    var employee = {
        firstName : 'taan',
        lastName : 'dao',
        age : 21
    };
    $scope.emp = employee;
});



myApp.controller('anotherController', function ($scope) {
    
}).directive('loginForm', function () {
    // var html = "<h1>welcome to taan page</h1>";

    return {
        templateUrl: "/login.html"
    }
    
});