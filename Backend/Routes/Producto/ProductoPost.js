const router = require("express").Router();

const {RegistrarProducto} = require("../../Controllers/Producto/ProductoController");

router.post("/producto", RegistrarProducto);


module.exports = router;