const router = require("express").Router();

const {ActualizarProductoPorId} = require("../../Controllers/Producto/ProductoController");

router.patch("/producto/:id", ActualizarProductoPorId);


module.exports = router;