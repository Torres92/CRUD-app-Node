const fs = require ('fs');

let listadoPorHacer = [];

const guardarDB = () => {
//guardar la data
	let data = JSON.stringify(listadoPorHacer);
//grabo la data en 
	fs.writeFile('db/data.json', data, (err)=>{
		if (err) throw new Error('No se pudo grabar', err)
	});
}

const cargarDB = () => {
//valido base de dato para trabajar el error
	try {

		listadoPorHacer = require('../db/data.json');
	
	}catch(error) 
	{
		listadoPorHacer = [];
	}
}

const crear = (descripcion, direccion, hora) => {


// cargo la base de datos para que crear agregue algo nuevo
	cargarDB();
	
	if (listadoPorHacer.length === 0) {
		var nro = 1;
	}else {
		var nro = listadoPorHacer.length +1;
	}

	let porHacer = {
		nro: nro,
		descripcion,
		direccion,
		hora,
		entregado: false
	};

	listadoPorHacer.push(porHacer);

	guardarDB();

	return porHacer;
}

const getListado = () => {
//// CARGO BASE DE DATOS
	cargarDB();
//// retorno el listado por hacer 
	return listadoPorHacer;
}

const actualizar = (nro,entregado=true) => {

	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => tarea.nro === nro);

	if(index >= 0){
		listadoPorHacer[index].entregado = entregado;
		guardarDB();
		return true;
	} else {
		return false;
	}

}

const borrar = (nro) => {
	
	cargarDB();

	let nuevoListado = listadoPorHacer.filter( tarea => return tarea.nro !== nro);

	if(	listadoPorHacer.length === nuevoListado.length	) {
		return false
	}else {
		listadoPorHacer = nuevoListado;
		guardarDB();
		return true;
	}

}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar 
}