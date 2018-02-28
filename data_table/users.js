'use strict';
var table = document.getElementById('table');
var temp = 0;

function Tablist (startNum, LastNum) {
	var users = [
	{	ID: 'ID', Name: 'Name', Lastname: 'Lastname', Age: 'Age', Gender: 'Gender', City: 'City', Status: 'Status'},
	{	ID: 1, Name: 'Eva', Lastname: 'Green', Age: 33, Gender: 0, City: 'LA', Status: 1},
	{	ID: 2, Name: 'Claudia', Lastname: 'Cardinale', Age: 88, Gender: 0, City: 'Venezia', Status: 0},
	{	ID: 3, Name: 'Bridgitt', Lastname: 'Bardo', Age: 77, Gender: 0, City: 'LA', Status: 0},
	{	ID: 4, Name: 'Gretta', Lastname: 'Garbo', Age: 99, Gender: 0, City: 'Stokholm', Status: 0},
	{	ID: 5, Name: 'Merilin', Lastname: 'Monro', Age: 55, Gender: 0, City: 'LA', Status: 0},
	{	ID: 6, Name: 'Emma', Lastname: 'Wathson', Age: 22, Gender: 0, City: 'Canbera', Status: 0},
	{	ID: 7, Name: 'Al', Lastname: 'Pacino', Age: 66, Gender: 1, City: 'LA', Status: 0},
	{	ID: 8, Name: 'Jack', Lastname: 'Nikolson', Age: 16, Gender: 1, City: 'LA', Status: 0},
	{	ID: 9, Name: 'Will', Lastname: 'Smith', Age: 44, Gender: 1, City: 'LA', Status: 0},
	{	ID: 10, Name: 'Qwentin', Lastname: 'Tarantino', Age: 33, Gender: 1, City: 'Moon', Status: 1}
];
	var inputNum = document.getElementById('inputNum');
	users.length = (+inputNum.value+1);
	console.log(users.length);

	table.innerHTML = '';

	for (var i = 0; i < users.length; i++) {
	   var tr = document.createElement('tr');

	 	for (var key in users[i]) {
	 		var td = document.createElement('td');
	 		tr.appendChild(td);
	 		if(i==0) {
	 			td.innerHTML = '<span style="font-weight: bold">' + users[i][key] + '</span>';
	 		} else {
	 		td.innerHTML = users[i][key];	
	 		}
	 		if (users[i]['Status'] === 1 ) {
	 			users[i]['Status'] = '<span style="color: lightgreen">online</span>';
	 			// console.log(users[i]['Status']);
	 		} else if(users[i]['Status'] === 0){
	 		 	users[i]['Status'] = '<span style="color: red">offline</span>';
	 		}
	 		if (users[i]['Gender'] === 1 ) {
	 			users[i]['Gender'] = '<i class="fa fa-mars"></i>';
	 			// console.log(users[i]['Gender']);
	 		} else if(users[i]['Gender'] === 0){
	 		 	users[i]['Gender'] = '<i class="fa fa-venus"></i>';
	 		}	 		
	 	}
	 	if(i<4) {
	 		table.appendChild(tr);
	 	} else {
	 		var a = goNextPage;
	 	}
	 	// var pagebtn = document.getElementsByClassName('pagebtn');
	 	// pagebtn.innerHTML = 
	 } 
	 var pagebtn = document.getElementsByClassName('pagebtn');
	  // pagebtn[0].setAttribute('style', 'display: inline; margin-left: 60px;');
	  pagebtn[1].setAttribute('style', 'display: inline; margin-left: 60px;');
	 // console.log( pagebtn );
	// var goNextPage = function () {
	// users.length.
	// } 
}



// var big = {
	
// 	small: {
// 		getR: function () {
			
// 		}
// 	}
// }