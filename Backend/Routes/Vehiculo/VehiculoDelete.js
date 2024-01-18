const router = require("express").Router();

const {EliminarVehiculoPorId} = require("../../Controllers/Vehiculo/VehiculoController");

router.delete("/vehiculo/:id", EliminarVehiculoPorId);


module.exports = router;