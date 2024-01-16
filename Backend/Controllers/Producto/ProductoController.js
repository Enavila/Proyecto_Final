// Importamos el modelo de "Estudiantes" para interactuar con la base de datos
const Producto = require("../../Models/Producto/Producto");


// TODOS LOS PRODUCTOS
exports.ObtenerProductos = async (req,res)=>{
    const productos = await Producto.find();

    productos.length > 0 
        ? res.status(200).json(productos) 
        : res.status(404).send("No hay productos ");
};



// UN PRODUCTO POR SU ID
exports.ObtenerProducto = async (req,res)=>{
    const id = req.params.id;

    try {
        const producto = await Producto.findById(id);

        if (producto) {
            res.status(200).json(producto)
        } else {
            res.status(404).send("No existe el producto con el id: " + id);
        }
    }catch (error){
            console.error(error);
            res.status (500).send("Error al obtener producto por su id.")
        }
    };




// REGISTRO DE PRODUCTO
exports.RegistrarProducto = async (req,res)=>{
    try{
        // Se extraen los datos del cuerpo de la solicitud.
        const datosDelBody = req.body;
        // Se crea un nuevo estudiante.
        const nuevoProducto = new Producto(datosDelBody);
        // Se guarda el nuevo estudiante en la BD.
        await nuevoProducto.save();
        // Se responde con el objeto insertado y un codigo (201) que indica la creacion del registro.
        res.status(201).json({"Registrado": nuevoProducto});
        // console.log("se registro un producto")
    }catch(error){
        res.status(500).send("Error al insertar el producto");
        console.log(error);
    }
};




// EDITAR PRODUCTO POR ID
exports.ActualizarProductoPorId = async (req,res)=>{
    try{
        // Extraemos el parametro de la URL
        const id = req.params.id;
        // Extraemos los datos que se añadiran desde el cuerpo de la peticion (JSON)
        const nuevosDatos = req.body;

        // Actualizamos el estudiante
        const actualizacion = await Producto.updateOne(
            {_id: id},
            {$set: nuevosDatos}
        );

        actualizacion.matchedCount === 1
            ? actualizacion.modifiedCount === 1
                ? res.status(200).json({"info":`Se actualizó el Producto con el id ${req.params.id}`})  
                : res.status(500).json({"info":`No se actualizó el Producto con el id ${req.params.id}`})
            : res.status(404).json({"info":`No se encontró el Producto con el id ${req.params.id}`});
    }catch(error){
        res.status(500).send(`Error al actualizar el Producto con el id ${req.params.id}`);
    }
};




// ELIMINAR PRODUCTO POR ID
exports.EliminarProductoPorId = async(req,res)=>{
    try{
        const id = req.params.id;
        const resultadoAEliminar = await Producto.deleteOne({_id : id});
        resultadoAEliminar.deletedCount === 1
            ? res.status(200).json({"info": `Se eliminó el producto con el id ${req.params.id}`})
            : res.status(404).json({"info": `No se encontró el producto con el id ${req.params.id}`});

        console.log("Se eliminó un producto por id.");
    }catch(err){
        res.status(500).json({"error": `No se pudo eliminar el producto con el id ${req.params.id}`});
    }
};






// ELIMINAR PRODUCTO POR ID
// exports.EliminarProductoPorId = async(req,res)=>{
//     try{
//         const resultado = await Producto.deleteOne({"id": req.params.id});
//         resultado.deletedCount === 1
//             ? res.status(200).json({"info": `Se eliminó el producto con el id ${req.params.id}`})
//             : res.status(404).json({"info": `No se encontró el producto con el id ${req.params.id}`});

//         console.log("Se eliminó un producto por id.");
//     }catch(err){
//         res.status(500).json({"error": `No se pudo eliminar el producto con el id ${req.params.id}`});
//     }
// };