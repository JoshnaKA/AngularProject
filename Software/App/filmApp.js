var filmApp = angular.module('filmApp',[]).controller('myCtrl', function($scope){ 
$scope.record = [
        {Date: '2017-10-01', Adrequest: 10},
        {Date: '2017-10-09', Adrequest: 09},
        {Date: '2017-10-10', Adrequest: 10},
        {Date: '2017-10-11', Adrequest: 20},
        {Date: '2017-10-12', Adrequest: 17},
        {Date: '2017-10-13', Adrequest: 18},
        {Date: '2017-10-14', Adrequest: 20},
        {Date: '2017-10-15', Adrequest: 25},
        {Date: '2017-10-17', Adrequest: 18},
        {Date: '2017-10-18', Adrequest: 20},
        {Date: '2017-10-19', Adrequest: 25}
    ];
    }).filter('dateChange', function() {
    return function (record, from, to) {
        return record.filter(function (record) {
            return record.Date >=from && record.Date < to;
        });
    } 

})



