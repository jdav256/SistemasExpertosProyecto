const { json } = require('body-parser');
const { Mixed } = require('mongoose');
var mongoose = require('mongoose');

var esquema = new mongoose.Schema(
    {
        numeroDeOrden: String,
        direccion: String,
        cantidadProductos: String,
        total: Number ,
        estadoOrden: String,
        idUsuario:String,
        detalleEstado: Array

    }
);

module.exports = mongoose.model('disponibles', esquema);