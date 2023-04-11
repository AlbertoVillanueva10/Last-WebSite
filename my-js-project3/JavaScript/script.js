var users = [
	{
		name: 'Lucy',
		gender: 'F',
		hobby: 'pets' ,
		avatar: 'avatar1.png'
	},
	{
		name: 'Betty',
		gender: 'F',
		hobby: 'pets' ,
		avatar: 'avatar2.png'
	},
	{
		name: 'Ronald',
		gender: 'M',
		hobby: 'music' ,
		avatar: 'avatar3.png'
	},
	{
		name: 'Christopher',
		gender: 'M',
		hobby: 'sports' ,
		avatar: 'avatar4.png'
	},
	{
		name: 'Ximena',
		gender: 'F',
		hobby: 'pets' ,
		avatar: 'avatar5.png'
	},
	{
		name: 'Paul',
		gender: 'M',
		hobby: 'shopping' ,
		avatar: 'avatar6.png'
	},
	{
		name: 'Charlie',
		gender: 'M',
		hobby: 'pets' ,
		avatar: 'avatar7.png'
	},

];



window.addEventListener('load', function() {
	//console.log("se ha cargado satisfactoriamente la pagina");

	function search() {
	
		//get hobby
		var hobbyField = document.getElementById("hobby");
		var hobby = hobbyField.value;
		console.log(hobby);

		//get gender
		var genderField = document.getElementById("gender");
		var selected = genderField.selectedIndex;
		var gender = genderField.options[selected].value;
		console.log(gender);

		var resultsHTML  = '';
		var numUsers = users.length;

		console.log(numUsers);

		for(var i = 0; i < numUsers; i++){

			if (gender == 'A' || gender == users[i].gender) {
				alert('No se encontro registro');
				if(hobby == '' || hobby == users[i].hobby){

					resultsHTML += '<div class="person">\
										<div class="person-img">\
											<img src="images/' + users[i].avatar + '" />\
										</div>\
										<div class="person-info">\
											<div> ' + users[i].name +'</div>\
											<div> ' + users[i].hobby + '</div>\
										</div>\
										<div class="person-button">\
											<button id="add-as-friend">Add as friend</button>\
										</div>\
									</div>' ;
				}

			}

		}

		results.innerHTML = resultsHTML;

	};


	var results = document.getElementById("results");
	var search_Btn = document.getElementById("search_Btn");
	search_Btn.addEventListener("click", search);
});