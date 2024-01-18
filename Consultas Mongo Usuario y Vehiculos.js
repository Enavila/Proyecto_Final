// db.dropDatabase("mongodb_grupo9")

/*

// Crear coleccion definiendo los campos, cuales son requeridos, cuales son unicos y su descripcion


// Nombre de la colección
const collectionName = 'usuarios';

// Opciones de la colección, incluyendo índices
const collectionOptions = {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombre', 'apellido', 'edad', 'ciudad', 'pais', 'correo', 'contraseña'],
      properties: {
        nombre: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        apellido: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        edad: {
          bsonType: 'int',
          description: 'Puede ser un número entero (int), pero no es obligatorio.',
        },
        ciudad: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        pais: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        correo: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string), es obligatorio y debe ser único.',
        },
        contraseña: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        foto: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y tiene un valor por defecto si no se define en el registro.',
        },
        fecha_registro: {
          bsonType: 'date',
          description: 'Debe ser una fecha (date) y se agrega por defecto.',
        },
        fecha_modificacion: {
          bsonType: 'date',
          description: 'Debe ser una fecha (date) y se agrega por defecto.',
        },
      },
    },
  },
};


  // Crea la colección con las opciones definidas
  db.createCollection(collectionName, collectionOptions)

  db.usuarios.createIndex( { "correo": 1 }, { unique: true } );



*/

// db.usuarios.find()

// db.usuarios.drop()

/* 
    db.usuarios.insertOne({
        "nombre":"luis",
        "apellido": "zambrano",
        "edad": 33,
        "ciudad": "maracaibo",
        "pais": "venezuela",
        "correo": "luis@luis6.com",
        "contraseña": "1234",
        "foto": "https://i.ibb.co/Qf8XFnp/unkperfil-removebg-preview.png",
        "fecha_registro": new Date (),
        "fecha_modificacion": new Date()
    });
*/


/* 
    db.usuarios.deleteMany({
        "nombre": "luis"
    })

*/










/*


// Nombre de la colección
const collectionName = 'vehiculos';

// Opciones de la colección, incluyendo índices
const collectionOptions = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['foto', 'precio', 'marca', 'modelo', 'anio', 'kilometraje', 'color'],
            properties: {
                fecha_registro: {
                    bsonType: 'date',
                    description: 'Debe ser una fecha (date) y se agrega por defecto.',
                },
                fecha_modificacion: {
                    bsonType: 'date',
                    description: 'Debe ser una fecha (date) y se agrega por defecto.',
                },
                foto: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string) y es obligatorio.'
                },
                precio: {
                    bsonType: 'number',
                    description: 'Debe ser un número (int) y es obligatorio.'
                },
                marca: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string) y es obligatorio.'
                },
                modelo: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string) y es obligatorio.'
                },
                anio: {
                    bsonType: 'int',
                    description: 'Debe ser un número (int) y es obligatorio.'
                },
                color: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string) y es obligatorio.'
                },
                tipo_carroceria: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string).'
                },
                motor:{
                    properties:{
                        tipo_motor: {
                            bsonType: 'string',
                            description: 'Debe ser una cadena de texto (string).'
                        },
                        cilindraje: {
                            bsonType: 'number',
                            description: 'Debe ser un número (int).'
                        },
                        potencia_hp: {
                            bsonType: 'number',
                            description: 'Debe ser un número (int).'
                        }
                    }
                },
                transmision: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string).'
                },
                traccion: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string).'
                },
                numero_puertas: {
                    bsonType: 'number',
                    description: 'Debe ser un número (int).'
                },
                capacidad_pasajeros: {
                    bsonType: 'number',
                    description: 'Debe ser un número (int).'
                },
                kilometraje: {
                    bsonType: 'number',
                    description: 'Debe ser un número (int).'
                },
                sistema_frenos: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string).'
                },
                bolsas_de_aire: {
                    bsonType: 'number',
                    description: 'Debe ser un número (int).'
                },
                sistema_entretenimiento:{
                    properties:{
                        pantalla_tactil: {
                            bsonType: 'string',
                            description: 'Debe ser una cadena de texto (string).'
                        },
                        navegacion_gps: {
                            bsonType: 'string',
                            description: 'Debe ser una cadena de texto (string).'
                        },
                        bluetooth: {
                            bsonType: 'string',
                            description: 'Debe ser una cadena de texto (string).'
                        }
                    } 
                },
                aire_acondicionado: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string).'
                },
                tipo_asientos: {
                    bsonType: 'string',
                    description: 'Debe ser una cadena de texto (string).'
                },
                dimensiones:{
                    properties:{
                        longitud_mm: {
                            bsonType: 'number',
                            description: 'Debe ser un número (int).'
                        },
                        ancho_mm: {
                            bsonType: 'number',
                            description: 'Debe ser un número (int).'
                        },
                        alto_mm: {
                            bsonType: 'number',
                            description: 'Debe ser un número (int).'
                        }
                    }
                },
                peso_kg: {
                        bsonType: 'number',
                        description: 'Debe ser un número (int).'
                },
                consumo_combustible:{
                    properties:{
                        ciudad_kmpl: {
                            bsonType: 'number',
                            description: 'Debe ser un número (int).'
                        },
                        carretera_kmpl: {
                            bsonType: 'number',
                            description: 'Debe ser un número (int).'
                        }
                    }
                }
            }
        }
    }
};

db.createCollection(collectionName, collectionOptions)

*/


// db.vehiculos.drop()

// db.vehiculos.find()


/* 

db.vehiculos.insertOne({
        "precio":3000,
        "marca": "Toyota",
        "modelo": "Corolla",
        "anio": 2020,
        "kilometraje": 1000,
        "color": "rojo",
        "foto": "https://ibb.co/BgRpTd0",
    });
    
db.vehiculos.deleteOne({
    "marca":"Toyota"
});
    
*/