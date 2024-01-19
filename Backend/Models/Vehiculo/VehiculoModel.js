const mongoose = require('mongoose');

const {regexFoto, regexPrecio, regexMarca, regexModelo, regexAnio, regexColor, regexTipoCarroceria, regexTipoMotor, regexCilindraje, regexPotenciaHP, regexTransmision, regexTraccion, regexNumeroPuertas, regexCapacidadPasajeros, regexKilometraje, regexSistemaDeFrenos, regexBolsasDeAire, regexPantallaTactil, regexNavegacionGPS, regexBluetooth, regexAireAcondicionado, regexTipoDeAsientos, regexLongitudMM, regexAnchoMM, regexAlturaMM, regexPesoKG, regexConsumoCiudad, regexConsumoCarretera} = require ("../../Components/Regex");


const vehiculoEsquema = new mongoose.Schema({
    fecha_registro: {
        type: Date,
        default: Date.now
    },
    fecha_modificacion: {
        type: Date,
        default: Date.now
    },
    foto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    anio: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    tipo_carroceria: {
        type: String,
        default: "sin información"
    },
    motor: {
        tipo_motor: {
            type: String,
            default: "sin información"
        },
        cilindraje: {
            type: Number,
        },
        potencia_hp: {
            type: Number,
        }
    },
    transmision: {
        type: String,
        default: "sin información"
    },
    traccion: {
        type: String,
        default: "sin información"
    },
    numero_puertas: {
        type: Number,
    },
    capacidad_pasajeros: {
        type: Number,
    },
    kilometraje: {
        type: Number,
    },
    sistema_frenos: {
        type: String,
        default: "sin información"
    },
    bolsas_de_aire: {
        type: Number,
    },
    sistema_entretenimiento: {
        pantalla_tactil: {
            type: String,
            default: "sin información"
        },
        navegacion_gps: {
            type: String,
            default: "sin información"
        },
        bluetooth: {
            type: String,
            default: "sin información"
        }
    },
    aire_acondicionado: {
        type: String,
        default: "sin información"
    },
    tipo_asientos: {
        type: String,
        default: "sin información"
    },
    dimensiones: {
        longitud_mm: {
            type: Number,
        },
        ancho_mm: {
            type: Number,
        },
        altura_mm: {
            type: Number,
        }
    },
    peso_kg: {
        type: Number,
    },
    consumo_combustible: {
        ciudad_kmpl: {
            type: Number,
        },
        carretera_kmpl: {
            type: Number,
        }
    },
});



vehiculoEsquema.methods.validarFoto = function() {
    return regexFoto.test(this.foto);
}
vehiculoEsquema.methods.validarPrecio = function() {
    return regexPrecio.test(this.precio);
}
vehiculoEsquema.methods.validarMarca = function() {
    return regexMarca.test(this.marca);
}
vehiculoEsquema.methods.validarModelo = function() {
    return regexModelo.test(this.modelo);
}
vehiculoEsquema.methods.validarAnio = function() {
    return regexAnio.test(this.anio);
}
vehiculoEsquema.methods.validarColor = function() {
    return regexColor.test(this.color);
}
vehiculoEsquema.methods.validarTipoCarroceria = function() {
    return regexTipoCarroceria.test(this.tipo_carroceria);
}
vehiculoEsquema.methods.validarTipoMotor = function() {
    return regexTipoMotor.test(this.motor.tipo_motor);
}
vehiculoEsquema.methods.validarCilindraje = function() {
    return regexCilindraje.test(this.motor.cilindraje);
}
vehiculoEsquema.methods.validarPotenciaHP = function() {
    return regexPotenciaHP.test(this.motor.potencia_hp);
}
vehiculoEsquema.methods.validarTransmision = function() {
    return regexTransmision.test(this.transmision);
}
vehiculoEsquema.methods.validarTraccion = function() {
    return regexTraccion.test(this.traccion);
}
vehiculoEsquema.methods.validarNumeroPuertas = function() {
    return regexNumeroPuertas.test(this.numero_puertas);
}
vehiculoEsquema.methods.validarCapacidadPasajeros = function() {
    return regexCapacidadPasajeros.test(this.capacidad_pasajeros);
}
vehiculoEsquema.methods.validarKilometraje = function() {
    return regexKilometraje.test(this.kilometraje);
}
vehiculoEsquema.methods.validarSistemaDeFrenos = function() {
    return regexSistemaDeFrenos.test(this.sistema_frenos);
}
vehiculoEsquema.methods.validarBolsasDeAire = function() {
    return regexBolsasDeAire.test(this.bolsas_de_aire);
}
vehiculoEsquema.methods.validarPantallaTactil = function() {
    return regexPantallaTactil.test(this.sistema_entretenimiento.pantalla_tactil);
}
vehiculoEsquema.methods.validarNavegacionGPS = function() {
    return regexNavegacionGPS.test(this.sistema_entretenimiento.navegacion_gps);
}
vehiculoEsquema.methods.validarBluetooth = function() {
    return regexBluetooth.test(this.sistema_entretenimiento.bluetooth);
}
vehiculoEsquema.methods.validarAireAcondicionado = function() {
    return regexAireAcondicionado.test(this.aire_acondicionado);
}
vehiculoEsquema.methods.validarTipoDeAsientos = function() {
    return regexTipoDeAsientos.test(this.tipo_asientos);
}
vehiculoEsquema.methods.validarLongitudMM = function() {
    return regexLongitudMM.test(this.dimensiones.longitud_mm);
}
vehiculoEsquema.methods.validarAnchoMM = function() {
    return regexAnchoMM.test(this.dimensiones.ancho_mm);
}
vehiculoEsquema.methods.validarAlturaMM = function() {
    return regexAlturaMM.test(this.dimensiones.altura_mm);
}
vehiculoEsquema.methods.validarPesoKG = function() {
    return regexPesoKG.test(this.peso_kg);
}
vehiculoEsquema.methods.validarConsumoCiudad = function() {
    return regexConsumoCiudad.test(this.consumo_combustible.ciudad_kmpl);
}
vehiculoEsquema.methods.validarConsumoCarretera = function() {
    return regexConsumoCarretera.test(this.consumo_combustible.carretera_kmpl);
}




const Vehiculo = mongoose.model("vehiculos", vehiculoEsquema);

module.exports = Vehiculo;