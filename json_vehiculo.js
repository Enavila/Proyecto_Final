// Importamos mongoose
const mongoose = require('mongoose');

const productoEsquema = new mongoose.Schema({
    fecha_registro: {
        type: Date,
        default: Date.now
    },
    fecha_modificacion: {
        type: Date,
        default: Date.now
    },
    foto: {
        type: String
    },
    precio: {
        type: Number
    },
    marca: {
        type: String
    },
    modelo: {
        type: String
    },
    anio: {
        type: Number
    },
    color: {
        type: String
    },
    tipo_carroceria: {
        type: String,
        default: "sin información"
    },
    motor: {
        tipo: {
            type: String,
            default: "sin información"
        },
        cilindrada: {
            type: Number,
            default: "sin información"
        },
        potencia_hp: {
            type: Number,
            default: "sin información"
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
        default: "sin información"
    },
    capacidad_pasajeros: {
        type: Number,
        default: "sin información"
    },
    kilometraje: {
        type: Number,
        default: "sin información"
    },
    sistema_frenos: {
        type: String,
        default: "sin información"
    },
    airbags: {
        type: Number,
        default: "sin información"
    },
    sistema_entretenimiento: {
        pantalla_tactil: {
            type: Boolean,
            default: "sin información"
        },
        navegacion_gps: {
            type: Boolean,
            default: "sin información"
        },
        conectividad_bluetooth: {
            type: Boolean,
            default: "sin información"
        }
    },
    aire_acondicionado: {
        type: Boolean,
        default: "sin información"
    },
    asientos_tipo: {
        type: String,
        default: "sin información"
    },
    dimensiones: {
        longitud_mm: {
            type: Number,
            default: "sin información"
        },
        ancho_mm: {
            type: Number,
            default: "sin información"
        },
        altura_mm: {
            type: Number,
            default: "sin información"
        }
    },
    peso_kg: {
        type: Number,
        default: "sin información"
    },
    consumo_combustible: {
        ciudad_kmpl: {
            type: Number,
            default: "sin información"
        },
        carretera_kmpl: {
            type: Number,
            default: "sin información"
        }
    },

});


const Producto = mongoose.model("productos", productoEsquema);

module.exports = Producto;

