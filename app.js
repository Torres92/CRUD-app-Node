//const argv =  require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors'); 


const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];


switch (comando) {

	case 'crear':
		let tarea = porHacer.crear( argv.descripcion, argv.direccion, argv.hora);
		console.log(tarea);
	break;

	case 'listar':
		
		let listado = porHacer.getListado();

		for ( let servicios of listado ) {
			console.log('==========Por Hacer======='.green);
			console.log(servicios.descripcion);
			console.log('Direccion de entrega:', servicios.direccion);
			console.log('Hora de entrega:', servicios.hora);
			console.log('Entregado:', servicios.entregado );
			console.log('=========================='.green);
		}

	break;

	case 'actualizar':
		let actualizado = porHacer.actualizar(argv.nro, argv.entregado);
		console.log(actualizado);
	break;

	case 'borrar':
	let borrado = porHacer.borrar( argv.nro );
	console.log(borrado); 
	break;

	default: 
		console.log('comando no es conocido');	

}