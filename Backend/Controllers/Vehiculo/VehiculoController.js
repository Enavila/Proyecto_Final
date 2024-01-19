const Vehiculo = require("../../Models/Vehiculo/VehiculoModel");
const {mensajeErrorFoto, mensajeErrorPrecio, mensajeErrorMarca, mensajeErrorModelo, mensajeErrorAnio, mensajeErrorColor, mensajeErrorTipoCarroceria, mensajeErrorTipoMotor, mensajeErrorCilindraje, mensajeErrorPotenciaHP, mensajeErrorTransmision, mensajeErrorTraccion, mensajeErrorNumeroPuertas, mensajeErrorCapacidadPasajeros, mensajeErrorKilometraje, mensajeErrorSistemaDeFrenos, mensajeErrorBolsasDeAire, mensajeErrorPantallaTactil, mensajeErrorNavegacionGPS, mensajeErrorBluetooth, mensajeErrorAireAcondicionado, mensajeErrorTipoDeAsientos, mensajeErrorLongitudMM, mensajeErrorAnchoMM, mensajeErrorAlturaMM, mensajeErrorPesoKG, mensajeErrorConsumoCiudad, mensajeErrorConsumoCarretera} = require ("../../Components/Regex");


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
        if (!nuevoVehiculo.validarFoto()) {
            throw new Error(`${mensajeErrorFoto}`);
        }
        if (!nuevoVehiculo.validarPrecio()) {
            throw new Error(`${mensajeErrorPrecio}`);
        }
        if (!nuevoVehiculo.validarMarca()) {
            throw new Error(`${mensajeErrorMarca}`);
        }
        if (!nuevoVehiculo.validarModelo()) {
            throw new Error(`${mensajeErrorModelo}`);
        }
        if (!nuevoVehiculo.validarAnio()) {
            throw new Error(`${mensajeErrorAnio}`);
        }
        if (!nuevoVehiculo.validarColor()) {
            throw new Error(`${mensajeErrorColor}`);
        }
        if (!nuevoVehiculo.validarTipoCarroceria()) {
            throw new Error(`${mensajeErrorTipoCarroceria}`);
        }
        if (!nuevoVehiculo.validarTipoMotor()) {
            throw new Error(`${mensajeErrorTipoMotor}`);
        }
        if (!nuevoVehiculo.validarCilindraje()) {
            throw new Error(`${mensajeErrorCilindraje}`);
        }
        if (!nuevoVehiculo.validarPotenciaHP()) {
            throw new Error(`${mensajeErrorPotenciaHP}`);
        }
        if (!nuevoVehiculo.validarTransmision()) {
            throw new Error(`${mensajeErrorTransmision}`);
        }
        if (!nuevoVehiculo.validarTraccion()) {
            throw new Error(`${mensajeErrorTraccion}`);
        }
        if (!nuevoVehiculo.validarNumeroPuertas()) {
            throw new Error(`${mensajeErrorNumeroPuertas}`);
        }
        if (!nuevoVehiculo.validarCapacidadPasajeros()) {
            throw new Error(`${mensajeErrorCapacidadPasajeros}`);
        }
        if (!nuevoVehiculo.validarKilometraje()) {
            throw new Error(`${mensajeErrorKilometraje}`);
        }
        if (!nuevoVehiculo.validarSistemaDeFrenos()) {
            throw new Error(`${mensajeErrorSistemaDeFrenos}`);
        }
        if (!nuevoVehiculo.validarBolsasDeAire()) {
            throw new Error(`${mensajeErrorBolsasDeAire}`);
        }
        if (!nuevoVehiculo.validarPantallaTactil()) {
            throw new Error(`${mensajeErrorPantallaTactil}`);
        }
        if (!nuevoVehiculo.validarNavegacionGPS()) {
            throw new Error(`${mensajeErrorNavegacionGPS}`);
        }
        if (!nuevoVehiculo.validarBluetooth()) {
            throw new Error(`${mensajeErrorBluetooth}`);
        }
        if (!nuevoVehiculo.validarAireAcondicionado()) {
            throw new Error(`${mensajeErrorAireAcondicionado}`);
        }
        if (!nuevoVehiculo.validarTipoDeAsientos()) {
            throw new Error(`${mensajeErrorTipoDeAsientos}`);
        }
        if (!nuevoVehiculo.validarLongitudMM()) {
            throw new Error(`${mensajeErrorLongitudMM}`);
        }
        if (!nuevoVehiculo.validarAnchoMM()) {
            throw new Error(`${mensajeErrorAnchoMM}`);
        }
        if (!nuevoVehiculo.validarAlturaMM()) {
            throw new Error(`${mensajeErrorAlturaMM}`);
        }
        if (!nuevoVehiculo.validarPesoKG()) {
            throw new Error(`${mensajeErrorPesoKG}`);
        }
        if (!nuevoVehiculo.validarConsumoCiudad()) {
            throw new Error(`${mensajeErrorConsumoCiudad}`);
        }
        if (!nuevoVehiculo.validarConsumoCarretera()) {
            throw new Error(`${mensajeErrorConsumoCarretera}`);
        }
        await nuevoVehiculo.save();
        res.status(201).json({"Registrado": nuevoVehiculo});
        console.log("Vehiculo registrado con exito");
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






