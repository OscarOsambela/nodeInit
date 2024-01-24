const path = require('path');

console.log(path.sep); //conocer el tipo de barra a usar para la ruta de archivos

const filePath = path.join('content','sufolder', 'text.txt'); //unir path auto 
console.log(filePath);

const base = path.basename('/tmp/files/text.txt'); //obtener el nombre del file 
console.log(base);

const fileName = path.basename('/tmp/files/text.txt', '.txt'); //obtener el nombre del file sin la extension
console.log(fileName);

const extension = path.extname('text.jpg'); //obtener el nombre del file sin la extension
console.log(extension);