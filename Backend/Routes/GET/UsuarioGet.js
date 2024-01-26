const router = require('express').Router();

const {ObtenerUsuario} = require("../../Controllers/UsuarioController");

router.get("/usuario/:correo", ObtenerUsuario);


module.exports = router;