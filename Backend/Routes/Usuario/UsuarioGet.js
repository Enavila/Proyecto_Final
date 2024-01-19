const router = require('express').Router();

const {ObtenerUsuario} = require("../../Controllers/Usuario/UsuarioController");

router.get("/usuario/:correo", ObtenerUsuario);


module.exports = router;