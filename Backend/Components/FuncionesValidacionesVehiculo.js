const {
    regexID,
    regexURL,
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
    regexConsumoCarretera
} = require ("./Regex");

const {
    mensajeErrorID,
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
    mensajeErrorConsumoCarretera
} = require ("./Regex");

function FuncionValidarRegistroVehiculo(datosVehiculo){
    FuncionValidarID(datosVehiculo.idVendedor);
    FuncionValidarFoto(datosVehiculo.foto);
    FuncionValidarPrecio(datosVehiculo.precio);
    FuncionValidarMarca(datosVehiculo.marca);
    FuncionValidarModelo(datosVehiculo.modelo);
    FuncionValidarAnio(datosVehiculo.anio);
    FuncionValidarColor(datosVehiculo.color);
    FuncionValidarKilometraje(datosVehiculo.kilometraje);
    if (datosVehiculo.tipo_carroceria){
        FuncionValidarTipoCarroceria(datosVehiculo.tipo_carroceria);
    }
    if (datosVehiculo.motor){
        if (datosVehiculo.motor.tipo_motor){
            FuncionValidarTipoMotor(datosVehiculo.motor.tipo_motor);
        }
        if (datosVehiculo.motor.cilindraje){
            FuncionValidarCilindraje(datosVehiculo.motor.cilindraje);
        }
        if (datosVehiculo.motor.potencia_hp){
            FuncionValidarPotenciaHP(datosVehiculo.motor.potencia_hp);
        }
    }
    if (datosVehiculo.transmision){
        FuncionValidarTransmision(datosVehiculo.transmision);
    }
    if (datosVehiculo.traccion){
        FuncionValidarTraccion(datosVehiculo.traccion);
    }
    if (datosVehiculo.numero_puertas){
        FuncionValidarNumeroPuertas(datosVehiculo.numero_puertas);
    }
    if (datosVehiculo.capacidad_pasajeros){
        FuncionValidarCapacidadPasajeros(datosVehiculo.capacidad_pasajeros);
    }
    if (datosVehiculo.sistema_de_frenos){
        FuncionValidarSistemaDeFrenos(datosVehiculo.sistema_de_frenos);
    }
    if (datosVehiculo.bolsas_de_aire){
        FuncionValidarBolsasDeAire(datosVehiculo.bolsas_de_aire);
    }
    if (datosVehiculo.sistema_entretenimiento){
        if (datosVehiculo.sistema_entretenimiento.pantalla_tactil){
            FuncionValidarPantallaTactil(datosVehiculo.sistema_entretenimiento.pantalla_tactil);
        }
        if (datosVehiculo.sistema_entretenimiento.navegacion_gps){
            FuncionValidarNavegacionGPS(datosVehiculo.sistema_entretenimiento.navegacion_gps);
        }
        if (datosVehiculo.sistema_entretenimiento.bluetooth){
            FuncionValidarBluetooth(datosVehiculo.sistema_entretenimiento.bluetooth);
        }
    }
    if (datosVehiculo.aire_acondicionado){
        FuncionValidarAireAcondicionado(datosVehiculo.aire_acondicionado);
    }
    if (datosVehiculo.tipo_de_asientos){
        FuncionValidarTipoDeAsientos(datosVehiculo.tipo_de_asientos);
    }
    if (datosVehiculo.dimensiones){
        if (datosVehiculo.dimensiones.longitud_mm){
            FuncionValidarLongitudMM(datosVehiculo.dimensiones.longitud_mm);
        }
        if (datosVehiculo.dimensiones.ancho_mm){
            FuncionValidarAnchoMM(datosVehiculo.dimensiones.ancho_mm);
        }
        if (datosVehiculo.dimensiones.alto_mm){
            FuncionValidarAltoMM(datosVehiculo.dimensiones.alto_mm);
        }
    }
    if (datosVehiculo.peso_kg){
        FuncionValidarPesoKG(datosVehiculo.peso_kg);
    }
    if (datosVehiculo.consumo_combustible){
        if (datosVehiculo.consumo_combustible.ciudad_kmpl){
            FuncionValidarConsumoCiudad(datosVehiculo.consumo_combustible.ciudad_kmpl);
        }
        if (datosVehiculo.consumo_combustible.carretera_kmpl){
            FuncionValidarConsumoCarretera(datosVehiculo.consumo_combustible.carretera_kmpl);
        }
    }
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
    if (nuevosDatos.kilometraje){
        FuncionValidarKilometraje(nuevosDatos.kilometraje);
    }
    if (nuevosDatos.tipo_carroceria){
        FuncionValidarTipoCarroceria(nuevosDatos.tipo_carroceria);
    }
    if (nuevosDatos.motor){
        if (nuevosDatos.motor.tipo_motor){
            FuncionValidarTipoMotor(nuevosDatos.motor.tipo_motor);
        }
        if (nuevosDatos.motor.cilindraje){
            FuncionValidarCilindraje(nuevosDatos.motor.cilindraje);
        }
        if (nuevosDatos.motor.potencia_hp){
            FuncionValidarPotenciaHP(nuevosDatos.motor.potencia_hp);
        }
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
    if (nuevosDatos.sistema_de_frenos){
        FuncionValidarSistemaDeFrenos(nuevosDatos.sistema_de_frenos);
    }
    if (nuevosDatos.bolsas_de_aire){
        FuncionValidarBolsasDeAire(nuevosDatos.bolsas_de_aire);
    }
    if (nuevosDatos.sistema_entretenimiento){
        if (nuevosDatos.sistema_entretenimiento.pantalla_tactil){
            FuncionValidarPantallaTactil(nuevosDatos.sistema_entretenimiento.pantalla_tactil);
        }
        if (nuevosDatos.sistema_entretenimiento.navegacion_gps){
            FuncionValidarNavegacionGPS(nuevosDatos.sistema_entretenimiento.navegacion_gps);
        }
        if (nuevosDatos.sistema_entretenimiento.bluetooth){
            FuncionValidarBluetooth(nuevosDatos.sistema_entretenimiento.bluetooth);
        }
    }
    if (nuevosDatos.aire_acondicionado){
        FuncionValidarAireAcondicionado(nuevosDatos.aire_acondicionado);
    }
    if (nuevosDatos.tipo_de_asientos){
        FuncionValidarTipoDeAsientos(nuevosDatos.tipo_de_asientos);
    }
    if (nuevosDatos.dimensiones){
        if (nuevosDatos.dimensiones.longitud_mm){
            FuncionValidarLongitudMM(nuevosDatos.dimensiones.longitud_mm);
        }
        if (nuevosDatos.dimensiones.ancho_mm){
            FuncionValidarAnchoMM(nuevosDatos.dimensiones.ancho_mm);
        }
        if (nuevosDatos.dimensiones.altura_mm){
            FuncionValidarAlturaMM(nuevosDatos.dimensiones.altura_mm);
        }
    }
    if (nuevosDatos.peso_kg){
        FuncionValidarPesoKG(nuevosDatos.peso_kg);
    }
    if (nuevosDatos.consumo_combustible){
        if (nuevosDatos.consumo_combustible.ciudad_kmpl){
            FuncionValidarConsumoCiudad(nuevosDatos.consumo_combustible.ciudad_kmpl);
        }
        if (nuevosDatos.consumo_combustible.carretera_kmpl){
            FuncionValidarConsumoCarretera(nuevosDatos.consumo_combustible.carretera_kmpl);
        }
    }
    return true;
}

function FuncionValidarID(id){
    if (regexID.test(id)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorID}`);
    }
}

function FuncionValidarFoto(foto) {
    if (regexURL.test(foto)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorFoto}`);
    }
}

