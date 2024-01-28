import "../Styles/Botonera.css";
const Botonera = () => {
    let carros = [
        {
            marca: "Toyota",
            modelo: "Corolla",
            año: 2023,
            color: "Blanco",
            kilometraje: 10.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2023_Toyota_Corolla_Sedan.jpg/1200px-2023_Toyota_Corolla_Sedan.jpg"
        },
        {
            marca: "Honda",
            modelo: "Civic",
            año: 2023,
            color: "Rojo",
            kilometraje: 15.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/2023_Honda_Civic_Sedan.jpg/1200px-2023_Honda_Civic_Sedan.jpg"
        },
        {
            marca: "Nissan",
            modelo: "Versa",
            año: 2023,
            color: "Azul",
            kilometraje: 20.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2023_Nissan_Versa_Sedan.jpg/1200px-2023_Nissan_Versa_Sedan.jpg"
        },
        {
            marca: "Kia",
            modelo: "Rio",
            año: 2023,
            color: "Negro",
            kilometraje: 25.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2023_Kia_Rio_Sedan.jpg/1200px-2023_Kia_Rio_Sedan.jpg"
        },
        {
            marca: "Hyundai",
            modelo: "Accent",
            año: 2023,
            color: "Plata",
            kilometraje: 30.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2023_Hyundai_Accent_Sedan.jpg/1200px-2023_Hyundai_Accent_Sedan.jpg"
        },
        {
            marca: "Ford",
            modelo: "Fiesta",
            año: 2023,
            color: "Verde",
            kilometraje: 35.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/2023_Ford_Fiesta_Sedan.jpg/1200px-2023_Ford_Fiesta_Sedan.jpg"
        },
        {
            marca: "Chevrolet",
            modelo: "Sonic",
            año: 2023,
            color: "Amarillo",
            kilometraje: 40.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2023_Chevrolet_Sonic_Sedan.jpg/1200px-2023_Chevrolet_Sonic_Sedan.jpg"
        },
        {
            marca: "Mazda",
            modelo: "3",
            año: 2023,
            color: "Gris",
            kilometraje: 45.000,
            foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/2023_Mazda_3_Sedan.jpg/1200px-2023_Mazda_3_Sedan.jpg"
        }
    ]
    return (
        <div id="botonera">
            {
                carros.map((carro, index) => {
                    return (

                        <a href="#" key={index} class="btnBotonera">
                        {/* {agregar ruta get con el modelo del carro } */}
                            {carro.marca}
                        </a>
                    );
                })
            }
        </div>
    );
}
export default Botonera;