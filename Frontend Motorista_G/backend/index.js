var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var ordenesDisRouter = require('./routers/ordenesDis-router');

var UsuariosDisRouter = require('./routers/usuarios-routers');
var OrdenesNoEntregadasRouter = require('./routers/ordenesNoEntregadas-Routers');
var OrdenesEntregadas = require('./routers/ordenesEntregadas-Routers');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ordenesDis', ordenesDisRouter);

app.use('/usuarios', UsuariosDisRouter);
app.use('/Entregadas', OrdenesEntregadas);
app.use('/ordenesNoEntregadas', OrdenesNoEntregadasRouter);



app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});