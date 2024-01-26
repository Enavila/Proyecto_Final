const mongoose = require('mongoose');

const vehiculoEsquema = new mongoose.Schema({
    fecha_registro: {
        type: Date,
        default: Date.now
    },
    fecha_modificacion: {
        type: Date,
        default: Date.now
    },
    idVendedor:{
        type: String
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
    kilometraje: {
        type: Number,
        required: true
    },
    tipo_carroceria: {
        type: String
    },
    motor: {
        tipo_motor: {
            type: String,
        },
        cilindraje: {
            type: Number,
        },
        potencia_hp: {
            type: Number,
        }
    },
    transmision: {
        type: String
    },
    traccion: {
        type: String
    },
    numero_puertas: {
        type: Number,
    },
    capacidad_pasajeros: {
        type: Number,
    },
    sistema_frenos: {
        type: String
    },
    bolsas_de_aire: {
        type: Number,
    },
    sistema_entretenimiento: {
        pantalla_tactil: {
            type: String,
        },
        navegacion_gps: {
            type: String,
        },
        bluetooth: {
            type: String,
        }
    },
    aire_acondicionado: {
        type: String
    },
    tipo_asientos: {
        type: String
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

const Vehiculo = mongoose.model("vehiculos", vehiculoEsquema);

module.exports = Vehiculo;