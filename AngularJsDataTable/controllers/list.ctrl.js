
App.controller('listCtrl', function($scope) {
	var model = [

		{id: 0,name:"Armen" ,surname: "Armenyan",email: "arm@mail.ru",age: 25,gender: 1,city:"Gyumri" ,status: 1, delete:"",edit:""},
		{id: 1,name: "Armine",surname:"Aarapetyan",email: "kar@mail.ru",age: 18,gender: 0,city: "Yerevan",status: 0, delete:"",edit:""},
		{id: 2,name:"Vlad",surname:"Mkhitaryan",email: "mkhi@mail.ru",age:26 ,gender: 1,city: "Gyumri",status: 1, delete:"",edit:""},
		{id: 3,name:"Anna", surname:"Xachatryan",email: "khach@mail.ru",age: 19, gender: 0,city: "Vanadzor",status: 0, delete:"",edit:""},
		{id: 4,name:"Karine", surname:"Mkrtryan",email: "kar@mail.ru",age: 22, gender: 0,city: "Exegnadzor",status: 1, delete:"",edit:""},
		{id: 5,name:"Karen", surname:"Ghukasyan",email: "ghuk@mail.ru",age: 30, gender: 1,city: "Dilijan",status: 1, delete:"",edit:""},
		{id: 6,name:"Vazgen", surname:"Manukyan",email: "manuk@mail.ru",age: 27, gender: 1,city: "Yerevan",status: 0, delete:"",edit:""},
		{id: 7,name:"Alla", surname:"Aleqsanyan",email: "All@mail.ru",age: 24, gender: 0,city: "Caxkazor",status: 0, delete:"",edit:""},
		{id: 8,name:"Ashot", surname:"Danielyan",email: "Danel@mail.ru",age: 35, gender: 1,city: "Moscow",status: 1, delete:"",edit:""},
		{id: 9,name:"Gayane", surname:"Serobyan",email: "Gaya@mail.ru",age: 45, gender: 0,city: "Los-Angelos",status: 0, delete:"",edit:""}
	];

	$scope.model = model;
	var regist = {id: "",name:"" ,surname: "",email: "",age:"" ,gender: "",city:"" ,status:"" , delete:"",edit:""};
	$scope.Name1 = "sfsag"
	$scope.isEditing = false;

	$scope.registration = function(){

	if($scope.isEditing){
			$scope.edit()
		}
	else{
		regist.id = $scope.model.length
		regist.name = $scope.Name;
		regist.surname = $scope.Surname;
		regist.email = $scope.Email;
		regist.age = $scope.Age;
		regist.gender = $scope.Gender;
		regist.city = $scope.City;
		regist.status = $scope.Status;
		model.push(regist);
		regist = {id: "",name:"" ,surname: "",email: "",age:"" ,gender: "",city:"" ,status:"" , delete:"",edit:""};
		$scope.Name = "";
		$scope.Surname = "";
		$scope.Email = "";
		$scope.Age  = "";
		$scope.Gender  = "";
		$scope.City  = "";
		$scope.Status  = "";
}
		

	}
	
	$scope.deleteRow = function(index){
    	model.splice(index, 1);
  	}

  	$scope.editRow = function(item,index){
  		$scope.isEditing = true;
  		$scope.id = index;
  		
		$scope.Name =item.name;
		$scope.Surname =item.surname;
		$scope.Email =item.email;
		$scope.Age =item.age;
		$scope.Gender =item.gender;
		$scope.City =item.city;
		$scope.Status =item.status;
	}
	$scope.edit = function(item){
		 for(var i = 0;i<$scope.model.length;i++){
		 		if($scope.model[i].id === $scope.id){

					$scope.model[i].name = $scope.Name;
					$scope.model[i].surname = $scope.Surname;
					$scope.model[i].email = $scope.Email;
					$scope.model[i].age = $scope.Age;
					$scope.model[i].gender = $scope.Gender;
					$scope.model[i].city = $scope.City;
					$scope.model[i].status = $scope.Status;
		 		}
		 }
	}	 
})