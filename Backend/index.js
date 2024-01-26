const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const cowsay = require('cowsay');

const app = express();
const puerto = process.env.PORT;
const baseDeDatos = process.env.MONGODB_URI;

const rutaGetUsuarios = require("./Routes/GET/UsuariosGet");
const rutaGetUsuario = require("./Routes/GET/UsuarioGet");
const rutaPostUsuario = require("./Routes/POST/UsuarioPost");
const rutaPatchUsuario = require("./Routes/PATCH/UsuarioPatch");
const rutaDeleteUsuario = require("./Routes/DELETE/UsuarioDelete");

const rutaGetVehiculos = require("./Routes/GET/VehiculosGet");
const rutaGetVehiculo = require("./Routes/GET/VehiculoGet");
const rutaPostVehiculo = require("./Routes/POST/VehiculoPost");
const rutaPatchVehiculo = require("./Routes/PATCH/VehiculoPatch");
const rutaDeleteVehiculo = require("./Routes/DELETE/VehiculoDelete");

const rutaGetVentas = require("./Routes/GET/VentasGet");
const rutaGetVenta = require("./Routes/GET/VentaGet");
const rutaPostVenta = require("./Routes/POST/VentaPost");


async function conectarBD(URI){
    await mongoose.connect(URI)
    .then( (URI === process.env.MONGODB_URI) ? console.log("Conexión establecida a MongoDB Atlas") : console.log("Conexión establecida a la BD local") )
    .catch(error => console.log("Error de conexión a la base de datos", error))
};
conectarBD(baseDeDatos);

app.use(express.json());
app.use(cors({origin: "*"}));
app.use(
    rutaGetUsuarios,
    rutaGetUsuario,
    rutaPostUsuario,
    rutaPatchUsuario,
    rutaDeleteUsuario,
    rutaGetVehiculos,
    rutaGetVehiculo,
    rutaPostVehiculo,
    rutaPatchVehiculo,
    rutaDeleteVehiculo,
    rutaGetVentas,
    rutaGetVenta,
    rutaPostVenta
);

app.get("/", (req, res)=>{
    res.redirect("https://google.com");
});

app.listen(puerto, ()=>{
    console.log(cowsay.say({
        text: puerto === 8001 
            ? `Servidor corriendo en el puerto secundario ${puerto}\nIngresa a: http://localhost:${puerto}/` 
            : `Servidor corriendo en el puerto principal ${puerto}\nIngresa a: http://localhost:${puerto}/`,
        e: "nn"
    }))
});