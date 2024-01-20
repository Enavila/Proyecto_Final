const {regexFoto, regexPrecio, regexMarca, regexModelo, regexAnio, regexColor, regexTipoCarroceria, regexTipoMotor, regexCilindraje, regexPotenciaHP, regexTransmision, regexTraccion, regexNumeroPuertas, regexCapacidadPasajeros, regexKilometraje, regexSistemaDeFrenos, regexBolsasDeAire, regexPantallaTactil, regexNavegacionGPS, regexBluetooth, regexAireAcondicionado, regexTipoDeAsientos, regexLongitudMM, regexAnchoMM, regexAlturaMM, regexPesoKG, regexConsumoCiudad, regexConsumoCarretera} = require ("./Regex");
const {mensajeErrorFoto, mensajeErrorID, mensajeErrorPrecio, mensajeErrorMarca, mensajeErrorModelo, mensajeErrorAnio, mensajeErrorColor, mensajeErrorTipoCarroceria, mensajeErrorTipoMotor, mensajeErrorCilindraje, mensajeErrorPotenciaHP, mensajeErrorTransmision, mensajeErrorTraccion, mensajeErrorNumeroPuertas, mensajeErrorCapacidadPasajeros, mensajeErrorKilometraje, mensajeErrorSistemaDeFrenos, mensajeErrorBolsasDeAire, mensajeErrorPantallaTactil, mensajeErrorNavegacionGPS, mensajeErrorBluetooth, mensajeErrorAireAcondicionado, mensajeErrorTipoDeAsientos, mensajeErrorLongitudMM, mensajeErrorAnchoMM, mensajeErrorAlturaMM, mensajeErrorPesoKG, mensajeErrorConsumoCiudad, mensajeErrorConsumoCarretera } = require ("./Regex");

function FuncionValidarRegistroVehiculo(datosVehiculo){
    FuncionValidarFoto(datosVehiculo.foto);
    FuncionValidarPrecio(datosVehiculo.precio);
    FuncionValidarMarca(datosVehiculo.marca);
    FuncionValidarModelo(datosVehiculo.modelo);
    FuncionValidarAnio(datosVehiculo.anio);
    FuncionValidarColor(datosVehiculo.color);
    FuncionValidarTipoCarroceria(datosVehiculo.tipo_carroceria);
    FuncionValidarTipoMotor(datosVehiculo.motor.tipo_motor);
    FuncionValidarCilindraje(datosVehiculo.motor.cilindraje);
    FuncionValidarPotenciaHP(datosVehiculo.motor.potencia_hp);
    FuncionValidarTransmision(datosVehiculo.transmision);
    FuncionValidarTraccion(datosVehiculo.traccion);
    FuncionValidarNumeroPuertas(datosVehiculo.numero_puertas);
    FuncionValidarCapacidadPasajeros(datosVehiculo.capacidad_pasajeros);
    FuncionValidarKilometraje(datosVehiculo.kilometraje);
    FuncionValidarSistemaDeFrenos(datosVehiculo.sistema_de_frenos);
    FuncionValidarBolsasDeAire(datosVehiculo.bolsas_de_aire);
    FuncionValidarPantallaTactil(datosVehiculo.sistema_entretenimiento.pantalla_tactil);
    FuncionValidarNavegacionGPS(datosVehiculo.sistema_entretenimiento.navegacion_gps);
    FuncionValidarBluetooth(datosVehiculo.sistema_entretenimiento.bluetooth);
    FuncionValidarAireAcondicionado(datosVehiculo.aire_acondicionado);
    FuncionValidarTipoDeAsientos(datosVehiculo.tipo_de_asientos);
    FuncionValidarLongitudMM(datosVehiculo.dimensiones.longitud_mm);
    FuncionValidarAnchoMM(datosVehiculo.dimensiones.ancho_mm);
    FuncionValidarAlturaMM(datosVehiculo.dimensiones.altura_mm);
    FuncionValidarPesoKG(datosVehiculo.peso_kg);
    FuncionValidarConsumoCiudad(datosVehiculo.consumo_combustible.ciudad_kmpl);
    FuncionValidarConsumoCarretera(datosVehiculo.consumo_combustible.carretera_kmpl);
    return true;
}

