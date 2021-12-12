var express = require('express');
var router = express.Router();
var disponiblesor = require('../models/ordenesDis');
var mongoose = require('mongoose');

//Obtener ordenes
router.get('/:estadoOrden',function (req, res){
    disponiblesor.find({estadoOrden: req.params.estadoOrden},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//Obtener  ordenes especificas de un usuario de un usuario
router.get('/:idUsuario/:estadoOrden',function (req, res){
    disponiblesor.find({
        idUsuario:req.params.idUsuario,
        estadoOrden: req.params.estadoOrden
        
    },{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
//Actualizar estado de la orden
router.put("/:idOrden", (req, res) => {
	disponiblesor.updateOne(
			{
				_id: mongoose.Types.ObjectId(req.params.idOrden),
			},
			{
				$set: {
					"estadoOrden": req.body.estadoOrden,
                    "idUsuario": req.body.idUsuario
				},
			}
		)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
			res.send(error);
			res.end();
		});
});

//Obtener el detalle de una orden
router.get('/:idOrden',function (req, res){
    disponiblesor.find(
        {
            _id: mongoose.Types.ObjectId(req.params.idOrden)
        },
        {
            detalleEstado:true
        })
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
//Actualizar el usuario a la orden
router.put("/:idOrden/orden", (req, res) => {
	disponiblesor.updateOne(
			{
				_id: mongoose.Types.ObjectId(req.params.idOrden),
			},
			{
				$set: {
					"idUsuario": req.body.idUsuario
				},
			}
		)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
			res.send(error);
			res.end();
		});
});


/*

//Obtener playlist y sus canciones
//http://localhost/usuarios/123/playlist/3
router.get('/:idOrdendis/estadorden/:idEstadoOrden',function (req, res){
    disponiblesor.find(
        {
            _id: req.params.idOrdendis,
            "estadoOrden._id" : mongoose.Types.ObjectId(req.params.idEstadoOrden)
        },
        {"estadoOrden.$":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

*/


//Obtener el estado orden de una horden
//http://localhost/usuarios/123/playlists
router.get('/:idOrdenesdis/estadoOrden',function (req, res){
    disponiblesor.find(
        {
            _id: req.params.idOrdenesdis
        },
        {"estadoOrden":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
//Obtener el detalle del estado de una horden
//http://localhost/usuarios/123/playlists
router.get('/:idOrdenesdis/detalleEstado',function (req, res){
    disponiblesor.find(
        {
            _id: req.params.idOrdenesdis
        },
        {"detalleEstado":true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});
/*
//Guardar cancion en playlist
router.post('/:idUsuario/playlists/:idPlaylist/canciones', function (req, res){
    usuario.update(
        {
            _id:mongoose.Types.ObjectId(req.params.idUsuario),
            "playlists._id":mongoose.Types.ObjectId(req.params.idPlaylist)
        },
        {
            $push:{
                "playlists.$.canciones":{
                    nombreCancion:req.body.nombreCancion,
                    artista:req.body.artista,
                    album:req.body.album
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


//Crear un nuevo playlist
router.post('/:idUsuario/playlists', function (req, res){
    usuario.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idUsuario) 
        },
        {
            $push:{
                playlists:{
                    _id: mongoose.Types.ObjectId(),
                    tituloPlaylist: req.body.tituloPlaylist,
                    canciones: []
                }
            }
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
    
});*/


module.exports = router;
