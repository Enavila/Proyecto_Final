// Importamos el modelo de "Estudiantes" para interactuar con la base de datos
const Vehiculo = require("../../Models/Vehiculo/Vehiculo");


// TODOS LOS Vehiculos
exports.ObtenerVehiculos = async (req,res)=>{
    const vehiculos = await Vehiculo.find();

    vehiculos.length > 0 
        ? res.status(200).json(vehiculos) 
        : res.status(404).send("No hay vehiculos ");
};



// UN Vehiculo POR SU ID
exports.ObtenerVehiculo = async (req,res)=>{
    const id = req.params.id;

    try {
        const vehiculo = await Vehiculo.findById(id);
        if (vehiculo) {
            res.status(200).json(vehiculo)
        } else {
            res.status(404).send("No existe el vehiculo con el id: " + id);
        }
    }catch (error){
            console.error(error);
            res.status (500).send("Error al obtener vehiculo por su id.")
        }
    };




// REGISTRO DE Vehiculo
exports.RegistrarVehiculo = async (req,res)=>{
    try{
        // Se extraen los datos del cuerpo de la solicitud.
        const datosDelBody = req.body;
        // Se crea un nuevo estudiante.
        const nuevoVehiculo = new Vehiculo(datosDelBody);
        // Se guarda el nuevo estudiante en la BD.
        await nuevoVehiculo.save();
        // Se responde con el objeto insertado y un codigo (201) que indica la creacion del registro.
        res.status(201).json({"Registrado": nuevoVehiculo});
        // console.log("se registro un vehiculo")
    }catch(error){
        res.status(500).send("Error al insertar el vehiculo");
        console.log(error);
    }
};




// EDITAR Vehiculo POR ID
exports.ActualizarVehiculoPorId = async (req,res)=>{
    try{
        // Extraemos el parametro de la URL
        const id = req.params.id;
        // Extraemos los datos que se añadiran desde el cuerpo de la peticion (JSON)
        const nuevosDatos = req.body;

        // Actualizamos el estudiante
        const actualizacion = await Vehiculo.updateOne(
            {_id: id},
            {$set: nuevosDatos}
        );

        actualizacion.matchedCount === 1
            ? actualizacion.modifiedCount === 1
                ? res.status(200).json({"info":`Se actualizó el Vehiculo con el id ${req.params.id}`})  
                : res.status(500).json({"info":`No se actualizó el Vehiculo con el id ${req.params.id}`})
            : res.status(404).json({"info":`No se encontró el Vehiculo con el id ${req.params.id}`});
    }catch(error){
        res.status(500).send(`Error al actualizar el Vehiculo con el id ${req.params.id}`);
    }
};




// ELIMINAR Vehiculo POR ID
exports.EliminarVehiculoPorId = async(req,res)=>{
    try{
        const id = req.params.id;
        const resultadoAEliminar = await Vehiculo.deleteOne({_id : id});
        resultadoAEliminar.deletedCount === 1
            ? res.status(200).json({"info": `Se eliminó el Vehiculo con el id ${req.params.id}`})
            : res.status(404).json({"info": `No se encontró el Vehiculo con el id ${req.params.id}`});

        console.log("Se eliminó un Vehiculo por id.");
    }catch(err){
        res.status(500).json({"error": `No se pudo eliminar el Vehiculo con el id ${req.params.id}`});
    }
};