function FuncionValidarActualizacionVehiculo (nuevosDatos){
    if (nuevosDatos.foto){
        FuncionValidarFoto(nuevosDatos.foto);
    }
    if (nuevosDatos.precio){
        FuncionValidarPrecio(nuevosDatos.precio);
    }
    if (nuevosDatos.marca){
        FuncionValidarMarca(nuevosDatos.marca);
    }
    if (nuevosDatos.modelo){
        FuncionValidarModelo(nuevosDatos.modelo);
    }
    if (nuevosDatos.anio){
        FuncionValidarAnio(nuevosDatos.anio);
    }
    if (nuevosDatos.color){
        FuncionValidarColor(nuevosDatos.color);
    }
    if (nuevosDatos.tipo_carroceria){
        FuncionValidarTipoCarroceria(nuevosDatos.tipo_carroceria);
    }
    if (nuevosDatos.motor.tipo_motor){
        FuncionValidarTipoMotor(nuevosDatos.motor.tipo_motor);
    }
    if (nuevosDatos.motor.cilindraje){
        FuncionValidarCilindraje(nuevosDatos.motor.cilindraje);
    }
    if (nuevosDatos.motor.potencia_hp){
        FuncionValidarPotenciaHP(nuevosDatos.motor.potencia_hp);
    }
    if (nuevosDatos.transmision){
        FuncionValidarTransmision(nuevosDatos.transmision);
    }
    if (nuevosDatos.traccion){
        FuncionValidarTraccion(nuevosDatos.traccion);
    }
    if (nuevosDatos.numero_puertas){
        FuncionValidarNumeroPuertas(nuevosDatos.numero_puertas);
    }
    if (nuevosDatos.capacidad_pasajeros){
        FuncionValidarCapacidadPasajeros(nuevosDatos.capacidad_pasajeros);
        
    }
    if (nuevosDatos.kilometraje){
        FuncionValidarKilometraje(nuevosDatos.kilometraje);
    }
    if (nuevosDatos.sistema_de_frenos){
        FuncionValidarSistemaDeFrenos(nuevosDatos.sistema_de_frenos);
    }
    if (nuevosDatos.bolsas_de_aire){
        FuncionValidarBolsasDeAire(nuevosDatos.bolsas_de_aire);
    }
    if (nuevosDatos.sistema_entretenimiento.pantalla_tactil){
        FuncionValidarPantallaTactil(nuevosDatos.sistema_entretenimiento.pantalla_tactil);
    }
    if (nuevosDatos.sistema_entretenimiento.navegacion_gps){
        FuncionValidarNavegacionGPS(nuevosDatos.sistema_entretenimiento.navegacion_gps);
    }
    if (nuevosDatos.sistema_entretenimiento.bluetooth){
        FuncionValidarBluetooth(nuevosDatos.sistema_entretenimiento.bluetooth);
    }
    if (nuevosDatos.aire_acondicionado){
        FuncionValidarAireAcondicionado(nuevosDatos.aire_acondicionado);
    }
    if (nuevosDatos.tipo_de_asientos){
        FuncionValidarTipoDeAsientos(nuevosDatos.tipo_de_asientos);
    }
    if (nuevosDatos.dimensiones.longitud_mm){
        FuncionValidarLongitudMM(nuevosDatos.dimensiones.longitud_mm);
    }
    if (nuevosDatos.dimensiones.ancho_mm){
        FuncionValidarAnchoMM(nuevosDatos.dimensiones.ancho_mm);
    }
    if (nuevosDatos.dimensiones.altura_mm){
        FuncionValidarAlturaMM(nuevosDatos.dimensiones.altura_mm);
    }
    if (nuevosDatos.peso_kg){
        FuncionValidarPesoKG(nuevosDatos.peso_kg);
    }
    if (nuevosDatos.consumo_combustible.ciudad_kmpl){
        FuncionValidarConsumoCiudad(nuevosDatos.consumo_combustible.ciudad_kmpl);
    }
    if (nuevosDatos.consumo_combustible.carretera_kmpl){
        FuncionValidarConsumoCarretera(nuevosDatos.consumo_combustible.carretera_kmpl);
    }
}

