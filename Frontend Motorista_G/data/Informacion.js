db.disponibles.insertMany([
    {
        "_id": ObjectId("611925dec79819a64e3d7e28"),
        "numeroDeOrden":"Orden#1",
        "direccion":"Direccion: Colonia kennedy cas 5 bloque 6",
        "cantidadProductos":"Cantidad de productos: 2",
        "total":300,
        "estadoOrden": "inicio",
        "detalleEstado":[
            {
                "tipoDePago" : "tarjeta De Credito",
                "ISV" : "18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
        ]
    },
    {
        "_id": ObjectId("611925dec79819a64e3d7e29"),
        "numeroDeOrden":"Orden#2",
        "direccion":"Direccion: Colonia miramontes casa 8 bloque 6",
        "cantidadProductos":"Cantidad de productos: 5",
        "total":500,
        "estadoOrden": "inicio",
        "detalleEstado":[
            {
                "tipoDePago" : "efectivo",
                "ISV" : "18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
        ]
    },
    {
        "_id": ObjectId("611925dec79819a64e3d7e26"),
        "numeroDeOrden":"Orden#9",
        "direccion":"Direccion: Colonia bella vista casa 13 bloque 1",
        "cantidadProductos":"Cantidad de productos: 6",
        "total":500,
        "estadoOrden": "inicio",
        "detalleEstado":[
            {
                "tipoDePago" : "efectivo",
                "ISV" : "18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
        ]
    },
    {
        "_id": ObjectId("611925dec79819a64e3d7e25"),
        "numeroDeOrden":"Orden#9",
        "direccion":"Direccion: Colonia merida cas 11 bloque 3",
        "cantidadProductos":"Cantidad de productos: 1",
        "total":600,
        "estadoOrden": "inicio",
        "detalleEstado":[
            {
                "tipoDePago" : "efectivo",
                "ISV" : "18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
        ]
    },
    {
        "_id": ObjectId("611925dec79819a64e3d7e27"),
        "numeroDeOrden":"Orden#9",
        "direccion":"Direccion: Colonia jamaica casa 8 bloque 6",
        "cantidadProductos":"Cantidad de productos: 1",
        "total":400,
        "estadoOrden": "inicio",
        "detalleEstado":[
            {
                "tipoDePago" : "tarjeta de credito",
                "ISV" : "18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
        ]
    }
])