function FuncionValidarPrecio(precio) {
    if (regexPrecio.test(precio)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorPrecio}`);
    }
}

function FuncionValidarMarca(marca) {
    if (regexMarca.test(marca)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorMarca}`);
    }
}

function FuncionValidarModelo(modelo) {
    if (regexModelo.test(modelo)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorModelo}`);
    }
}

function FuncionValidarAnio(anio) {
    if (regexAnio.test(anio)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorAnio}`);
    }
}

function FuncionValidarColor(color) {
    if (regexColor.test(color)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorColor}`);
    }
}

function FuncionValidarTipoCarroceria(tipo_carroceria) {
    if (regexTipoCarroceria.test(tipo_carroceria)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorTipoCarroceria}`);
    }
}

function FuncionValidarTipoMotor(tipo_motor) {
    if (regexTipoMotor.test(tipo_motor)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorTipoMotor}`);
    }
}

function FuncionValidarCilindraje(cilindraje) {
    if (regexCilindraje.test(cilindraje)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorCilindraje}`);
    }
}

function FuncionValidarPotenciaHP(potencia_hp) {
    if (regexPotenciaHP.test(potencia_hp)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorPotenciaHP}`);
    }
}

function FuncionValidarTransmision(transmision) {
    if (regexTransmision.test(transmision)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorTransmision}`);
    }
}

