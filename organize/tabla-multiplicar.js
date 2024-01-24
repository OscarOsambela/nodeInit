const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 3) =>{

    try {
        console.log('======================='.green);
        console.log( 'Tabla del:'.magenta, colors.strip(base));
        console.log('======================='.green);

        let salida = '';
        for (let index = 1; index <= 10; issndex++) {
            salida += `${base} ${'x'.red} ${index} ${'='.red} ${base * index}\n`;    
            ss
        }

        console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(colors.zebra(`tabla-${base}.txt creado.`));    
    } catch (error) {
        throw error;    
    }
    
}

module.exports = {
    crearArchivo
}