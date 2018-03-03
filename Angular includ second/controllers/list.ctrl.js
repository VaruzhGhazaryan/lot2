App.controller('listCtrl', function($scope) {

		$scope.car = 'Mercedes-Benz.html' ;
    $scope.inc = function (val) {
        $scope.car = val+".html";
    }

})
