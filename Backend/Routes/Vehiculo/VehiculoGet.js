const router = require('express').Router();

const {ObtenerVehiculo} = require("../../Controllers/Vehiculo/VehiculoController");

router.get("/vehiculo/:id", ObtenerVehiculo);


module.exports = router;