const Venta = require("../Models/VentaModel");
const Usuario = require("../Models/UsuarioModel");
const Vehiculo = require("../Models/VehiculoModel");

const { FuncionValidarID } = require("../Components/FuncionesValidacionesVenta");



exports.RegistrarVenta = async (req,res)=>{
    try {
        const datosDelBody = req.body;
        const vendedorId = datosDelBody.vendedorId;
        const vehiculoId = datosDelBody.vehiculoId;
        const compradorId = datosDelBody.compradorId;
        if (FuncionValidarID(vendedorId) && FuncionValidarID(vehiculoId)) {
            console.log(`\n\nVendedor: \n${vendedorId} \n\nVehiculo: \n${vehiculoId} \n\nComprador: \n${compradorId}\n\n`);
            const informacionVendedor = await Usuario.findById(vendedorId);
            const informacionVehiculo = await Vehiculo.findById(vehiculoId);
            const informacionComprador = await Usuario.findById(compradorId);
            if (informacionVendedor && informacionVehiculo && informacionComprador) {
                datosVenta = {
                    vendedor:{
                        informacionVendedor
                    },
                    vehiculo: {
                        informacionVehiculo
                    },
                    comprador: {
                        informacionComprador
                    }
                }
                console.log(`El comprador: ${informacionComprador} \n\nHa comprado el vehiculo: ${informacionVehiculo} \n\nQue pertenece al vendedor: ${informacionVendedor}`);
                const nuevaVenta = new Venta(datosVenta);
                await nuevaVenta.save();
                res.status(201).json(`La venta ha sido registrada con exito.`);
            } else {
                res.status(404).send(`No existe el vendedor: ${vendedorId} \nO no existe el vehiculo: ${vehiculoId}\nO no existe el comprador: ${compradorId}`);
            }
        }
    } catch (error) {
        console.error(error);
        res.status (500).send("Error al registrar la venta.: " + error);
    }
    
}

exports.ObtenerVentas = async (req,res)=>{
    const ventas = await Venta.find();
    ventas.length > 0 
        ? res.status(200).json(ventas) 
        : res.status(404).send("No hay vehiculos ");
}

exports.ObtenerVenta = async (req,res)=>{
    const id = req.params.id;
    try {
        const venta = await Venta.findById(id);
        if (venta) {
            res.status(200).json(venta)
        } else {
            res.status(404).send("No existe el venta con el id: " + id);
        }
    }catch (error){
            console.error(error);
            res.status (500).send("Error al obtener venta por su id.")
    }
}

