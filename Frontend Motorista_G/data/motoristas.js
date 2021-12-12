db.usuarios.insertMany([
    {
        "_id": ObjectId("611925dec79819a64e3d7e11"),
        "nombre": "Marco",
        "apellido": "Martinez",
        "usuario": "marco@gmail.com",
        "contrasena": "marcoMartinez5",
        "ordenesTomadasNoEntregadas": [
            ObjectId("611925dec79819a64e3d7e75")
        ],
        "ordenesEntregadas": [
            ObjectId("611925dec79819a64e3d7e76")
        ]
    },
    {
        "_id": ObjectId("611925dec79819a64e3d7e12"),
        "nombre": "Mario",
        "apellido": "Mendoza",
        "usuario": "mario@gmail.com",
        "contrasena": "marioMendoza5",
        "ordenesTomadasNoEntregadas": [],
        "ordenesEntregadas": []
    },
    {
        "_id": ObjectId("611925dec79819a64e3d7e13"),
        "nombre": "Marcio",
        "apellido": "Mejia",
        "usuario": "marcio@gmail.com",
        "contrasena": "marcioMejia5",
        "ordenesTomadasNoEntregadas": [],
        "ordenesEntregadas": []
    },
    {
        "_id": ObjectId("611925dec79819a64e3d7e14"),
        "nombre": "Andres",
        "apellido": "lopez",
        "usuario": "andres@gmail.com",
        "contrasena": "andreslopez5",
        "ordenesTomadasNoEntregadas": [],
        "ordenesEntregadas": []
    }
    
])