var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var producto = require('../modelos/producto');



//todos los productos existentes
//http://localhost:8888/productos/
router.get('/',function(req, res) {
    producto.find()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    
});

//todos los productos de una tienda
//http://localhost:8888/productos/:idTienda
router.get('/:idTienda',function(req, res) {
    producto.find({"idTienda":mongoose.Types.ObjectId(req.params.idTienda)})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    }); 
});

//todos los productos de una tienda de una categoria
//http://localhost:8888/productos/:idTienda/:categoria

router.get('/:idTienda/:categoria',function(req, res) {
    producto.find(
        {"idTienda":mongoose.Types.ObjectId(req.params.idTienda),
         "categoria":req.params.categoria})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    }); 
});


module.exports = router;
