const router = require('express').Router();

const {ObtenerUsuarios} = require("../../Controllers/Usuario/UsuarioController");

router.get("/usuarios", ObtenerUsuarios);


module.exports = router;