// Importamos mongoose
const mongoose = require('mongoose');

/* Definimos el esquema de datos */
// Para definir un esquema se utiliza el constructor Schema de mongoose y la palabra reservada new.
const productoEsquema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: false,
    },
    stock:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        default: "https://i.ibb.co/Qf8XFnp/unkperfil-removebg-preview.png"
    },
    fecha_registro:{
        type: Date,
        default: Date.now
    },
    fecha_modificacion:{
        type: Date,
        default: Date.now
    }
});


/* Definimos el modelo de datos */
// Para crear un modelo se utiliza el metodo model() de mongoose.

// Estructura del modelo:    "NombreDeColeccion", "Esquema"
const Producto = mongoose.model("productos", productoEsquema);


// Exportamos el modelo para utilizarlo donde sea requerido
module.exports = Producto;