
const Usuario = require("../../Models/Usuario/UsuarioModel");


const {mensajeErrorNombre, mensajeErrorApellido, mensajeErrorEdad, mensajeErrorCiudad, mensajeErrorPais, mensajeErrorCorreo, mensajeErrorContrasena, mensajeErrorFoto} = require("../../Components/Regex");
const {FuncionValidarNombre, FuncionValidarApellido, FuncionValidarEdad, FuncionValidarCiudad, FuncionValidarPais, FuncionValidarCorreo, FuncionValidarContrasena, FuncionValidarFoto} = require ("../../Components/FuncionValidacionUsuario");



exports.ObtenerUsuarios = async (req,res)=>{
    const usuarios = await Usuario.find();
    usuarios.length > 0 
        ? res.status(200).json(usuarios) 
        : res.status(404).send("No hay usuarios ");
};

exports.RegistrarUsuario = async (req,res)=>{
    try{
        const datosDelBody = req.body;
        const nuevoUsuario = new Usuario(datosDelBody);
        if (!nuevoUsuario.validarNombre()) {
            throw new Error(`${mensajeErrorNombre}`);
        }
        if (!nuevoUsuario.validarApellido()) {
            throw new Error(`${mensajeErrorApellido}`);
        }
        if (!(nuevoUsuario.validarEdad())) {
            throw new Error(`${mensajeErrorEdad}`);
        }
        if (!nuevoUsuario.validarCiudad()) {
            throw new Error(`${mensajeErrorCiudad}`);
        }
        if (!nuevoUsuario.validarPais()) {
            throw new Error(`${mensajeErrorPais}`);
        }
        if (!nuevoUsuario.validarCorreo()) {
            throw new Error(`${mensajeErrorCorreo}`);
        }
        if (!nuevoUsuario.validarContrasena()) {
            throw new Error(`${mensajeErrorContrasena}`);
        }
        if (!nuevoUsuario.validarFoto()) {
            throw new Error(`${mensajeErrorFoto}`);
        }
        await nuevoUsuario.save();
        res.status(201).json({"Registrado": nuevoUsuario});
        console.log("se registro un estudiante")
    }catch(error){
        res.status(500).send("Error al insertar el usuario");
        console.log(error);
    }
};

exports.ObtenerUsuario = async (req,res)=>{
    try {
        const correo = req.params.correo;
        if (!FuncionValidarCorreo(correo)) {
            throw new Error(`${mensajeErrorCorreo}`);
        } else {
            const usuario = await Usuario.find(
                {"correo": correo}
            );
            usuario.length > 0 
                ? res.status(200).json(usuario) 
                : res.status(404).send("No existe el usuario con el correo: " + correo);
        }
    } catch (error){
        res.status(500).send("Error al obtener el usuario");
        console.log(error)
    }
};

exports.ActualizarUsuarioPorCorreoParams = async (req,res)=>{
    try{
        const nuevosDatos = req.body;
        if (nuevosDatos.nombre){
            if (!FuncionValidarNombre(nuevosDatos.nombre)) {
                throw new Error(`${mensajeErrorNombre}`);
            }
        }
        if (nuevosDatos.apellido){
            if (!FuncionValidarApellido(nuevosDatos.apellido)) {
                throw new Error(`${mensajeErrorApellido}`);
            }
        }
        if (nuevosDatos.edad){
            if (!FuncionValidarEdad(nuevosDatos.edad)) {
                throw new Error(`${mensajeErrorEdad}`);
            }
        }
        if (nuevosDatos.ciudad){
            if (!FuncionValidarCiudad(nuevosDatos.ciudad)) {
                throw new Error(`${mensajeErrorCiudad}`);
            }
        }
        if (nuevosDatos.pais){
            if (!FuncionValidarPais(nuevosDatos.pais)) {
                throw new Error(`${mensajeErrorPais}`);
            }
        }
        if (nuevosDatos.contrasena){
            if (!FuncionValidarContrasena(nuevosDatos.contrasena)) {
                throw new Error(`${mensajeErrorContrasena}`);
            }
        }
        if (nuevosDatos.foto){
            if (!FuncionValidarFoto(nuevosDatos.foto)) {
                throw new Error(`${mensajeErrorFoto}`);
            }
        }
        const correo = req.params.correo;
        if (!FuncionValidarCorreo(correo)) {
            throw new Error(`${mensajeErrorCorreo}`);
        } else {
            const actualizacion = await Usuario.updateOne(
                {"correo": correo},
                {$set: nuevosDatos}
            );
            actualizacion.matchedCount === 1
                ? actualizacion.modifiedCount === 1
                    ? res.status(200).json({"info":`Se actualizo el Usuario con el correo ${req.params.correo}`})  
                    : res.status(500).json({"info":`No se actualizo el Usuario con el correo ${req.params.correo}`})
                : res.status(404).json({"info":`No se encontro el Usuario con el correo ${req.params.correo}`});
        }
        
    }catch(error){
        res.status(500).send(`Error al actualizar el Usuario con el correo ${req.params.correo}`);
        console.log(error);
    }
};




exports.EliminarUsuarioPorCorreoParams = async(req,res)=>{
    try{
        const correo = req.params.correo;
        if (!FuncionValidarCorreo(correo)) {
            throw new Error(`${mensajeErrorCorreo}`);
        } else {
            const resultado = await Usuario.deleteOne({"correo": correo});
            resultado.deletedCount === 1
                ? res.status(200).json({"info": `Se elimino el usuario con el correo ${req.params.correo}`})
                : res.status(404).json({"info": `No se encontro el usuario con el correo ${req.params.correo}`});
            console.log("Se elimino un usuario por correo (params)");
        }
    }catch(error){
        res.status(500).json({"error": `No se pudo eliminar el usuario con el correo ${req.params.correo}`});
        console.log(error)
    }
};