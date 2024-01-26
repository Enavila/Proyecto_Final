const router = require("express").Router();

const {EliminarVehiculoPorId} = require("../../Controllers/VehiculoController");

router.delete("/vehiculo/:id", EliminarVehiculoPorId);

module.exports = router;