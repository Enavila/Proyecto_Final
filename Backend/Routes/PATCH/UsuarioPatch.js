const router = require("express").Router();

const {EditarUsuarioPorCorreoParams} = require("../../Controllers/UsuarioController");

router.patch("/usuario/:correo", EditarUsuarioPorCorreoParams);


module.exports = router;