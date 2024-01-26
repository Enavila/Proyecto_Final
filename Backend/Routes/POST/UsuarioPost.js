const router = require("express").Router();

const {RegistrarUsuario} = require("../../Controllers/UsuarioController");

router.post("/usuario", RegistrarUsuario);


module.exports = router;