const router = require('express').Router();

const {ObtenerUsuarios} = require("../../Controllers/Usuario/Usuario");

router.get("/usuarios", ObtenerUsuarios);


module.exports = router;