const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    correo: String,
    password: String,
    tipoUsuario: Number, //Usuario: 0, Empresa: 1, Administrador: 2
    ubicacion: Array, //{pais: '', departamento: '', ciudad: ''}
    medioPago: Array, //[{_id: '', tipoPago: 'number', datos: 'JSON', tituloMedio: 'String', _idUsuario: ''}]
    estado: String,
    favoritos:Array, 
    carrito: Array
});

module.exports = mongoose.model('usuarios', schema);