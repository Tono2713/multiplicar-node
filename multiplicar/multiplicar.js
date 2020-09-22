//Requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
	console.log('=============================='.red);
	console.log(`=========Tabla de ${base} ==========`.green);
	console.log('=============================='.red);
	for(let i=1; i<=limite; i++){
		console.log(`${base} * ${i} = ${base*i}`.rainbow);
	}
}


let crearArchivo = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		if(!Number(base)){
			reject(`el valor introducido ${base}, no es un número`);
			return;
		}
		let datos = '';

		for(let i=1; i<=limite; i++){
			datos += `${base} * ${i} = ${base*i}\n`;
		}

// const data = new Uint8Array(Buffer.from('Hola mundo'));

		fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
			if (err) 
				reject(err)
				else
					resolve(`tabla-${base}.txt`);
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}
