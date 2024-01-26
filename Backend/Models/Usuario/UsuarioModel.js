// Importamos mongoose
const mongoose = require('mongoose');

const {regexNombre, regexApellido, regexEdad, regexCiudad, regexPais, regexCorreo, regexContrasena, regexFoto} = require ("../../Components/Regex");



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
        required: true
    },

    pais:{
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true
    },

    contrasena:{
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

usuarioEsquema.methods.validarNombre = function() {
    return regexNombre.test(this.nombre);
};

usuarioEsquema.methods.validarApellido = function() {
    return regexApellido.test(this.apellido);
};

usuarioEsquema.methods.validarEdad = function() {
    return regexEdad.test(this.edad);
};

usuarioEsquema.methods.validarCiudad = function() {
    return regexCiudad.test(this.ciudad);
};

usuarioEsquema.methods.validarPais = function() {
    return regexPais.test(this.pais);
};

usuarioEsquema.methods.validarCorreo = function() {
    return regexCorreo.test(this.correo);
}

usuarioEsquema.methods.validarContrasena = function() {
    return regexContrasena.test(this.contrasena);
}

usuarioEsquema.methods.validarFoto = function() {
    return regexFoto.test(this.foto);
}


const Usuario = mongoose.model("usuarios", usuarioEsquema);

module.exports = Usuario;