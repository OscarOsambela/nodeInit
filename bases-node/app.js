const {crearArchivo} = require('../organize/tabla-multiplicar');
const colors = require('colors');
console.clear();

const base = 4;
console.log('hola'.rainbow)
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
