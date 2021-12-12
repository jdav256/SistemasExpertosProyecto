var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');  
var mongoose = require('mongoose');

//Obtener usuarios
router.get('/',function (req, res){
    usuario.find({})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//obtener un usuario seleccionado
router.post('/login',async (req, res)=>{
    const _usuario = req.body.usuario;
    const contrasena = req.body.contrasena;
    const user = await usuario.findOne({ 'usuario': _usuario })
    if (user == null) {
        return res.status(401).json({ "message": "correo electronico invalido" });
    }else{
        if(user.contrasena == contrasena){
            return res.status(200).json(user);
        }else{
            return res.status(401).json({ "message": 'Contraseña invalida' });
        }
    }

});

//Obtener los posts de los usuarios a los que esta siguiendo.
/// Ejemplo de URL: /usuarios/58jfkjgdkjfg/posts-siguiendo/
router.get("/:id/posts-siguiendo/", function(req,res){
    usuario.aggregate(
        [
            { 
                $match:{
                    _id:mongoose.Types.ObjectId(req.params.id)
                }
            },
            {
                $lookup:{
                    from:"usuarios",
                    localField:"siguiendo",
                    foreignField:"_id", 
                    as:"siguiendo"
                }
            },
            {   
               $project:{
                    "_id":true,
                    "nombre":true,
                    "siguiendo._id":true,
                    "siguiendo.nombre":true,
                    "siguiendo.imagen":true,
                    "siguiendo.posts":true	
               } 
            }   
        ]
    )
    .then((data)=>{
        res.send(data[0]);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    });
});



module.exports = router;
