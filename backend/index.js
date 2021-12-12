var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
//var testModule = require('./modules/test-module');
var database = require('./modulos/database'); 
// conexion con la base de datos
var usuariosRouter = require('./routers/usuarios-router');
var tiendasRouter = require('./routers/tiendas-router');
var productoRouter = require('./routers/productos-router');
//var cancionesRouter = require('./routes/canciones-router');

app.use(cors());// permita peticiones de otros origenes
app.use(bodyParser.json());
//permite obtener el arrchivo json del metodo post
app.use(bodyParser.urlencoded({extended:true}));
// permite enviar informacion en formato urlencoded
app.use('/usuarios',usuariosRouter);
app.use('/tiendas',tiendasRouter);
app.use('/productos',productoRouter);

app.listen(8888,function(){
    console.log('servidor levantado');
});


app.get('/', (req, res) => {
    res.send('Hello World!');
    res.end();
});