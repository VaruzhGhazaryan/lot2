document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault();

})

var arr = [{
    id: 0,
    name: "Anjela",
    last_name: "Orujyan",
    email: "anjela.orujyan.96@mail.ru",
    age: 21,
    gender: 0,
    city: "Gyumri",
    status: true,

},
    {
        id: 1,
        name: "Axavni",
        last_name: "Karapetyan",
        email: "axavni.123@mail.ru",
        age: 29,
        gender: 0,
        city: "Vanadzor",
        status: true,
    },
    {
        id: 2,
        name: "Ani",
        last_name: "Meliqyan",
        email: "ani.93@mail.ru",
        age: 18,
        gender: 0,
        city: "Gyumri",
        status: false,
    },
    {
        id: 3,
        name: "Aram",
        last_name: "Galstyan",
        email: "aram.Galstyan@mail.ru",
        age: 35,
        gender: 1,
        city: "Erevan",
        status: true,
    },
    {
        id: 4,
        name: "Anjela",
        last_name: "Galstyan",
        email: "anglangl234@mail.ru",
        age: 21,
        gender: 0,
        city: "Ashtarak",
        status: false,
    },
    {
        id: 5,
        name: "Andranik",
        last_name: "Karaxanyan",
        email: "karaxanyan7777@mail.ru",
        age: 29,
        gender: 1,
        city: "Gyumri",
        status: true
    },
    {
        id: 6,
        name: "Anita",
        last_name: "Haroyan",
        email: "anitaharoyan@mail.ru",
        age: 18,
        gender: 0,
        city: "Erevan",
        status: false
    },
    {
        id: 7,
        name: "Stepan",
        last_name: "Saroyan",
        email: "Saroyan@mail.ru",
        age: 55,
        gender: 1,
        city: "Gyumri",
        status: true
    },
    {
        id: 8,
        name: "Ani",
        last_name: "Mesropyan",
        email: "ani789@mail.ru",
        age: 15,
        gender: 0,
        city: "Gyumri",
        status: false
    },
    {
        id: 9,
        name: "Ashot",
        last_name: "Galstyan",
        email: "ashot.galstyan@mail.ru",
        age: 35,
        gender: 1,
        city: "Armavir",
        status: true
    },
    {
        id: 10,
        name: "Astxik",
        last_name: "Orujyan",
        email: "orujyan111222@mail.ru",
        age: 35,
        gender: 0,
        city: "Gyumri",
        status: false
    },
    {
        id: 11,
        name: "Artak",
        last_name: "Karapetyan",
        email: "artak000@mail.ru",
        age: 45,
        gender: 1,
        city: "Erevan",
        status: true
    },
    {
        id: 12,
        name: "Ani",
        last_name: "Vardanyan",
        email: "ani.99@mail.ru",
        age: 18,
        gender: 0,
        city: "Gyumri",
        status: false
    },
    {
        id: 13,
        name: "Ashot",
        last_name: "Galstyan",
        email: "ashot.galstyan@mail.ru",
        age: 35,
        gender: 1,
        city: "Armavir",
        status: true
    },
    {
        id: 14,
        name: "Astxik",
        last_name: "Orujyan",
        email: "orujyan111222@mail.ru",
        age: 35,
        gender: 0,
        city: "Gyumri",
        status: false
    },
    {
        id: 15,
        name: "Artak",
        last_name: "Karapetyan",
        email: "artak000@mail.ru",
        age: 45,
        gender: 1,
        city: "Erevan",
        status: true
    },
    {
        id: 16,
        name: "Ani",
        last_name: "Vardanyan",
        email: "ani.99@mail.ru",
        age: 18,
        gender: 0,
        city: "Gyumri",
        status: false
    },
];

for(i = 0; i < arr.length; ++i){
    arr[i].delete = "del";
}
function del(row){
    var d = row.parentNode.parentNode.rowIndex;
    document.getElementById("tbl").deleteRow(d)

}
document.getElementById("input_entires").max = arr.length;
document.getElementById("note").innerHTML = "<sub>There are only " + arr.length + " entires!</sub>";

var entire = document.getElementById("input_entires").value;
var startValue = 0;
var endValue = +entire;
var countObj= 0;
function getCountUsers() {
    var countObj= 0;
    for(key in arr){
        countObj++;
    }
    return countObj;
}

function printUsers() {
    console.log(arr);
    var str = "";

    document.getElementById("tbody").innerHTML = str;
    for (var i = startValue; i < endValue; ++i) {
        if (arr[i]) {
            str += "<tr class='border'>";
            for (var key in  arr[i]) {
                if (key === "id") {
                    str += "<th scope='row' class='border item_style'>" + (parseInt(arr[i][key]) + 1) + "</th>";
                } else {
                    if (key === "gender") {
                        if (arr[i][key] === 1) {
                            str += "<td class='border item_style'><i class='fa fa-mars' style='font-size:50px'></i></td>";
                        } else {
                            str += "<td class='border item_style'><i class='fa fa-venus' style='font-size:50px'></i></td>";
                        }
                    } else if (key === "status") {
                        if (arr[i][key] === true) {
                            str += "<td class='border item_style online_color'>Online<image src='image/online-icon.png' width='50' heigth='50'></image></td>";
                        } else {
                            str += "<td class='border item_style offline_color'>Offline<image src='image/offline-icon.png' width='50' heigth='50'></td>";
                        }
                    } else if(key === "delete"){
                        str += "<td class='border item_style'><button onclick='del(this)'><i class='fa fa-ban'></i></button></td>";
                    } else
                        str += "<td class='border item_style'>" + arr[i][key] + "</td>";
                }
            }
            str += "</tr>";
        }
        document.getElementById("tbody").innerHTML = str;
    }

}

printUsers();
document.getElementById("prevBtn").disabled = true;

function nextPage() {
    if (document.getElementById("prevBtn").disabled === true) {
        document.getElementById("prevBtn").disabled = false;
    }
    if (endValue === arr.length) {
        document.getElementById("nextBtn").disabled = true;
        return;
    }
    startValue += +entire;
    endValue += +entire;
    if (endValue < arr.length) printUsers(); else {
        printUsers();
        document.getElementById("nextBtn").disabled = true;
    }
}

function prevPage() {
    if (document.getElementById("nextBtn").disabled === true) {
        document.getElementById("nextBtn").disabled = false;
    }
    startValue -= +entire;
    endValue -= +entire;
    if (startValue > 1) printUsers(); else {
        printUsers();
        document.getElementById("prevBtn").disabled = true;
    }
}

function update() {

    entire = document.getElementById("input_entires").value;

    if (entire < 1 || entire === "e") {
        document.getElementById("input_entires").value = "";
        return false;
    }

    startValue = 0;
    endValue = +entire;
    document.getElementById("prevBtn").disabled = true;

    if (endValue >= arr.length) {
        document.getElementById("nextBtn").disabled = true;
    } else {
        document.getElementById("nextBtn").disabled = false;
    }
    printUsers();
}

$(document).ready(function () {
    $("#myBtn").click(function () {
        $("#myModal").modal();
        id.value = getCountUsers();
    });
});


addBtn.addEventListener("click", function(){

    var newUser = {
        id: id.value,
        name: usrname.value,
        last_name: lname.value,
        email: email.value,
        age: age.value,
        gender: 0,
        city: city.value,
        status: st.value,
        delete:del,

    };

    arr.push(newUser);
    console.log(arr);
    console.log("******************");

    printUsers();
})

//console.log(arr);