function FuncionValidarID(id){
    if (!regexID.test(id)) {
        throw new Error(`${mensajeErrorID}`);
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

function FuncionValidarPrecio(precio) {
    if (!regexPrecio.test(precio)) {
        throw new Error(`${mensajeErrorPrecio}`);
    } else {
        return true;
    }
}

function FuncionValidarMarca(marca) {
    if (!regexMarca.test(marca)) {
        throw new Error(`${mensajeErrorMarca}`);
    } else {
        return true;
    }
}

function FuncionValidarModelo(modelo) {
    if (!regexModelo.test(modelo)) {
        throw new Error(`${mensajeErrorModelo}`);
    } else {
        return true;
    }
}

function FuncionValidarAnio(anio) {
    if (!regexAnio.test(anio)) {
        throw new Error(`${mensajeErrorAnio}`);
    } else {
        return true;
    }
}

function FuncionValidarColor(color) {
    if (!regexColor.test(color)) {
        throw new Error(`${mensajeErrorColor}`);
    } else {
        return true;
    }
}

function FuncionValidarTipoCarroceria(tipo_carroceria) {
    if (!regexTipoCarroceria.test(tipo_carroceria)) {
        throw new Error(`${mensajeErrorTipoCarroceria}`);
    } else {
        return true;
    }
}

function FuncionValidarTipoMotor(tipo_motor) {
    if (!regexTipoMotor.test(tipo_motor)) {
        throw new Error(`${mensajeErrorTipoMotor}`);
    } else {
        return true;
    }
}

function FuncionValidarCilindraje(cilindraje) {
    if (!regexCilindraje.test(cilindraje)) {
        throw new Error(`${mensajeErrorCilindraje}`);
    } else {
        return true;
    }
}

function FuncionValidarPotenciaHP(potencia_hp) {
    if (!regexPotenciaHP.test(potencia_hp)) {
        throw new Error(`${mensajeErrorPotenciaHP}`);
    } else {
        return true;
    }
}

function FuncionValidarTransmision(transmision) {
    if (!regexTransmision.test(transmision)) {
        throw new Error(`${mensajeErrorTransmision}`);
    } else {
        return true;
    }
}

function FuncionValidarTraccion(traccion) {
    if (!regexTraccion.test(traccion)) {
        throw new Error(`${mensajeErrorTraccion}`);
    } else {
        return true;
    }
}

function FuncionValidarNumeroPuertas(numero_puertas) {
    if (!regexNumeroPuertas.test(numero_puertas)) {
        throw new Error(`${mensajeErrorNumeroPuertas}`);
    } else {
        return true;
    }
}

function FuncionValidarCapacidadPasajeros(capacidad_pasajeros) {
    if (!regexCapacidadPasajeros.test(capacidad_pasajeros)) {
        throw new Error(`${mensajeErrorCapacidadPasajeros}`);
    } else {
        return true;
    }
}

function FuncionValidarKilometraje(kilometraje) {
    if (!regexKilometraje.test(kilometraje)) {
        throw new Error(`${mensajeErrorKilometraje}`);
    } else {
        return true;
    }
}

function FuncionValidarSistemaDeFrenos(sistema_de_frenos) {
    if (!regexSistemaDeFrenos.test(sistema_de_frenos)) {
        throw new Error(`${mensajeErrorSistemaDeFrenos}`);
    } else {
        return true;
    }
}

function FuncionValidarBolsasDeAire(bolsas_de_aire) {
    if (!regexBolsasDeAire.test(bolsas_de_aire)) {
        throw new Error(`${mensajeErrorBolsasDeAire}`);
    } else {
        return true;
    }
}

function FuncionValidarPantallaTactil(pantalla_tactil) {
    if (!regexPantallaTactil.test(pantalla_tactil)) {
        throw new Error(`${mensajeErrorPantallaTactil}`);
    } else {
        return true;
    }
}

function FuncionValidarNavegacionGPS(navegacion_gps) {
    if (!regexNavegacionGPS.test(navegacion_gps)) {
        throw new Error(`${mensajeErrorNavegacionGPS}`);
    } else {
        return true;
    }
}

function FuncionValidarBluetooth(bluetooth) {
    if (!regexBluetooth.test(bluetooth)) {
        throw new Error(`${mensajeErrorBluetooth}`);
    } else {
        return true;
    }
}

function FuncionValidarAireAcondicionado(aire_acondicionado) {
    if (!regexAireAcondicionado.test(aire_acondicionado)) {
        throw new Error(`${mensajeErrorAireAcondicionado}`);
    } else {
        return true;
    }
}

function FuncionValidarTipoDeAsientos(tipo_de_asientos) {
    if (!regexTipoDeAsientos.test(tipo_de_asientos)) {
        throw new Error(`${mensajeErrorTipoDeAsientos}`);
    } else {
        return true;
    }
}

function FuncionValidarLongitudMM(longitud_mm) {
    if (!regexLongitudMM.test(longitud_mm)) {
        throw new Error(`${mensajeErrorLongitudMM}`);
    } else {
        return true;
    }
}

function FuncionValidarAnchoMM(ancho_mm) {
    if (!regexAnchoMM.test(ancho_mm)) {
        throw new Error(`${mensajeErrorAnchoMM}`);
    } else {
        return true;
    }
}

function FuncionValidarAlturaMM(altura_mm) {
    if (!regexAlturaMM.test(altura_mm)) {
        throw new Error(`${mensajeErrorAlturaMM}`);
    } else {
        return true;
    }
}

function FuncionValidarPesoKG(peso_kg) {
    if (!regexPesoKG.test(peso_kg)) {
        throw new Error(`${mensajeErrorPesoKG}`);
    } else {
        return true;
    }
}

function FuncionValidarConsumoCiudad(consumo_ciudad) {
    if (!regexConsumoCiudad.test(consumo_ciudad)) {
        throw new Error(`${mensajeErrorConsumoCiudad}`);
    } else {
        return true;
    }
}

function FuncionValidarConsumoCarretera(consumo_carretera) {
    if (!regexConsumoCarretera.test(consumo_carretera)) {
        throw new Error(`${mensajeErrorConsumoCarretera}`);
    } else {
        return true;
    }
}

module.exports = {
    FuncionValidarRegistroVehiculo,
    FuncionValidarActualizacionVehiculo,
    FuncionValidarID,
    FuncionValidarFoto,
    FuncionValidarPrecio,
    FuncionValidarMarca,
    FuncionValidarModelo,
    FuncionValidarAnio,
    FuncionValidarColor,
    FuncionValidarTipoCarroceria,
    FuncionValidarTipoMotor,
    FuncionValidarCilindraje,
    FuncionValidarPotenciaHP,
    FuncionValidarTransmision,
    FuncionValidarTraccion,
    FuncionValidarNumeroPuertas,
    FuncionValidarCapacidadPasajeros,
    FuncionValidarKilometraje,
    FuncionValidarSistemaDeFrenos,
    FuncionValidarBolsasDeAire,
    FuncionValidarPantallaTactil,
    FuncionValidarNavegacionGPS,
    FuncionValidarBluetooth,
    FuncionValidarAireAcondicionado,
    FuncionValidarTipoDeAsientos,
    FuncionValidarLongitudMM,
    FuncionValidarAnchoMM,
    FuncionValidarAlturaMM,
    FuncionValidarPesoKG,
    FuncionValidarConsumoCiudad,
    FuncionValidarConsumoCarretera
}