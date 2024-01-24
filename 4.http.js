const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request received', req);
    res.end('response')
})

server.listen(0, ()=>{
    console.log(`listening on port ${server.address().port}`)
    //cuando un puerto esta en uso, arrojara un error
    //para ello se puede asignar el puerto 0, de esta manera al ejecutarse se asignara auto un puerto que este desocupado
    //no es recomendable en produccion, solo en modulo desarrollo
})
