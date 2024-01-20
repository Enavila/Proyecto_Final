
const Usuario = require("../../Models/Usuario/UsuarioModel");


const {mensajeErrorNombre, mensajeErrorApellido, mensajeErrorEdad, mensajeErrorCiudad, mensajeErrorPais, mensajeErrorCorreo, mensajeErrorContrasena, mensajeErrorFoto} = require("../../Components/Regex");
const {FuncionValidarRegistroUsuario, FuncionValidarActualizacionUsuario, FuncionValidarNombre, FuncionValidarApellido, FuncionValidarEdad, FuncionValidarCiudad, FuncionValidarPais, FuncionValidarCorreo, FuncionValidarContrasena, FuncionValidarFoto} = require ("../../Components/FuncionValidacionUsuario");


exports.ObtenerUsuarios = async (req,res)=>{
    const usuarios = await Usuario.find();
    usuarios.length > 0 
        ? res.status(200).json(usuarios) 
        : res.status(404).send("No hay usuarios ");
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

exports.RegistrarUsuario = async (req,res)=>{
    try{
        const datosDelBody = req.body;
        const nuevoUsuario = new Usuario(datosDelBody);
        if (FuncionValidarRegistroUsuario(nuevoUsuario)) {
            await nuevoUsuario.save();
            res.status(201).json({"Registrado": nuevoUsuario});
            console.log(`se registro un estudiante: ${nuevoUsuario}`);
        }
    }catch(error){
        res.status(500).send(`Error al insertar el usuario. ${error}`);
        console.log(error);
    }
};

exports.ActualizarUsuarioPorCorreoParams = async (req,res)=>{
    try{
        const nuevosDatos = req.body;
        if (!FuncionValidarActualizacionUsuario(nuevosDatos)) {
            throw new Error(`${mensajeErrorContrasena}`);
        } else {
            const correo = req.params.correo;
            if (!FuncionValidarCorreo(correo)) {
                throw new Error(`${mensajeErrorCorreo}`);
            } else {
                const actualizacion = await Usuario.updateOne(
                    {"correo": correo},
                    {$set: nuevosDatos}
                );
                if (actualizacion.matchedCount === 1){
                    if (actualizacion.modifiedCount === 1){
                        // const usuario = await Usuario.find(
                        //     {"correo": correo}
                        // );
                        // console.log(usuario);
                        // const version = usuario.__v;
                        // console.log(version);
                        res.status(200).json({"info":`Se actualizo el Usuario con el correo ${req.params.correo}`})  
                    } else {
                        res.status(500).json({"info":`No se actualizo el Usuario con el correo ${req.params.correo}`})
                    }
                } else {
                    res.status(404).json({"info":`No se encontro el Usuario con el correo ${req.params.correo}`});
                }
            }
        }
    }catch(error){
        res.status(500).send(`Error al actualizar el Usuario con el correo ${req.params.correo}. \n\n${error}`);
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