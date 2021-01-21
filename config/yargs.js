const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'
}

const argv = require("yargs")
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar estado completado de la tarea', { descripcion, completado })
    .command('borrar', 'Borrar la tarea', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}