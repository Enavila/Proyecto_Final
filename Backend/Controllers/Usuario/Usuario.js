// Importamos el modelo de "Estudiantes" para interactuar con la base de datos
const Usuario = require("../../Models/Usuario/Usuario");




exports.ObtenerUsuarios = async (req,res)=>{
    const usuarios = await Usuario.find();
    usuarios.length > 0 
        ? res.status(200).json(usuarios) 
        : res.status(404).send("No hay usuarios ");
};


exports.ObtenerUsuario = async (req,res)=>{
    const expresionRegularCorreo = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9]{2,6}$/;
    const correo = req.params.correo;
    if (!expresionRegularCorreo.test(correo)){
        res.status(404).send("El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension");
        console.log("El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension");
    } else {
        const usuario = await Usuario.find(
            {"correo": correo}
        );
        usuario.length > 0 
            ? res.status(200).json(usuario) 
            : res.status(404).send("No existe el usuario con el correo: " + correo);
    }
};



exports.RegistrarUsuario = async (req,res)=>{
    try{
        const datosDelBody = req.body;
        const nuevoUsuario = new Usuario(datosDelBody);
        if (!nuevoUsuario.validarNombre()) {
            throw new Error("El nombre es incorrecto, se permiten solo letras, acentos, hasta 4 espacios");
        }
        if (!nuevoUsuario.validarApellido()) {
            throw new Error("El Apellido es incorrecto, se permiten solo letras, acentos y hasta 4 espacios");
        }
        if (!nuevoUsuario.validarEdad() && !nuevoUsuario.edad >= 15) {
            throw new Error("La Edad es incorrecta, se permiten solo numeros desde 0 hasta 999 a partir de 15 años");
        }
        if (!nuevoUsuario.validarCiudad()) {
            throw new Error("La ciudad es incorrecta, se permiten solo letras, acentos y hasta 4 espacios");
        }
        if (!nuevoUsuario.validarPais()) {
            throw new Error("El pais es incorrecto, se permiten solo letras, acentos y hasta 4 espacios");
        }
        if (!nuevoUsuario.validarCorreo()) {
            throw new Error("El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension");
        }
        if (!nuevoUsuario.validarContraseña()) {
            throw new Error("La contraseña es incorrecta, se permiten solo letras minusculas y mayusculas, numeros y solo los caracteres especiales * _ . - ( ) sin espacios");
        }
        await nuevoUsuario.save();
        res.status(201).json({"Registrado": nuevoUsuario});
        console.log("se registro un estudiante")
    }catch(error){
        res.status(500).send("Error al insertar el usuario");
        console.log(error);
    }
};



exports.ActualizarUsuarioPorCorreoParams = async (req,res)=>{
    try{
        const nuevosDatos = req.body;
        const correo = req.params.correo;
        const expresionRegularCorreo = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9]{2,6}$/;
        if (!expresionRegularCorreo.test(correo)){
            res.status(404).send("El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension");
            console.log("El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension");
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
    }
};




exports.EliminarUsuarioPorCorreoParams = async(req,res)=>{
    try{
        const correo = req.params.correo;
        const expresionRegularCorreo = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.-]+\.[a-zA-Z0-9]{2,6}$/;
        if (!expresionRegularCorreo.test(correo)){
            res.status(404).send("El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension");
            console.log("El correo es incorrecto, ingrese un correo de tipo nombre@dominio.extension");
        } else {
            const resultado = await Usuario.deleteOne({"correo": correo});
            resultado.deletedCount === 1
                ? res.status(200).json({"info": `Se elimino el usuario con el correo ${req.params.correo}`})
                : res.status(404).json({"info": `No se encontro el usuario con el correo ${req.params.correo}`});
            console.log("Se elimino un usuario por correo (params)");
        }
    }catch(err){
        res.status(500).json({"error": `No se pudo eliminar el usuario con el correo ${req.params.correo}`});
    }
};