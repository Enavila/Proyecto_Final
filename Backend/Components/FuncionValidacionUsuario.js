const {regexNombre, regexApellido, regexEdad, regexCiudad, regexPais, regexCorreo, regexContrasena} = require ("./Regex");

function FuncionValidarNombre(nombre) {
    return regexNombre.test(nombre);
}

function FuncionValidarApellido(apellido) {
    return regexApellido.test(apellido);
}

function FuncionValidarEdad(edad) {
    return regexEdad.test(edad);
}

function FuncionValidarCiudad(ciudad) {
    return regexCiudad.test(ciudad);
}

function FuncionValidarPais(pais) {
    return regexPais.test(pais);
}

function FuncionValidarCorreo(correo) {
    return regexCorreo.test(correo);
}

function FuncionValidarContrasena(contrasena) {
    return regexContrasena.test(contrasena);
}

function FuncionValidarFoto(foto) {
    return regexFoto.test(foto);
}



module.exports = {
    FuncionValidarNombre,
    FuncionValidarApellido,
    FuncionValidarEdad,
    FuncionValidarCiudad,
    FuncionValidarPais,
    FuncionValidarCorreo,
    FuncionValidarContrasena,
    FuncionValidarFoto
};