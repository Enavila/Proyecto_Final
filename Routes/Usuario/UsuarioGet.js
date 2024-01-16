const router = require('express').Router();

const {ObtenerUsuario} = require("../../Controllers/Usuario/Usuario");

router.get("/usuario/:correo", ObtenerUsuario);


module.exports = router;