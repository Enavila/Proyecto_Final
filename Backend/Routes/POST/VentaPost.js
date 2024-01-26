const router = require("express").Router();

const {RegistrarVenta} = require("../../Controllers/VentaController");

router.post("/venta", RegistrarVenta);


module.exports = router;