function FuncionValidarTraccion(traccion) {
    if (regexTraccion.test(traccion)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorTraccion}`);
    }
}

function FuncionValidarNumeroPuertas(numero_puertas) {
    if (regexNumeroPuertas.test(numero_puertas)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorNumeroPuertas}`);
    }
}

function FuncionValidarCapacidadPasajeros(capacidad_pasajeros) {
    if (regexCapacidadPasajeros.test(capacidad_pasajeros)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorCapacidadPasajeros}`);
    }
}

function FuncionValidarKilometraje(kilometraje) {
    if (regexKilometraje.test(kilometraje)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorKilometraje}`);
    }
}

function FuncionValidarSistemaDeFrenos(sistema_de_frenos) {
    if (regexSistemaDeFrenos.test(sistema_de_frenos)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorSistemaDeFrenos}`);
    }
}

function FuncionValidarBolsasDeAire(bolsas_de_aire) {
    if (regexBolsasDeAire.test(bolsas_de_aire)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorBolsasDeAire}`);
    }
}

function FuncionValidarPantallaTactil(pantalla_tactil) {
    if (regexPantallaTactil.test(pantalla_tactil)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorPantallaTactil}`);
    }
}

function FuncionValidarNavegacionGPS(navegacion_gps) {
    if (regexNavegacionGPS.test(navegacion_gps)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorNavegacionGPS}`);
    }
}

function FuncionValidarBluetooth(bluetooth) {
    if (regexBluetooth.test(bluetooth)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorBluetooth}`);
    }
}

function FuncionValidarAireAcondicionado(aire_acondicionado) {
    if (regexAireAcondicionado.test(aire_acondicionado)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorAireAcondicionado}`);
    }
}

function FuncionValidarTipoDeAsientos(tipo_de_asientos) {
    if (regexTipoDeAsientos.test(tipo_de_asientos)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorTipoDeAsientos}`);
    }
}

function FuncionValidarLongitudMM(longitud_mm) {
    if (regexLongitudMM.test(longitud_mm)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorLongitudMM}`);
    }
}

function FuncionValidarAnchoMM(ancho_mm) {
    if (regexAnchoMM.test(ancho_mm)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorAnchoMM}`);
    }
}

function FuncionValidarAlturaMM(altura_mm) {
    if (regexAlturaMM.test(altura_mm)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorAlturaMM}`);
    }
}

function FuncionValidarPesoKG(peso_kg) {
    if (regexPesoKG.test(peso_kg)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorPesoKG}`);
    }
}

function FuncionValidarConsumoCiudad(consumo_ciudad) {
    if (regexConsumoCiudad.test(consumo_ciudad)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorConsumoCiudad}`);
    }
}

function FuncionValidarConsumoCarretera(consumo_carretera) {
    if (regexConsumoCarretera.test(consumo_carretera)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorConsumoCarretera}`);
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