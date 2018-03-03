
App.controller('listCtrl', function($scope) {
	    $scope.cars = [
			{name: 'Mercedes-Benz',url: 'Mercedes-Benz.html'},
			{name: 'BMW',url: 'BMW.html'},
			{name: 'Audi',url: 'Audi.html'}
	    ];
    $scope.Mycar = $scope.cars[0];

})