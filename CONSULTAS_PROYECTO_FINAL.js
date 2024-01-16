/*
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
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        fecha_registro: {
          bsonType: 'date',
          description: 'Debe ser una fecha (date) y es obligatorio.',
        },
        fecha_modificacion: {
          bsonType: 'date',
          description: 'Debe ser una fecha (date) y es obligatorio.',
        },
      },
    },
  },
};


  // Crea la colección con las opciones definidas
  db.createCollection(collectionName, collectionOptions, (err, res) => {
    if (err) throw err;
    console.log('Colección creada con éxito.');
    client.close();
  });

  // especifica cuales campos van a ser unicos
  db.usuarios.createIndex( { "correo": 1 }, { unique: true } )
  */
  
//db.usuarios.find()






/*
// Nombre de la colección
const collectionName = 'productos';

// Opciones de la colección, incluyendo índices
const collectionOptions = {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombre', 'descripcion', 'fabricante', 'precio', 'stock'],
      properties: {
        nombre: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        descripcion: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        fabricante: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string) y es obligatorio.',
        },
        precio: {
          bsonType: 'number',
          description: 'Debe ser un número (number) y es obligatorio.',
        },
        stock: {
          bsonType: 'number',
          description: 'Debe ser un número (number) y es obligatorio.',
        },
        imagen: {
          bsonType: 'string',
          description: 'Debe ser una cadena de texto (string), es obligatorio y único.',
        },
        fecha_registro: {
          bsonType: 'date',
          description: 'Debe ser una fecha (date) y es obligatorio.',
        },
        fecha_modificacion: {
          bsonType: 'date',
          description: 'Debe ser una fecha (date) y es obligatorio.',
        },
      },
    },
  },
};


  // Crea la colección con las opciones definidas
  db.createCollection(collectionName, collectionOptions, (err, res) => {
    if (err) throw err;
    console.log('Colección creada con éxito.');
    client.close();
  });

  // especifica cuales campos van a ser únicos
  db.productos.createIndex( { "imagen": 1 }, { unique: true } )
*/



//db.productos.find()
  
  
  




// {
// 	"nombre": "azúcar",
// 	"descripcion": "azucar refinada",
// 	"fabricante": "montalban",
// 	"precio": 1.5,
// 	"stock": 30
// }