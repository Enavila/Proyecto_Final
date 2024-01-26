const router = require('express').Router();

const {ObtenerUsuarios} = require("../../Controllers/UsuarioController");

router.get("/usuarios", ObtenerUsuarios);


module.exports = router;