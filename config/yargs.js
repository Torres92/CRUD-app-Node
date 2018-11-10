const descripcion = {
			demand: true,
			alias: 'd',
			desc: 'Descripcion de la tarea por hacer'
}

const nro= {
		alias: 'n',
		desc: 'Nro de posicion del pedido'
}

const entregado	= {
		alias: 'c',
		default: true,
		desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')//creo el servicio
	.command('crear', 'Crear un elemento por hacer', {
		descripcion,
		direccion: {
			demand: true,
			alias: 'a',
			desc: 'direccion de entrega'
		},
		hora: {
			demand: true,
			alias: 'h',
			desc: 'hora de recogo'
		}

	})//actualizo estado de servicio de "en proceso" a "entregado"
	.command('actualizar', 'Actualiza el estado completado de una tarea', {
		nro,
		entregado
	})
	.command('borrar', 'Borra un elemento completado o añadido por error',{
			nro
	})
	.help()
	.argv

module.exports = {
	argv
}
