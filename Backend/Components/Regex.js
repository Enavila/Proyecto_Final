const regexID = /^[a-z0-9]{1,24}$/;
const regexURL = /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;

const mensajeErrorID = "El ID es incorrecto, requiere 24 caracteres y se permiten solo letras de la a a la z y numeros del 0 al 9 ";
const mensajeErrorURL = "El URL de la foto para el usuario es incorrecto";

const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexEdad = /^[0-9]{1,2}$/;
const regexPais = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexCiudad = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexDireccion = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'#\s]{1,100}$/;
const regexCorreo = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,10}$/;
const regexContrasena = /^[a-zA-Z0-9*_.#]{1,}$/;
const regexTelefono = /^\+{\d{1,2}(-|\s)\d{1,4}(-|\s)\d{1,4}(-|\s)\d{1,4}(-|\s)\d{1,4}}$/;
const regexDocumentoIdentidad = /^[VEJP]{1}[-]\d{2,8}(.|-)\d{1,3}(.)\d{1,3}$/;
const regexMetodoDePago_Banco =/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexMetodoDePago_NumeroCuenta = /^\d{4}-\d{4}-\d{4}-\d{4}-\d{4}$/;
const regexMetodoDePago_Efectivo = /^[SsIiÍíNnOo]{2}$/;

const mensajeErrorNombre = "El nombre es incorrecto, se permiten solo letras, acentos, espacios y el carácter especial ' ";
const mensajeErrorApellido = "El Apellido es incorrecto, se permiten solo letras, acentos, espacios y el carácter especial ' ";
const mensajeErrorEdad = "La Edad es incorrecta, se permiten solo numeros desde 0 hasta 99 a partir de 18 años";
const mensajeErrorPais = "El pais es incorrecto, se permiten solo letras, acentos, espacios y el carácter especial ' ";
const mensajeErrorCiudad = "La ciudad es incorrecta, se permiten solo letras, acentos, espacios y el carácter especial ' ";
const mensajeErrorDireccion = "La dirección es incorrecta, se permiten solo letras, acentos, espacios y carácteres especiales ' y # ";
const mensajeErrorCorreo = "El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension";
const mensajeErrorContrasena = "La contraseña es incorrecta, se permiten solo letras minusculas y mayusculas, numeros y solo los caracteres especiales * _ . # sin espacios";
const mensajeErrorTelefono = "El telefono es incorrecto, debe respetar como máximo el formato +11-1111-1111-1111 o  +11 1111 1111 1111";
const mensajeErrorFotoPerfil = "La URL de la imagen de perfil es incorrecto.";
const mensajeErrorDocumentoIdentidad = "El documento de identidad es incorrecto, debe respetar el formato E-11.111.111, V-11.111.111, J-11111111-1 o P-111111111.";
const mensajeErrorFotoFrontalRostro = "El URL de la foto frontal del rostro es incorrecto.";
const mensajeErrorFotoDocumentoIdentidad = "El URL de la foto para documento de identidad es incorrecto.";
const mensajeErrorMetodoDePago_Banco = "El nombre del banco es incorrecto, se permiten solo letras, acentos, espacios y el carácter especial ' ";
const mensajeErrorMetodoDePago_NumeroCuenta = "El número de cuenta es incorrecto, debe respetar como máximo el formato 1234-5678-9012-3456-7890";
const mensajeErrorMetodoDePago_Efectivo = "El metodo de pago efectivo es incorrecta, se permite solo Si o No en sus respectivas combinaciones con mayusculas y acentos";


const regexPrecio = /^[0-9.]{1,15}$/;
const regexMarca = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexModelo = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexAnio = /^[0-9]{4}$/;
const regexColor = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,100}$/;
const regexKilometraje = /^[0-9.]{1,}$/;
const regexTipoCarroceria = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexTipoMotor = /^[0-9a-zA-ZáéíóúÁÉÍÓÚüÜñÑ'\s]{1,100}$/;
const regexCilindraje = /^[0-9.]{1,50}$/;
const regexPotenciaHP = /^[0-9.]{1,50}$/;
const regexTransmision = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,100}$/;
const regexTraccion = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,100}$/;
const regexNumeroPuertas = /^[0-9]{1,3}$/;
const regexCapacidadPasajeros = /^[0-9]{1,3}$/;
const regexSistemaDeFrenos = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,100}$/;
const regexBolsasDeAire = /^[0-9]{1,3}$/;
const regexPantallaTactil = /^[SsIiÍíNnOo]{2}$/;
const regexNavegacionGPS = /^[SsIiÍíNnOo]{2}$/;
const regexBluetooth = /^[SsIiÍíNnOo]{2}$/;
const regexAireAcondicionado = /^[SsIiÍíNnOo]{2}$/;
const regexTipoDeAsientos = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{1,100}$/;
const regexLongitudMM = /^[0-9.]{1,6}$/;
const regexAnchoMM = /^[0-9.]{1,6}$/;
const regexAlturaMM = /^[0-9.]{1,6}$/;
const regexPesoKG = /^[0-9.]{1,6}$/;
const regexConsumoCiudad = /^[0-9]{1,3}$/;
const regexConsumoCarretera = /^[0-9]{1,3}$/;

