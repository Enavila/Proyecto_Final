const router = require("express").Router();

const {RegistrarVehiculo} = require("../../Controllers/Vehiculo/VehiculoController");

router.post("/vehiculo", RegistrarVehiculo);


module.exports = router;