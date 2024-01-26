const router = require('express').Router();

const {ObtenerVentas} = require("../../Controllers/VentaController");

router.get("/ventas", ObtenerVentas);


module.exports = router;