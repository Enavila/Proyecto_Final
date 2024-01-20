const Vehiculo = require("../../Models/Vehiculo/VehiculoModel");
const {mensajeErrorFoto, mensajeErrorID, mensajeErrorPrecio, mensajeErrorMarca, mensajeErrorModelo, mensajeErrorAnio, mensajeErrorColor, mensajeErrorTipoCarroceria, mensajeErrorTipoMotor, mensajeErrorCilindraje, mensajeErrorPotenciaHP, mensajeErrorTransmision, mensajeErrorTraccion, mensajeErrorNumeroPuertas, mensajeErrorCapacidadPasajeros, mensajeErrorKilometraje, mensajeErrorSistemaDeFrenos, mensajeErrorBolsasDeAire, mensajeErrorPantallaTactil, mensajeErrorNavegacionGPS, mensajeErrorBluetooth, mensajeErrorAireAcondicionado, mensajeErrorTipoDeAsientos, mensajeErrorLongitudMM, mensajeErrorAnchoMM, mensajeErrorAlturaMM, mensajeErrorPesoKG, mensajeErrorConsumoCiudad, mensajeErrorConsumoCarretera} = require ("../../Components/Regex");
const { FuncionValidarRegistroVehiculo, FuncionValidarActualizacionVehiculo, FuncionValidarFoto, FuncionValidarPrecio, FuncionValidarMarca, FuncionValidarModelo, FuncionValidarAnio, FuncionValidarColor, FuncionValidarTipoCarroceria, FuncionValidarTipoMotor, FuncionValidarCilindraje, FuncionValidarPotenciaHP, FuncionValidarTransmision, FuncionValidarTraccion, FuncionValidarNumeroPuertas, FuncionValidarCapacidadPasajeros, FuncionValidarKilometraje, FuncionValidarSistemaDeFrenos, FuncionValidarBolsasDeAire, FuncionValidarPantallaTactil, FuncionValidarNavegacionGPS, FuncionValidarBluetooth, FuncionValidarAireAcondicionado, FuncionValidarTipoDeAsientos, FuncionValidarLongitudMM, FuncionValidarAnchoMM, FuncionValidarAlturaMM, FuncionValidarPesoKG, FuncionValidarConsumoCiudad, FuncionValidarConsumoCarretera } = require("../../Components/FuncionValidacionVehiculo");


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
        const datosDelBody = req.body;
        const nuevoVehiculo = new Vehiculo(datosDelBody);
        if (FuncionValidarRegistroVehiculo(nuevoVehiculo)) {
            await nuevoVehiculo.save();
            res.status(201).json({"Registrado": nuevoVehiculo});
            console.log("Vehiculo registrado con exito");
        }
    }catch(error){
        res.status(500).send("Error al insertar el vehiculo");
        console.log(error);
    }
};




// EDITAR Vehiculo POR ID
exports.ActualizarVehiculoPorId = async (req,res)=>{
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






