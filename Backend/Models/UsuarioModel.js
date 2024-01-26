const mongoose = require('mongoose');

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
    pais:{
        type: String,
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    direccion:{
        type: String
    },
    correo:{
        type: String,
        required: true
    },
    contrasena:{
        type: String,
        required: true
    },
    telefono:{

    },
    foto_perfil:{
        type: String,
        default: "https://i.ibb.co/Qf8XFnp/unkperfil-removebg-preview.png"
    },
    documento_identidad:{
        type: String
    },
    foto_frontal_rostro:{
        type: String
    },
    foto_documento_identidad:{
        type: String
    },
    vendedor:{
        metodos_de_pago:{
            transferencia:{
                
            },
            efectivo:{

            },
            cheque:{
                
            }
        },
    },
    garaje:{
        type: Array
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

const Usuario = mongoose.model("usuarios", usuarioEsquema);

module.exports = Usuario;
