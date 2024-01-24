const fs = require('fs');

const stats = fs.statSync('./readme.txt');
// const text = fs.readFileSync('./readme.txt', 'utf-8'); metodo sincrono
const text = fs.readFile('./readme.txt', 'utf-8', (err, text)=>{
    console.log(text);
})

console.log(
    stats.size,
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
);

console.log(text);