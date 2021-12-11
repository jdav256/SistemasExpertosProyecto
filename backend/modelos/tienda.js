const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombre:String,
    categoria:String,
    urlLogo:String,
    ubiaciones:Array,
    usuarioID:mongoose.Types.ObjectId,
    productosPromo:Array,
    calificaciones:Array,
    categoriasProductos:Array
});

module.exports = mongoose.model('tiendas', schema);