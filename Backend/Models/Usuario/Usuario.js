// Importamos mongoose
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
    ciudad:{
        type: String,
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
    },
});

// Método para validar el nombre con una expresión regular sencilla
usuarioEsquema.methods.validarNombre = function() {
    const expresionRegularNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
    return expresionRegularNombre.test(this.nombre);
};

usuarioEsquema.methods.validarApellido = function() {
    const expresionRegularApellido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
    return expresionRegularApellido.test(this.apellido);
};

usuarioEsquema.methods.validarEdad = function() {
    const expresionRegularEdad = /^[0-9]{1,3}$/;
    return expresionRegularEdad.test(this.edad);
};

usuarioEsquema.methods.validarCiudad = function() {
    const expresionRegularCiudad = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
    return expresionRegularCiudad.test(this.ciudad);
};

usuarioEsquema.methods.validarPais = function() {
    const expresionRegularPais = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
    return expresionRegularPais.test(this.pais);
};

usuarioEsquema.methods.validarCorreo = function() {
    const expresionRegularCorreo = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,6}$/;
    return expresionRegularCorreo.test(this.correo);
}

usuarioEsquema.methods.validarContraseña = function() {
    const expresionRegularContraseña = /^[a-zA-Z0-9*_.\-()]+$/;
    return expresionRegularContraseña.test(this.contraseña);
}


const Usuario = mongoose.model("usuarios", usuarioEsquema);

module.exports = Usuario;