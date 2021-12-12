db.Entregadas.insertMany([
    {
        "_id": ObjectId("611925dec79819a64e3d7e76"),
        "numeroDeOrden":"Orden#3",
        "direccion":"Direccion: Colonia kennedy cas 5 bloque 6",
        "cantidadProductos":"Cantidad de productos: 3",
        "total":300,
        "estadoOrden":
            {
                "descripcion":"Entregada"
            },
        "detalleEstado":
            {
                "TiposDePago":[
                    {
                        "pago1":"Tarjeta de Credito",
                    },
                    {
                        "pago2":"Efectivo"
                    }
                ],
                "ISV":"ISV: 18%",
                "comisionAdministracion":"Comision Administracion: 80%",
                "comisionMotorista":"Comision Motorista: 20%"
            }
    }
])