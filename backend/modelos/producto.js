const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombreProducto:String,
    idTienda:mongoose.Types.ObjectId,
    precio:String,
    detalle:String,
    opciones:Array,
    tamano:String,
    disponible:Number,
    vendidos:Number,
    urlImagen:String,
    categoria:String
});

module.exports = mongoose.model('productos', schema);