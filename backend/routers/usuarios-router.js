var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var usuario = require('../modelos/usuario');



router.get('/',function(req, res) {
    usuario.find()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    
});

router.post('/', async function(req, res) {
    console.log('se hizo una solicitud para crear usuario');
    const correo = req.body.correo;
    console.log(correo);
    const user = await usuario.findOne({ 'correo': correo });
    if (user != null) {
        return res.status(401).json({ "message": "Correo en uso" });
    }
    let userRouter = new usuario({
        name: req.body.name,
        correo: req.body.correo,
        password: req.body.password,
        tipoUsuario: req.body.tipoUsuario, //Usuario: 0, Empresa: 1, Administrador: 2
        ubicacion: [], //{pais: '', departamento: '', ciudad: ''}
        medioPago: [], //[{_id: '', tipoPago: 'number', datos: 'JSON', tituloMedio: 'String', _idUsuario: ''}]
        estado: "activo",
        favoritos:[], 
        carrito:[]
    });
    userRouter.save().then(result => {
        res.status(200).json({ 'message': 'Datos actualizados correctamente' });
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });

});

// login usuario
router.post('/login',function (req, res) {
    usuario.findOne({
        correo:req.body.correo,
        password:req.body.password
    },{})
    .then(result=>{
        if(result==null){
            res.status(200).json({ 'message': 'falla de usuario y contrasena' });
            res.end();
        }else{
            res.send(result);
            res.end();
        }
        
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});;



module.exports = router;
