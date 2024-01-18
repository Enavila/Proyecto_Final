const router = require('express').Router();

const {ObtenerVehiculos} = require("../../Controllers/Vehiculo/VehiculoController.js");

router.get("/vehiculos", ObtenerVehiculos);


module.exports = router;