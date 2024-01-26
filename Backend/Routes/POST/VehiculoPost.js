const router = require("express").Router();

const {RegistrarVehiculo} = require("../../Controllers/VehiculoController");

router.post("/vehiculo", RegistrarVehiculo);


module.exports = router;