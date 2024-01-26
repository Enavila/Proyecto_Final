const router = require("express").Router();

const {EditarVehiculoPorId} = require("../../Controllers/VehiculoController");

router.patch("/vehiculo/:id", EditarVehiculoPorId);


module.exports = router;