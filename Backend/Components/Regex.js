const regexID = /^[a-z0-9]{1,24}$/;
const regexURL = /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;

const mensajeErrorID = "El ID es incorrecto, requiere 24 caracteres y se permiten solo letras de la a a la z y numeros del 0 al 9 ";
const mensajeErrorURL = "El URL de la foto para el usuario es incorrecto";

const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexEdad = /^[0-9]{1,2}$/;
const regexPais = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexCiudad = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexDireccion = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ#\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ#\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ#]){0,4}$/;
const regexCorreo = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,6}$/;
const regexContrasena = /^[a-zA-Z0-9*_.#]{1,}$/;
const regexTelefono = /^\+\d{1,2}(-|\s)\d{1,4}(-|\s)\d{1,4}(-|\s)\d{1,4}(-|\s)\d{1,4}$/;
const regexDocumentoIdentidad = /^[VEJP]{1}[-]\d{2,8}(.|-)\d{1,3}(.)\d{1,3}$/; // /^\+\d{1,2}(-|\s)\d{1,4}(-|\s)\d{1,4}(-|\s)\d{1,4}(-|\s)\d{1,4}$/;
const regexMetodoDePago_Banco = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,}(?:[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{0,}[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]){0,4}$/;
const regexMetodoDePago_NumeroCuenta = /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/;
const regexMetodoDePago_Efectivo = /^[SsIiÍíNnOo]{2}$/;

const mensajeErrorNombre = "El nombre es incorrecto, se permiten solo letras, acentos, hasta 4 espacios";
const mensajeErrorApellido = "El Apellido es incorrecto, se permiten solo letras, acentos y hasta 4 espacios";
const mensajeErrorEdad = "La Edad es incorrecta, se permiten solo numeros desde 0 hasta 99 a partir de 18 años";
const mensajeErrorPais = "El pais es incorrecto, se permiten solo letras, acentos y hasta 4 espacios";
const mensajeErrorCiudad = "La ciudad es incorrecta, se permiten solo letras, acentos y hasta 4 espacios";
const mensajeErrorDireccion = "La dirección ingresada no es válida. Por favor, asegúrate de seguir el formato correcto, por ejemplo: 123 Torre Floresta Apto. #45 ó Calle Principal, #78 ó Avenida del Sol, Piso 10.";
const mensajeErrorCorreo = "El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension";
const mensajeErrorContrasena = "La contraseña es incorrecta, se permiten solo letras minusculas y mayusculas, numeros y solo los caracteres especiales * _ . # sin espacios";
const mensajeErrorTelefono = "El telefono es incorrecto, debe respetar como máximo el formato +12-3456-7890-1234 o  +12 3456 7890 1234";
const mensajeErrorFotoPerfil = "La URL de la imagen de perfil es incorrecto.";
const mensajeErrorDocumentoIdentidad = "El documento de identidad es incorrecto, se permite solo hasta 15 números, 1 letra mayúscula y -; no se permiten espacios.";
const mensajeErrorFotoFrontalRostro = "El URL de la foto frontal del rostro es incorrecto.";
const mensajeErrorFotoDocumentoIdentidad = "El URL de la foto para documento de identidad es incorrecto.";
const mensajeErrorMetodoDePago_Banco = "El nombre del banco es incorrecto, se permiten solo letras, acentos y hasta 4 espacios";
const mensajeErrorMetodoDePago_NumeroCuenta = "El número de cuenta es incorrecto, debe respetar como máximo el formato 1234-5678-9012-3456-7890";
const mensajeErrorMetodoDePago_Efectivo = "error en el metodo de pago efectivo";


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

const mensajeErrorFoto = "el URL de la foto del vehiculo es incorrecto";
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




// const regexNombreDeUsuario = /^[a-zA-Z]{3,10}-?_?.?[a-zA-Z]{3,10}$/
// const mensajeErrorNombreDeUsuario = "El nombre de usuario es inválido, sólo se permite: letras mayúsculas y minúsculas entre 3 y 10 carácteres, - ó _ ó . y no se permiten espacios. Ejemplos: Skye_skye ó zambrano-mnk ó enavila.dev";



module.exports = {
    regexID,
    mensajeErrorID,

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
    regexMetodoDePago_Efectivo,

    
    mensajeErrorURL,
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
    mensajeErrorMetodoDePago_Efectivo,

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

    mensajeErrorFoto,
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
    mensajeErrorConsumoCarretera,
};