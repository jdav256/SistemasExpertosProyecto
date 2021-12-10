var express = require('express');
var router = express.Router();
var ordenNoEntregada = require('../models/ordenesNoEntregadas');  
var mongoose = require('mongoose');

//Obtener usuarios
router.get('/',function (req, res){
    ordenNoEntregada.find({_id: true})
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