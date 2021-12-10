db.disponibles.insertMany([
    {
        "numeroDeOrden":"Orden#1",
        "direccion":"Direccion: Colonia Altamira cas 5 bloque 6",
        "cantidadProductos":"Cantidad de productos: 5",
        "total": "Total: 500 lps",
        "estadoOrden":[

            {
                "_id":ObjectId(),
                "descripcion":"Tomada"

            },
            {
                "_id":ObjectId(),
                "descripcion":"En Camino"
            },
            {
                "_id":ObjectId(),
                "descripcion":"En el origen"
            },
            {
                "_id":ObjectId(),
                "descripcion": "En el destino" 
            }
        ],
        "detalleEstado":[
            {
                "_id":ObjectId(),
                "TiposDePago":[
                    {
                        "_id":ObjectId(),
                        "pago1":"Tarjeta de Credito",
                    },
                    {
                        "_id":ObjectId(),
                        "pago2":"Efectivo"
                    }
                ],
                "ISV":"ISV: 18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
        ]
    },

    {
        "numeroDeOrden":"Orden#2",
        "direccion":"Direccion: Colonia kennedy cas 5 bloque 6",
        "cantidadProductos":"Cantidad de productos: 3",
        "total": "Total: 300 lps",
        "estadoOrden":[

            {
                "_id":ObjectId(),
                "descripcion":"Tomada"
                
            },
            {
                "_id":ObjectId(),
                "descripcion":"En Camino"
            },
            {
                "_id":ObjectId(),
                "descripcion":"En el origen"
            },
            {
                "_id":ObjectId(),
                "descripcion": "En el destino"      
            }
        ],
        "detalleEstado":[
            {
                "_id":ObjectId(),
                "TiposDePago":[
                    {
                        "_id":ObjectId(),
                        "pago1":"Tarjeta de Credito",
                    },
                    {
                        "_id":ObjectId(),
                        "pago2":"Efectivo"
                    }
                ],
                "ISV":"ISV: 18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
        ]
    }
])