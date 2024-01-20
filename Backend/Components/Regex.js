
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexEdad = /^[0-9]{1,2}$/;
const regexCiudad = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexPais = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexCorreo = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,6}$/;
const regexContrasena = /^[a-zA-Z0-9*_.\-()]{1,}$/;
const regexFoto = /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;
const regexID = /^[a-z0-9]{1,}$/;

const mensajeErrorNombre = "El nombre es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorApellido = "El Apellido es incorrecto, se permiten solo letras, acentos y hasta 4 espacios";
const mensajeErrorEdad = "La Edad es incorrecta, se permiten solo numeros desde 0 hasta 99 a partir de 18 años";
const mensajeErrorCiudad = "La ciudad es incorrecta, se permiten solo letras, acentos y hasta 4 espacios";
const mensajeErrorPais = "El pais es incorrecto, se permiten solo letras, acentos y hasta 4 espacios";
const mensajeErrorCorreo = "El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension";
const mensajeErrorContrasena = "La contraseña es incorrecta, se permiten solo letras minusculas y mayusculas, numeros y solo los caracteres especiales * _ . - ( ) sin espacios";
const mensajeErrorFoto = "El URL de la foto para el usuario es incorrecto";
const mensajeErrorID = "El ID es incorrecto, se permiten solo letras de la a a la z y numeros del 0 al 9";

const regexPrecio = /^[0-9]{1,}$/;
const regexMarca = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexModelo = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexAnio = /^[0-9]{4}$/;
const regexColor = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexTipoCarroceria = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexTipoMotor = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexCilindraje = /^[0-9]{1,}$/;
const regexPotenciaHP = /^[0-9]{1,}$/;
const regexTransmision = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexTraccion = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexNumeroPuertas = /^[0-9]{1,}$/;
const regexCapacidadPasajeros = /^[0-9]{1,}$/;
const regexKilometraje = /^[0-9]{1,}$/;
const regexSistemaDeFrenos = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexBolsasDeAire = /^[0-9]{1,}$/;
const regexPantallaTactil = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexNavegacionGPS = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexBluetooth = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexAireAcondicionado = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexTipoDeAsientos = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexLongitudMM = /^[0-9]{1,}$/;
const regexAnchoMM = /^[0-9]{1,}$/;
const regexAlturaMM = /^[0-9]{1,}$/;
const regexPesoKG = /^[0-9]{1,}$/;
const regexConsumoCiudad = /^[0-9]{1,}$/;
const regexConsumoCarretera = /^[0-9]{1,}$/;

const mensajeErrorPrecio = "El precio es incorrecto, debe ser un valor numérico";
const mensajeErrorMarca = "La marca es incorrecta, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorModelo = "El modelo es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorAnio = "El año es incorrecto, debe ser un valor numérico de maximo 4 digitos";
const mensajeErrorColor = "El color es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorTipoCarroceria = "El tipo de carroceria es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorTipoMotor = "El tipo de motor es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorCilindraje = "El cilindraje es incorrecto, debe ser un valor numérico";
const mensajeErrorPotenciaHP = "La potencia es incorrecta, debe ser un valor numérico";
const mensajeErrorTransmision = "La transmision es incorrecta, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorTraccion = "La traccion es incorrecta, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorNumeroPuertas = "El numero de puertas es incorrecto, debe ser un valor numérico";
const mensajeErrorCapacidadPasajeros = "La capacidad de pasajeros es incorrecta, debe ser un valor numérico";
const mensajeErrorKilometraje = "El kilometraje es incorrecto, debe ser un valor numérico";
const mensajeErrorSistemaDeFrenos = "El sistema de frenos es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorBolsasDeAire = "Las bolsas de aire son incorrectas, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorPantallaTactil = "La pantalla tactil es incorrecta, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorNavegacionGPS = "La navegacion GPS es incorrecta, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorBluetooth = "El bluetooth es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorAireAcondicionado = "El aire acondicionado es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorTipoDeAsientos = "El tipo de asientos es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorLongitudMM = "La longitud es incorrecta, debe ser un valor numérico";
const mensajeErrorAnchoMM = "El ancho es incorrecto, debe ser un valor numérico";
const mensajeErrorAlturaMM = "La altura es incorrecta, debe ser un valor numérico";
const mensajeErrorPesoKG = "El peso es incorrecto, debe ser un valor numérico";
const mensajeErrorConsumoCiudad = "El consumo en ciudad es incorrecto, debe ser un valor numérico";
const mensajeErrorConsumoCarretera = "El consumo en carretera es incorrecto, debe ser un valor numérico";




module.exports = {
    regexNombre,
    regexApellido,
    regexEdad,
    regexCiudad,
    regexPais,
    regexCorreo,
    regexContrasena,
    regexFoto,
    regexID,
    mensajeErrorNombre,
    mensajeErrorApellido,
    mensajeErrorEdad,
    mensajeErrorCiudad,
    mensajeErrorPais,
    mensajeErrorCorreo,
    mensajeErrorContrasena,
    mensajeErrorFoto,
    mensajeErrorID,
    regexPrecio,
    regexMarca,
    regexModelo,
    regexAnio,
    regexColor,
    regexTipoCarroceria,
    regexTipoMotor,
    regexCilindraje,
    regexPotenciaHP,
    regexTransmision,
    regexTraccion,
    regexNumeroPuertas,
    regexCapacidadPasajeros,
    regexKilometraje,
    regexSistemaDeFrenos,
    regexBolsasDeAire,
    regexPantallaTactil,
    regexNavegacionGPS,
    regexBluetooth,
    regexAireAcondicionado,
    regexTipoDeAsientos,
    regexLongitudMM,
    regexAnchoMM,
    regexAlturaMM,
    regexPesoKG,
    regexConsumoCiudad,
    regexConsumoCarretera,
    mensajeErrorPrecio,
    mensajeErrorMarca,
    mensajeErrorModelo,
    mensajeErrorAnio,
    mensajeErrorColor,
    mensajeErrorTipoCarroceria,
    mensajeErrorTipoMotor,
    mensajeErrorCilindraje,
    mensajeErrorPotenciaHP,
    mensajeErrorTransmision,
    mensajeErrorTraccion,
    mensajeErrorNumeroPuertas,
    mensajeErrorCapacidadPasajeros,
    mensajeErrorKilometraje,
    mensajeErrorSistemaDeFrenos,
    mensajeErrorBolsasDeAire,
    mensajeErrorPantallaTactil,
    mensajeErrorNavegacionGPS,
    mensajeErrorBluetooth,
    mensajeErrorAireAcondicionado,
    mensajeErrorTipoDeAsientos,
    mensajeErrorLongitudMM,
    mensajeErrorAnchoMM,
    mensajeErrorAlturaMM,
    mensajeErrorPesoKG,
    mensajeErrorConsumoCiudad,
    mensajeErrorConsumoCarretera
};



