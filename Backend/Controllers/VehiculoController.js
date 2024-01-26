const Vehiculo = require("../Models/VehiculoModel");
const Usuario = require("../Models/UsuarioModel");
const {
        FuncionValidarRegistroVehiculo,
        FuncionValidarActualizacionVehiculo,
        FuncionValidarID 
} = require("../Components/FuncionesValidacionesVehiculo");

// Todos los Vehiculos
exports.ObtenerVehiculos = async (req,res)=>{
    const vehiculos = await Vehiculo.find();
    vehiculos.length > 0 
        ? res.status(200).json(vehiculos) 
        : res.status(404).send("No hay vehiculos ");
};

// Un Vehiculo por su ID
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

// Registro de Vehiculo
exports.RegistrarVehiculo = async (req,res)=>{
    try{
        const datosDelBody = req.body;
        if (FuncionValidarRegistroVehiculo(datosDelBody)) {
            const nuevoVehiculo = new Vehiculo(datosDelBody);
            console.log(`\n\nVehiculo a registrar: \n${nuevoVehiculo}`);
            console.log(`\n\nID delVendedor que lo registra: \n${nuevoVehiculo.idVendedor}`);
            const vendedor = await Usuario.find({_id: datosDelBody.idVendedor});
            if(vendedor.length > 0){
                console.log(`\n\nInformacion del Vendedor: \n${vendedor}`);
                const actualizacion = await Usuario.updateOne(
                    {_id: datosDelBody.idVendedor},
                    {$set: {garaje: vendedor[0].garaje.concat(nuevoVehiculo._id)}}
                );
                await nuevoVehiculo.save();
                res.status(201).json(`El vendedor: ${vendedor[0].nombre} ${vendedor[0].apellido} con ID: ${vendedor[0]._id} Ha registrado con exito el Vehiculo:  ${nuevoVehiculo}  `);
                console.log(`\nEl vendedor: ${vendedor[0].nombre} ${vendedor[0].apellido} con ID: ${vendedor[0]._id}\n\n Ha registrado con exito el Vehiculo: \n\n ${nuevoVehiculo} \n\n `);
            }
            else{
                res.status(404).send("No existe el usuario con el id: " + nuevoVehiculo.idVendedor);
            }
        }
    }catch(error){
        res.status(500).send("Error al insertar el vehiculo: " + error);
        console.log(error);
    }
};

// Editar Vehiculo por ID
exports.EditarVehiculoPorId = async (req,res)=>{
    try{
        const nuevosDatos = req.body;
        if (FuncionValidarActualizacionVehiculo(nuevosDatos)){
            const id = req.params.id;
            if (FuncionValidarID(id)){
                const actualizacion = await Vehiculo.updateOne(
                    {_id: id},
                    {$set: nuevosDatos}
                );
                if (actualizacion.matchedCount === 1){
                    if (actualizacion.modifiedCount === 1){
                        res.status(200).json({"info":`Se actualizó el Vehiculo con el id ${req.params.id}`})  
                    } else {
                        res.status(500).json({"info":`No se actualizó el Vehiculo con el id ${req.params.id}`})
                    }
                } else {
                    res.status(404).json({"info":`No se encontró el Vehiculo con el id ${req.params.id}`});
                }
            }
        }
    }catch(error){
        res.status(500).send(`Error al actualizar el Vehiculo con el id ${req.params.id}`);
        console.log(error);
    }
};

// Eliminar Vehiculo por ID
exports.EliminarVehiculoPorId = async(req,res)=>{
    try{
        const id = req.params.id;
        if (FuncionValidarID(id)) {
            const vehiculo = await Vehiculo.findById(id);
            if(vehiculo !== null){
                console.log(`\n\nVehiculo a eliminar: \n${vehiculo}`);
                const vendedor = vehiculo.idVendedor;
                console.log(`\n\nVendedor del vehiculo: \n${vendedor}`);
                const informacionVendedor = await Usuario.find({_id: vendedor});
                console.log(`\n\nInformacion del vendedor: \n${informacionVendedor}`);
                const garaje = informacionVendedor[0].garaje;
                console.log(`\n\nGaraje del vendedor: \n${garaje}`);
                const garajeNuevo = garaje.filter((elemento)=>{
                    return elemento.toString() !== vehiculo._id.toString();
                })
                console.log(`\n\nGaraje nuevo: \n${garajeNuevo}`);
                const actualizacionGaraje = await Usuario.updateOne(
                    {_id: vendedor},
                    {$set: {garaje: garajeNuevo}}
                )
                const eliminarVehiculo = await Vehiculo.deleteOne({_id : id});
                res.status(200).json({"info": `Se eliminó el Vehiculo con el id ${req.params.id}`})
            } else {
                res.status(404).json({"info": `No se pudo encontrar el Vehiculo con el id ${req.params.id}`})
            }
        }
    }catch(error){
        res.status(500).json({"error": `No se pudo eliminar el Vehiculo con el id ${req.params.id}: ${error}`});
        console.log(error)
    }
};