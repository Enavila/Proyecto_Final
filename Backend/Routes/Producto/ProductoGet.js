const router = require('express').Router();

const {ObtenerProducto} = require("../../Controllers/Producto/ProductoController");

router.get("/producto/:id", ObtenerProducto);


module.exports = router;