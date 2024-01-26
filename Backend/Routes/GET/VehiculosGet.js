const router = require('express').Router();

const {ObtenerVehiculos} = require("../../Controllers/VehiculoController.js");

router.get("/vehiculos", ObtenerVehiculos);


module.exports = router;