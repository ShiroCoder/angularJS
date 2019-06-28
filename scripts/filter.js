(function () {
    var app = angular.module('app', []);
    app.controller('filterCtrl', filterCtrl);
    filterCtrl.$inject = ['$scope'];
    function filterCtrl($scope) {
        var employees = [
            {name: 'taan', dob: new Date('12/23/1997'), salary: 3000, gender: 'male', status: true },
            {name: 'tung', dob: new Date('2/9/1998'), salary: 2000, gender: 'male', status: false },
            {name: 'viet', dob: new Date('3/12/1995'), salary: 1000, gender: 'male', status: false },
            {name: 'linh', dob: new Date('9/17/1996'), salary: 4000, gender: 'male', status: false },
            {name: 'dat', dob: new Date('12/28/1999'), salary: 5000, gender: 'female', status: true },
            {name: 'tu', dob: new Date('12/7/1992'), salary: 7000, gender: 'female', status: true },
        ];
        $scope.employees = employees;
        $scope.sortColumn = 'name';
    }

    app.filter('status', function () {
        return function (input) {
            if(input === true)
                return 'Kich hoa';
            else
                return 'Khoa';
        };
    });
  
})()