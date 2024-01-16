// Importamos mongoose
const mongoose = require('mongoose');

/* Definimos el esquema de datos */
// Para definir un esquema se utiliza el constructor Schema de mongoose y la palabra reservada new.
const usuarioEsquema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    ciudad:{
        type: String,
        required: false,
        default: "s/i"
    },
    pais:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true
    },
    foto:{
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
const Usuario = mongoose.model("usuarios", usuarioEsquema);


// Exportamos el modelo para utilizarlo donde sea requerido
module.exports = Usuario;