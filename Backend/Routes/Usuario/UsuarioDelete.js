const router = require("express").Router();

const {EliminarUsuarioPorCorreoParams} = require("../../Controllers/Usuario/UsuarioController");

router.delete("/usuario/:correo", EliminarUsuarioPorCorreoParams);


module.exports = router;