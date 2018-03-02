console.log('list ctrl', App);
var icon = '<i class="fa fa-trash-o fa-lg"></i>';
App.controller('listCtrl', function($scope) {
	console.log($scope);
	var model = [
		{name:"Narek", surname: "Melkonyan", age:28, 'E-mail': "nar6@gmail.com", city: "Gyumri", gender: "Male", status: "Online"},
		{name:"Lilya", surname: "Melkonyan", age:24, 'E-mail': "lilya606@gmail.com", city: "Gyumri", gender: "Female", status: "Online"},
		{name:"Davit", surname: "Manukyan", age:22, 'E-mail': "dav22@gmail.com", city: "Gyumri", gender: "Male", status: "Offline"},
		{name:"Mane", surname: "Avagyan", age:18, 'E-mail': "mane11@gmail.com", city: "Yerevan", gender: "Female", status: "Offline"},
		{name:"Alex", surname: "Kirakosyan", age:25, 'E-mail': "alex@gmail.com", city: "Gyumri", gender: "Male", status: "Online"},
		{name:"Rob", surname: "Hakobyan", age:21, 'E-mail': "robh@gmail.com", city: "Gyumri", gender: "Male", status: "Online"},
		{name:"Nata", surname: "Mkrtchyan", age:20, 'E-mail': "nata@gmail.com", city: "Gyumri", gender: "Female", status: "Offline"},
		{name:"Eva", surname: "Xlxatyan", age:22, 'E-mail': "e_va.@gmail.com", city: "Gyumri", gender: "Female", status: "Online"},
		{name:"Lina", surname: "Meloyan", age:26, 'E-mail': "l.meloyan@gmail.com", city: "Gyumri", gender: "Female", status: "Offline"},
		{name:"Aram", surname: "Davtyan", age:25, 'E-mail': "davtyab@gmail.com", city: "Gyumri", gender: "Male", status: "Online"}
	];

	$scope.model = model;

	$scope.removeRow = function(a) {
        if(confirm("Are you sure ?")){
        	$scope.model.splice(a,1);
        }
    };

    $scope.addRow = function(){
    	$scope.model.push({ 'name':$scope.name, 'surname': $scope.surname, 'age':$scope.age, 'E-mail':$scope.mail, 'city':$scope.city, 'gender':$scope.gender, 'status':$scope.status });
		$scope.name='';
		$scope.surname='';
		$scope.age='';
		$scope.mail='';
		$scope.city='';
		$scope.gender='';
		$scope.status='';

    }

})