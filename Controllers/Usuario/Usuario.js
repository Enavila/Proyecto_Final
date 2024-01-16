// Importamos el modelo de "Estudiantes" para interactuar con la base de datos
const Usuario = require("../../Models/Usuario/Usuario");
const UsuarioEdit  = require("../../Models/Usuario/UsuarioEdit");

exports.ObtenerUsuarios = async (req,res)=>{
    const usuarios = await Usuario.find();

    usuarios.length > 0 
        ? res.status(200).json(usuarios) 
        : res.status(404).send("No hay usuarios ");
};


exports.ObtenerUsuario = async (req,res)=>{
    const correo = req.params.correo;
    const usuario = await Usuario.find(
        {"correo": correo}
    );

    usuario.length > 0 
        ? res.status(200).json(usuario) 
        : res.status(404).send("No existe el usuario con el correo: " + correo);
};



exports.RegistrarUsuario = async (req,res)=>{
    try{
        // Se extraen los datos del cuerpo de la solicitud.
        const datosDelBody = req.body;
        // Se crea un nuevo estudiante.
        const nuevoUsuario = new Usuario(datosDelBody);
        // Se guarda el nuevo estudiante en la BD.
        await nuevoUsuario.save();
        // Se responde con el objeto insertado y un codigo (201) que indica la creacion del registro.
        res.status(201).json({"Registrado": nuevoUsuario});
        console.log("se registro un estudiante")
    }catch(error){
        res.status(500).send("Error al insertar el usuario");
        console.log(error);
    }
};



exports.ActualizarUsuarioPorCorreoParams = async (req,res)=>{
    try{
        // Extraemos el parametro de la URL
        const correo = req.params.correo;
        // Extraemos los datos que se añadiran desde el cuerpo de la peticion (JSON)
        const nuevosDatos = req.body;

        // Actualizamos el estudiante
        const actualizacion = await UsuarioEdit.updateOne(
            {"correo": correo},
            {$set: nuevosDatos}
        );

        actualizacion.matchedCount === 1
            ? actualizacion.modifiedCount === 1
                ? res.status(200).json({"info":`Se actualizo el Usuario con el correo ${req.params.correo}`})  
                : res.status(500).json({"info":`No se actualizo el Usuario con el correo ${req.params.correo}`})
            : res.status(404).json({"info":`No se encontro el Usuario con el correo ${req.params.correo}`});
    }catch(error){
        res.status(500).send(`Error al actualizar el Usuario con el correo ${req.params.correo}`);
    }
};




exports.EliminarUsuarioPorCorreoParams = async(req,res)=>{
    try{
        const resultado = await Usuario.deleteOne({"correo": req.params.correo});
        resultado.deletedCount === 1
            ? res.status(200).json({"info": `Se elimino el usuario con el correo ${req.params.correo}`})
            : res.status(404).json({"info": `No se encontro el usuario con el correo ${req.params.correo}`});

        console.log("Se elimino un usuario por correo (params)");
    }catch(err){
        res.status(500).json({"error": `No se pudo eliminar el usuario con el correo ${req.params.correo}`});
    }
};