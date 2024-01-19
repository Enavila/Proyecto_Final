const router = require("express").Router();

const {RegistrarUsuario} = require("../../Controllers/Usuario/UsuarioController");

router.post("/usuario", RegistrarUsuario);


module.exports = router;