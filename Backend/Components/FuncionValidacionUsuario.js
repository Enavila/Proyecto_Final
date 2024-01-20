const {regexNombre, regexApellido, regexEdad, regexCiudad, regexPais, regexCorreo, regexContrasena, regexFoto} = require ("./Regex");
const {mensajeErrorNombre, mensajeErrorApellido, mensajeErrorEdad, mensajeErrorCiudad, mensajeErrorPais, mensajeErrorCorreo, mensajeErrorContrasena, mensajeErrorFoto} = require("./Regex");


function FuncionValidarRegistroUsuario (datosUsuario){
    FuncionValidarNombre(datosUsuario.nombre);
    FuncionValidarApellido(datosUsuario.apellido);
    FuncionValidarEdad(datosUsuario.edad);
    FuncionValidarCiudad(datosUsuario.ciudad);
    FuncionValidarPais(datosUsuario.pais);
    FuncionValidarCorreo(datosUsuario.correo);
    FuncionValidarContrasena(datosUsuario.contrasena);
    FuncionValidarFoto(datosUsuario.foto);
    return true;
}

FuncionValidarActualizacionUsuario = (nuevosDatos) => {
    if (nuevosDatos.nombre){
        FuncionValidarNombre(nuevosDatos.nombre);
    }

    if (nuevosDatos.apellido){
        FuncionValidarApellido(nuevosDatos.apellido);
    }

    if (nuevosDatos.edad){
        FuncionValidarEdad(nuevosDatos.edad);
    }

    if (nuevosDatos.ciudad){
        FuncionValidarCiudad
    }

    if (nuevosDatos.pais){
        FuncionValidarPais(nuevosDatos.pais);
    }

    if (nuevosDatos.correo){
        FuncionValidarCorreo(nuevosDatos.correo);
    }

    if (nuevosDatos.contrasena){
        FuncionValidarContrasena(nuevosDatos.contrasena);
    }

    if (nuevosDatos.foto){
        FuncionValidarFoto(nuevosDatos.foto);
    }
}

function FuncionValidarNombre(nombre) {
    if (!regexNombre.test(nombre)) {
        throw new Error(`${mensajeErrorNombre}`);
    } else {
        return true;
    }
    
}

function FuncionValidarApellido(apellido) {
    if (!regexApellido.test(apellido)) {
        throw new Error(`${mensajeErrorApellido}`);
    } else {
        return true;
    }
}

function FuncionValidarEdad(edad) {
    if (!regexEdad.test(edad)) {
        throw new Error(`${mensajeErrorEdad}`);
    } else {
        return true;
    }
}

function FuncionValidarCiudad(ciudad) {
    if (!regexCiudad.test(ciudad)) {
        throw new Error(`${mensajeErrorCiudad}`);
    } else {
        return true;
    }
}

function FuncionValidarPais(pais) {
    if (!regexPais.test(pais)) {
        throw new Error(`${mensajeErrorPais}`);
    } else {
        return true;
    }
}

function FuncionValidarCorreo(correo) {
    if (!regexCorreo.test(correo)) {
        throw new Error(`${mensajeErrorCorreo}`);
    } else {
        return true;
    }
}

function FuncionValidarContrasena(contrasena) {
    if (!regexContrasena.test(contrasena)) {
        throw new Error(`${mensajeErrorContrasena}`);
    } else {
        return true;
    }
}

function FuncionValidarFoto(foto) {
    if (!regexFoto.test(foto)) {
        throw new Error(`${mensajeErrorFoto}`);
    } else {
        return true;
    }
}




module.exports = {
    FuncionValidarRegistroUsuario,
    FuncionValidarActualizacionUsuario,
    FuncionValidarNombre,
    FuncionValidarApellido,
    FuncionValidarEdad,
    FuncionValidarCiudad,
    FuncionValidarPais,
    FuncionValidarCorreo,
    FuncionValidarContrasena,
    FuncionValidarFoto
};