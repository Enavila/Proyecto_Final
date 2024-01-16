const router = require('express').Router();

const {ObtenerProductos} = require("../../Controllers/Producto/ProductoController.js");

router.get("/productos", ObtenerProductos);


module.exports = router;