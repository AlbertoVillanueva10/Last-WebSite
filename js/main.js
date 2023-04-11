//$(function(){alert("Hola a todos");});

//Variables

var nav = document.getElementById('nav');
var menu = document.getElementById('enlaces');
var abrir = document.getElementById('open');
var botones = document.getElementsByClassName('btn-header');
var cerrado = true;

function menus(){

	var Desplazamiento_Actual = window.pageYOffset;

	if (Desplazamiento_Actual <= 300) {
		nav.classList.remove('nav2');
		nav.className = ('nav1');
		nav.style.transition = '1s';
		menu.style.top = '80px';
		abrir.style.color = '#fff';
	}
	else
	{
		nav.classList.remove('nav1');
		nav.className = ('nav2');
		nav.style.transition = '1s';
		menu.style.top = '100px';
		abrir.style.color = '#000';
	}

}

function apertura(){

	if(cerrado == true)
	{
		menu.style.width = '70vw';
		cerrado = false;
	}
	else
	{
		menu.style.width = '0%';
		menu.style.overflow = 'hidden';
		cerrado = true;
	}
}

window.addEventListener('load', function(){
	$('#onload').fadeOut();
	$('body').removeClass('hidden');
	menus();
	console.log(window.pageYOffset);
});

window.addEventListener('click', function(e){/*funcion para identificar cuando estes dando click
	fuera de la caja de enlaces y la cierre*/
	console.log(e.target);
	if(cerrado == false){
		var span = document.querySelector('span');
		if(e.target !== span && e.target !== abrir){
			menu.style.width = "0%";
			menu.style.overflow = 'hidden';
			cerrado = true;
		}
	}
});
window.addEventListener('scroll', function(){
	console.log(window.pageYOffset); //te imprime valores en consola
	menus();
});

window.addEventListener('resize', function(){/*cuando la pantalla sea mas grande de 700px
esconde los enlaces*/
	if(screen.width >= 700){
		cerrado = true;
		menu.style.removeProperty('overflow');
		menu.style.removeProperty('width');

	}
});

abrir.addEventListener('click', function(){
	apertura();
});