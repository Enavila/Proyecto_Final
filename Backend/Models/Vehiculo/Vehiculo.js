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
        cilindrada: {
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


const Vehiculo = mongoose.model("vehiculos", vehiculoEsquema);

module.exports = Vehiculo;