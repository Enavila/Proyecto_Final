const {
        regexURL,
        regexNombre,
        regexApellido,
        regexEdad,
        regexPais,
        regexCiudad,
        regexDireccion,
        regexCorreo,
        regexContrasena,
        regexTelefono,
        regexDocumentoIdentidad,
} = require ("./Regex");

const {
        mensajeErrorNombre,
        mensajeErrorApellido,
        mensajeErrorEdad,
        mensajeErrorPais,
        mensajeErrorCiudad,
        mensajeErrorDireccion,
        mensajeErrorCorreo,
        mensajeErrorContrasena,
        mensajeErrorTelefono,
        mensajeErrorFotoPerfil,
        mensajeErrorDocumentoIdentidad,
        mensajeErrorFotoFrontalRostro,
        mensajeErrorFotoDocumentoIdentidad,
} = require("./Regex");


function FuncionValidarRegistroUsuario (datosUsuario){
    FuncionValidarNombre(datosUsuario.nombre);
    FuncionValidarApellido(datosUsuario.apellido);
    FuncionValidarEdad(datosUsuario.edad);
    FuncionValidarPais(datosUsuario.pais);
    FuncionValidarCiudad(datosUsuario.ciudad);
    FuncionValidarDireccion(datosUsuario.direccion);
    FuncionValidarCorreo(datosUsuario.correo);
    FuncionValidarContrasena(datosUsuario.contrasena);
    // FuncionValidarTelefono(datosUsuario.telefono); // Arerglar regex Telefono
    FuncionValidarFotoPerfil(datosUsuario.foto_perfil);
    // FuncionValidarDocumentoIdentidad(datosUsuario.documento_identidad); // Arreglar regex Documento Identidad
    FuncionValidarFotoFrontalRostro(datosUsuario.foto_frontal_rostro);
    FuncionValidarFotoDocumentoIdentidad(datosUsuario.foto_documento_identidad);
    return true;
}

function FuncionValidarActualizacionUsuario(nuevosDatos){
    if (nuevosDatos.nombre){
        FuncionValidarNombre(nuevosDatos.nombre);
    }
    if (nuevosDatos.apellido){
        FuncionValidarApellido(nuevosDatos.apellido);
    }
    if (nuevosDatos.edad){
        FuncionValidarEdad(nuevosDatos.edad);
    }
    if (nuevosDatos.pais){
        FuncionValidarPais(nuevosDatos.pais);
    }
    if (nuevosDatos.ciudad){
        FuncionValidarCiudad(nuevosDatos.ciudad);
    }
    if (nuevosDatos.direccion){
        FuncionValidarDireccion(nuevosDatos.direccion);
    }
    if (nuevosDatos.correo){
        FuncionValidarCorreo(nuevosDatos.correo);
    }
    if (nuevosDatos.contrasena){
        FuncionValidarContrasena(nuevosDatos.contrasena);
    }
    if (nuevosDatos.telefono){
        FuncionValidarTelefono(nuevosDatos.telefono);
    }
    if (nuevosDatos.foto_perfil){
        FuncionValidarFoto(nuevosDatos.foto_perfil);
    }
    if (nuevosDatos.documento_identidad){
        FuncionValidarDocumentoIdentidad(nuevosDatos.documento_identidad);
    }
    if (nuevosDatos.foto_frontal_rostro){
        FuncionValidarFotoFrontalRostro(nuevosDatos.foto_frontal_rostro);
    }
    if (nuevosDatos.foto_documento_identidad){
        FuncionValidarImagenDocumentoIdentidad(nuevosDatos.foto_documento_identidad);
    }
    return true;
}

function FuncionValidarNombre(nombre) {
    if (regexNombre.test(nombre)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorNombre}`);
    }
    
}

function FuncionValidarApellido(apellido) {
    if (regexApellido.test(apellido)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorApellido}`);
    }
}

function FuncionValidarEdad(edad) {
    if (regexEdad.test(edad)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorEdad}`);
    }
}

function FuncionValidarPais(pais) {
    if (regexPais.test(pais)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorPais}`);
    }
}

function FuncionValidarCiudad(ciudad) {
    if (regexCiudad.test(ciudad)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorCiudad}`);
    }
}

function FuncionValidarDireccion(direccion) {
    if (regexDireccion.test(direccion)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorDireccion}`);
    }
}


function FuncionValidarCorreo(correo) {
    if (regexCorreo.test(correo)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorCorreo}`);
    }
}

function FuncionValidarContrasena(contrasena) {
    if (regexContrasena.test(contrasena)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorContrasena}`);
    }
}

function FuncionValidarTelefono(telefono) {
    if (regexTelefono.test(telefono)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorTelefono}`);
    }
}

function FuncionValidarFotoPerfil(foto) {
    if (regexURL.test(foto)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorFotoPerfil}`);
    }
}

function FuncionValidarDocumentoIdentidad(documentoIdentidad) {
    if (regexDocumentoIdentidad.test(documentoIdentidad)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorDocumentoIdentidad}`);
    }
}

function FuncionValidarFotoFrontalRostro(fotoFrontalRostro) {
    if (regexURL.test(fotoFrontalRostro)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorFotoFrontalRostro}`);
    }
}

function FuncionValidarFotoDocumentoIdentidad(fotoDocumentoIdentidad) {
    if (regexURL.test(fotoDocumentoIdentidad)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorFotoDocumentoIdentidad}`);
    }
}




module.exports = {
    FuncionValidarRegistroUsuario,
    FuncionValidarActualizacionUsuario,
    FuncionValidarNombre,
    FuncionValidarApellido,
    FuncionValidarEdad,
    FuncionValidarPais,
    FuncionValidarCiudad,
    FuncionValidarDireccion,
    FuncionValidarCorreo,
    FuncionValidarContrasena,
    FuncionValidarTelefono,
    FuncionValidarFotoPerfil,
    FuncionValidarDocumentoIdentidad,
    FuncionValidarFotoFrontalRostro,
    FuncionValidarFotoDocumentoIdentidad
};