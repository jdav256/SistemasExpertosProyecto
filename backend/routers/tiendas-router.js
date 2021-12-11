var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var tienda = require('../modelos/tienda');

router.get('/',function(req, res) {
    tienda.find()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });    
});

router.get('/:categoria',function(req, res) {
    tienda.find({"categoria":req.params.categoria})
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
