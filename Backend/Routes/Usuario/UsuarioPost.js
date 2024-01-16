const router = require("express").Router();

const {RegistrarUsuario} = require("../../Controllers/Usuario/Usuario");

router.post("/usuario", RegistrarUsuario);


module.exports = router;