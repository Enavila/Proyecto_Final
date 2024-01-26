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
    regexMetodoDePago_Banco,
    regexMetodoDePago_NumeroCuenta,
    regexMetodoDePago_Efectivo
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
    mensajeErrorMetodoDePago_Banco,
    mensajeErrorMetodoDePago_NumeroCuenta,
    mensajeErrorMetodoDePago_Efectivo
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
    FuncionValidarTelefono(datosUsuario.telefono); // Arerglar regex Telefono
    FuncionValidarFotoPerfil(datosUsuario.foto_perfil);
    FuncionValidarDocumentoIdentidad(datosUsuario.documento_identidad); // Arreglar regex Documento Identidad
    FuncionValidarFotoFrontalRostro(datosUsuario.foto_frontal_rostro);
    FuncionValidarFotoDocumentoIdentidad(datosUsuario.foto_documento_identidad);
    if (datosUsuario.vendedor){
        if (datosUsuario.vendedor.metodos_de_pago){
            if (datosUsuario.vendedor.metodos_de_pago.transferencia){
                const bancos = datosUsuario.vendedor.metodos_de_pago.transferencia;
                bancos.map((banco) => {
                    FuncionValidarBanco(banco.nombre_banco);
                    FuncionValidarCuentaBancaria(banco.numero_cuenta);
                })
            }
            if(datosUsuario.vendedor.metodos_de_pago.cheque){
                const cheques = datosUsuario.vendedor.metodos_de_pago.cheque;
                cheques.map((cheque) => {
                    FuncionValidarBanco(cheque.nombre_banco);
                    FuncionValidarCuentaBancaria(cheque.numero_cuenta);
                })
            }
            if (datosUsuario.vendedor.metodos_de_pago.efectivo){
                FuncionValidarEfectivo(datosUsuario.vendedor.metodos_de_pago.efectivo)
            }
        }
    }
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
        FuncionValidarFotoPerfil(nuevosDatos.foto_perfil);
    }
    if (nuevosDatos.documento_identidad){
        FuncionValidarDocumentoIdentidad(nuevosDatos.documento_identidad);
    }
    if (nuevosDatos.foto_frontal_rostro){
        FuncionValidarFotoFrontalRostro(nuevosDatos.foto_frontal_rostro);
    }
    if (nuevosDatos.foto_documento_identidad){
        FuncionValidarFotoDocumentoIdentidad(nuevosDatos.foto_documento_identidad);
    }
    if (nuevosDatos.vendedor){
        if (nuevosDatos.vendedor.metodos_de_pago){
            if (nuevosDatos.vendedor.metodos_de_pago.transferencia){
                const bancos = nuevosDatos.vendedor.metodos_de_pago.transferencia;
                bancos.map((banco) => {
                    FuncionValidarBanco(banco.nombre_banco);
                    FuncionValidarCuentaBancaria(banco.numero_cuenta);
                })
            }
            if(nuevosDatos.vendedor.metodos_de_pago.cheque){
                const cheques = nuevosDatos.vendedor.metodos_de_pago.cheque;
                cheques.map((cheque) => {
                    FuncionValidarBanco(cheque.nombre_banco);
                    FuncionValidarCuentaBancaria(cheque.numero_cuenta);
                })
            }
            if (nuevosDatos.vendedor.metodos_de_pago.efectivo){
                FuncionValidarEfectivo(nuevosDatos.vendedor.metodos_de_pago.efectivo)
            }
        }
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
    if ((regexEdad.test(edad)) && edad>=18) {
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

function FuncionValidarBanco(banco){
    if (regexMetodoDePago_Banco.test(banco)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorMetodoDePago_Banco}`);
    }
}

function FuncionValidarCuentaBancaria(cuenta){
    if (regexMetodoDePago_NumeroCuenta.test(cuenta)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorMetodoDePago_NumeroCuenta}`);
    }
}

function FuncionValidarEfectivo(efectivo){
    if (regexMetodoDePago_Efectivo.test(efectivo)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorMetodoDePago_Efectivo}`);
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