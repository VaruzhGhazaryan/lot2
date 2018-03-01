console.log('list ctrl', App);

App.controller('listCtrl', function($scope) {
	var model = [

		'learn Javascript',
		'learn html,css',
		'learn Angularjs'
	];

	$scope.model = model;


})