App.controller('dataTable', function($scope) {
	$scope.data =[
        {
            id:0,
            name:"George",
            lastname:"Washington",
            email:"george@washington.com",
            age:286,
            gender:1,
            city:"Westmoreland County",
            status:false,
        },
        {
            id:1,
            name:"George ",
            lastname:"Bush",
            email:"george@bush.com",
            age:72,
            gender:0,
            city:"New Haven",
            status:true,
        },
        {
            id:2,
            name:"Donald",
            lastname:"Trump",
            email:"donald@trump.com",
            age:72,
            gender:1,
            city:"New York",
            status:true,
        },
        {
            id:3,
            name:"Barack",
            lastname:"Obama",
            email:"barack@obama.com",
            age:57,
            gender:1,
            city:"Honolulu",
            status:true,
        },
        {
            id:4,
            name:"Abraham",
            lastname:"Lincoln",
            email:"abraham@lincoln.com",
            age:209,
            gender:1,
            city:" Hodgenville",
            status:false,
        },
        {
            id:5,
            name:"Bill",
            lastname:"Clinton",
            email:"bill@clinton.com",
            age:72,
            gender:1,
            city:" Hope",
            status:true,
        },
        {
            id:6,
            name:"Franklin",
            lastname:"Roosevelt",
            email:"franklin@roosevelt.com",
            age:136,
            gender:1,
            city:" New York",
            status:false,
        },
        {
            id:7,
            name:"Jimmy",
            lastname:"Carter",
            email:"jimmy@carter.com",
            age:94,
            gender:1,
            city:"Plains",
            status:true,
        },
        {
            id:8,
            name:"Richard",
            lastname:"Nixon",
            email:"richard@nixon.com",
            age:105,
            gender:1,
            city:"Yorba Linda",
            status:false,
        },
    ];
    $scope.name = $scope.lastname = $scope.age = $scope.email = $scope.city ='';
    $scope.status = $scope.gender =  true;



    $scope.onAdd = function () {
        $scope.isEditing = false;
        $scope.data.push({
            name : $scope.name,
            lastname:$scope.lastname,
            email : $scope.email,
            city : $scope.city,
            age: $scope.age,
            status:$scope.status,
            gender : $scope.gender ? 1 : 0
        });
        $scope.name = $scope.lastname = $scope.age = $scope.email = $scope.city ='';
        $scope.status = $scope.gender =  true;
    };

    $scope.onRemove = id => $scope.data = $scope.data.filter(person => person.id !== id);

    $scope.onEdit = id => {
        $scope.isEditing = true;
        $('#person').modal();
        $scope.id = id;
        let current;
        for(let i = 0; i<$scope.data.length;i++){
            if($scope.data[i].id === id){
                current = $scope.data[i];
            }
        }
        $scope.name = current.name;
        $scope.lastname = current.lastname;
        $scope.age = current.age;
        $scope.email = current.email;
        $scope.city = current.city;
        $scope.status = current.status;
        $scope.gender = !!current.gender
    };

    $('#person').on('hidden.bs.modal', function () {
        $scope.isEditing = false;
        $scope.name = $scope.lastname = $scope.age = $scope.email = $scope.city = '';
        $scope.status = $scope.gender =  true;
    });

    $scope.onSave = function () {
        for(let i=0;i<$scope.data.length;i++){
            if($scope.data[i].id === $scope.id){
                $scope.data[i].name = $scope.name;
                $scope.data[i].lastname = $scope.lastname;
                $scope.data[i].age =  $scope.age;
                $scope.data[i].city =  $scope.city;
                $scope.data[i].email =  $scope.email;
                $scope.data[i].gender = $scope.gender ? 1 : 0 ;
                $scope.data[i].status = $scope.status;
                break;
            }
        }
    }
    

});

