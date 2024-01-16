const router = require("express").Router();

const {EliminarUsuarioPorCorreoParams} = require("../../Controllers/Usuario/Usuario");

router.delete("/usuario/:correo", EliminarUsuarioPorCorreoParams);


module.exports = router;