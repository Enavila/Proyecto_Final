const router = require('express').Router();

const {ObtenerVenta} = require("../../Controllers/VentaController");

router.get("/venta/:id", ObtenerVenta);


module.exports = router;