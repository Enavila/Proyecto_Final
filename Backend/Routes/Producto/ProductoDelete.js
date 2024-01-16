const router = require("express").Router();

const {EliminarProductoPorId} = require("../../Controllers/Producto/ProductoController");

router.delete("/producto/:id", EliminarProductoPorId);


module.exports = router;