const mensajeErrorFotosVehiculo = "el URL de la foto del vehiculo es incorrecto";
const mensajeErrorPrecio = "El precio es incorrecto, debe ser un valor numérico desde 1 hasta 999.999.999.999 sin , ni espacios";
const mensajeErrorMarca = "La marca es incorrecta, se permiten solo letras, acentos, comilla simple y espacios";
const mensajeErrorModelo = "El modelo es incorrecto, se permiten solo letras, acentos, comilla simple y espacios";
const mensajeErrorAnio = "El año es incorrecto, debe ser un valor numérico de maximo 4 digitos";
const mensajeErrorColor = "El color es incorrecto, se permiten solo letras, acentos y espacios";
const mensajeErrorKilometraje = "El kilometraje es incorrecto, se permite solo números y puntos, sin espacios ";
const mensajeErrorTipoCarroceria = "El tipo de carroceria es incorrecto, se permiten solo letras, acentos, comilla simple y espacios";
const mensajeErrorTipoMotor = "El tipo de motor es incorrecto, se permiten solo letras, acentos, comilla simple y espacios";
const mensajeErrorCilindraje = "El cilindraje es incorrecto, se permite solo números y puntos, sin espacios";
const mensajeErrorPotenciaHP = "La potencia es incorrecta, se permite solo números y puntos, sin espacios";
const mensajeErrorTransmision = "La transmision es incorrecta, se permiten solo letras, acentos y espacios";
const mensajeErrorTraccion = "La traccion es incorrecta, se permiten solo letras, acentos y espacios";
const mensajeErrorNumeroPuertas = "El numero de puertas es incorrecto, se permite solo números y puntos, sin espacios";
const mensajeErrorCapacidadPasajeros = "La capacidad de pasajeros es incorrecta, se permite solo números y puntos, sin espacios";
const mensajeErrorSistemaDeFrenos = "El sistema de frenos es incorrecto, se permiten solo letras, acentos y espacios";
const mensajeErrorBolsasDeAire = "Las bolsas de aire son incorrectas, se permiten solo letras, acentos y espacios";
const mensajeErrorPantallaTactil = "La pantalla tactil es incorrecta, se permite solo Si o No en sus respectivas combinaciones con mayusculas y acentos";
const mensajeErrorNavegacionGPS = "La navegacion GPS es incorrecta, se permite solo Si o No en sus respectivas combinaciones con mayusculas y acentos";
const mensajeErrorBluetooth = "El bluetooth es incorrecto, se permite solo Si o No en sus respectivas combinaciones con mayusculas y acentos";
const mensajeErrorAireAcondicionado = "El aire acondicionado es incorrecto, se permite solo Si o No en sus respectivas combinaciones con mayusculas y acentos";
const mensajeErrorTipoDeAsientos = "El tipo de asientos es incorrecto, se permite solo Si o No en sus respectivas combinaciones con mayusculas y acentos";
const mensajeErrorLongitudMM = "La longitud es incorrecta, se permite solo números y puntos, sin espacios";
const mensajeErrorAnchoMM = "El ancho es incorrecto, se permite solo números y puntos, sin espacios";
const mensajeErrorAlturaMM = "La altura es incorrecta, se permite solo números y puntos, sin espacios";
const mensajeErrorPesoKG = "El peso es incorrecto, se permite solo números y puntos, sin espacios";
const mensajeErrorConsumoCiudad = "El consumo en ciudad es incorrecto, se permite solo números y puntos, sin espacios";
const mensajeErrorConsumoCarretera = "El consumo en carretera es incorrecto, se permite solo números y puntos, sin espacios";




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

    mensajeErrorFotosVehiculo,
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