//const os = require('os) de esto (CommunModules) a esto ;
import { platform, release, arch, cpus, freemem, totalmem } from 'os'

console.log('información del sistema operativo')
console.log('---------------------------------')
console.log('nombre del sistema operativo', platform())
console.log('versión del sistema operativo', release())
console.log('arquitectura', arch())
console.log('CPU´s', cpus())
console.log('memoria libre', freemem() / 1024 / 1024)
console.log('memoria local', totalmem()) / 1024 / 1024
