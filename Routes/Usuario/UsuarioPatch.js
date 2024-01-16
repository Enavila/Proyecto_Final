const router = require("express").Router();

const {ActualizarUsuarioPorCorreoParams} = require("../../Controllers/Usuario/Usuario");

router.patch("/usuario/:correo", ActualizarUsuarioPorCorreoParams);


module.exports = router;