const router = require("express").Router();

const {ActualizarUsuarioPorCorreoParams} = require("../../Controllers/Usuario/UsuarioController");

router.patch("/usuario/:correo", ActualizarUsuarioPorCorreoParams);


module.exports = router;