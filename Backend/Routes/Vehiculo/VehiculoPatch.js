const router = require("express").Router();

const {ActualizarVehiculoPorId} = require("../../Controllers/Vehiculo/VehiculoController");

router.patch("/vehiculo/:id", ActualizarVehiculoPorId);


module.exports = router;