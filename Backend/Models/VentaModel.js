const mongoose = require('mongoose');

const ventaEsquema = new mongoose.Schema({
    vendedor:{

    },
    vehiculo:{
    
    },
    comprador: {

    },
    fecha_registro:{
        type: Date,
        default: Date.now
    },
    fecha_modificacion:{
        type: Date,
        default: Date.now
    }
});

const Venta = mongoose.model("ventas", ventaEsquema);

module.exports = Venta;
