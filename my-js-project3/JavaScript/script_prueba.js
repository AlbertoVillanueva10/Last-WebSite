var nombre = "Angel";

console.log(nombre);

/*var a = 1;
var b = 2;
var c = a + b;

console.log(c);

var nombre = "Beto", apellido = "Villanueva";

var complete_name = nombre + ' ' + apellido;

console.log(complete_name);


function convertidor(grados_celcius){

	var grados_F = grados_celcius * 9/5 + 32;
	return grados_F;
}

console.log(convertidor(30));

function decorar(texto){

	return "###" + texto + "###";
}

console.log(decorar("Hola"));

function decorar_mas(texto){

	var a = decorar(texto);
	return "---" + a + "---";
}

console.log(decorar_mas("Hola"));
var distancia = 'hola';

if(distancia > 100){
	console.log('Lejos');

}
else if(distancia <= 100){
	console.log("prueba else if");
}

else{
	console.log('prueba else');
}


var ejemplo_switch = 'z';

switch(ejemplo_switch){

	case 'A':
	console.log("Muy bien");
	break;

	case 'B':
	console.log('Mas o menos bien');
	break;

	case 'C':
	console.log('Muy mal');
	break;

	default:
	console.log('No se que decir');
}



function ejemplo(nombre, genero){

	if (genero == "M") {

		return "Sr" + ' ' + nombre;
	}

	else if (genero== "F") {

		return "Sra" + ' ' + nombre;
	}

	else
		return "Ingresa un resultado valido, M o F";
}


	
	var resultado = ejemplo("Alberto","x");
	console.log(resultado);
	

	var num = 1;

	while (num <= 100){
		console.log(num);

		if (num==50) {
			break;
		}
		//num = num + 1;
		num++;
	}

	for( var i=200; i<=300; i++ ){

		console.log(i);
	}
	*/

	var listado = [1,2,3,4,5];

	var listado2 = new Array(6,7,8,9,10);

	console.log(listado);
	console.log(listado2);

	var a = listado[3];
	console.log(a);

	listado.push("d", 10, 50);//add at the end of the array an element 

	console.log(listado);

	listado.pop();//remove last element 
	console.log(listado);

	listado.splice(1, 0,"a1", "a2", "a3"); /*add in the position 1 of 
	the array the following items, and without erasing anyone
*/
	console.log(listado);

	console.log(listado.length); //to know the size of an array


	var arreglo = [[1,2,3], [4,5,6], [7,8,9]];

	console.log(arreglo);


	//objects

	var obj = new Object();
	//var obj = {};

	//to write values in the propertyes
	obj.nombre = "Tu nombre";
	obj["edad"] = 99;

	console.log(obj.nombre);
	console.log(obj["nombre"]);

	console.log(obj["edad"]);
	console.log(obj.edad);


	obj.sumar = function(x,y){
		return x+y;
	}

	var a = obj.sumar(1,10);
	console.log(a);

	//JSON

	var usuario = {
		nombre : "Beto",
		edad : 26,
		pais : "México",
		mascotas : ["Blanco", "Negro", "Azul"],
		perfil : {
			tipo : "Privado",
			cuenta : "Premiun"
		}
	};

	console.log(usuario);
	console.log(usuario.edad);
	console.log(usuario.perfil.tipo);

