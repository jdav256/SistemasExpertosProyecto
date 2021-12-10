const { json } = require('body-parser');
const { Mixed } = require('mongoose');
var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        usuario: String,
        contrasena: String ,
        ordenesTomadasNoEntregadas:Array,
        ordenesEntregadas: Array
    }
);

module.exports = mongoose.model('usuarios', esquema);