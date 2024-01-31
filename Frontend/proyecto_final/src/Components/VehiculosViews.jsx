import "../Styles/Vehiculos.css"
import "../Styles/Vehiculo.css"
import { useEffect, useState } from "react";
import axios from "axios";
const Vehiculos = () => {

    // let vehiculos =[
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    //     {
    //         marca: "Toyota",
    //         modelo: "Corolla",
    //         anio: 2023,
    //         color: "Blanco",
    //         kilometraje: "10.000",
    //         precio: 20000,
    //         transmision: "Automatica",
    //         condicion: "Nuevo",
    //         carroceria:"sedan",
    //         ciudad:"Caracas",
    //         img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
    //     },
    // ]
    const [vehiculos, setVehiculos] = useState([]);
    // const [fotos, setFotos] = useState([]);

    const opciones = {
        method: 'GET',
        url: 'http://localhost:8000/vehiculos',
        };
    
        useEffect(() => {
            async function obtenerVehiculos() {
                try {
                    const respuesta = await axios.request(opciones);
                    setVehiculos(respuesta.data);
                } catch (error) {
                    console.error(error);
                }
            };
            obtenerVehiculos();
        }, []);
    return (
    <section id="vehiculosGrid">
        {
            vehiculos.map((vehiculo)=>(
                <div class="vehiculo">
                    <a href="#" class="anclaVehiculo">
                        <img src={vehiculo.fotos[0]}  alt={`${vehiculo.marca} ${vehiculo.modelo} `} />
                        <div>
                            <h3>{vehiculo.modelo} - {vehiculo.marca}</h3>
                            <p>{vehiculo.anio} | {`${vehiculo.kilometraje} km`} | {vehiculo.transmision}</p>
                        </div>
                        <p class="PrecioVehiculo">$ {vehiculo.precio}</p>
                    </a>
                    <div class="footerVehiculo">
                        <button>
                            <span class="material-symbols-outlined">
                                bookmark_add
                            </span>
                        </button>
                        <p>
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            {vehiculo.ciudad}
                        </p>
                    </div>
                </div>
            ))
        }
    </section>
    );
}

const VehiculosIndividual = () =>{

    let vehiculo = [
        {
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2023,
            color: "Blanco",
            kilometraje: "10.000",
            precio: 20000,
            transmision: "Automatica",
            condicion: "Nuevo",
            carroceria:"sedan",
            ciudad:"Caracas",
            traccion: "4x2",
            img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
        }
    ]
    let otorsVehiculos = [
        {
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2023,
            color: "Blanco",
            kilometraje: "10.000",
            precio: 20000,
            transmision: "Automatica",
            condicion: "Nuevo",
            carroceria:"sedan",
            ciudad:"Caracas",
            traccion: "4x2",
            img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
        },
        {
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2023,
            color: "Blanco",
            kilometraje: "10.000",
            precio: 20000,
            transmision: "Automatica",
            condicion: "Nuevo",
            carroceria:"sedan",
            ciudad:"Caracas",
            traccion: "4x2",
            img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
        },
        {
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2023,
            color: "Blanco",
            kilometraje: "10.000",
            precio: 20000,
            transmision: "Automatica",
            condicion: "Nuevo",
            carroceria:"sedan",
            ciudad:"Caracas",
            traccion: "4x2",
            img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
        },
        {
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2023,
            color: "Blanco",
            kilometraje: "10.000",
            precio: 20000,
            transmision: "Automatica",
            condicion: "Nuevo",
            carroceria:"sedan",
            ciudad:"Caracas",
            traccion: "4x2",
            img: "https://img.remediosdigitales.com/7f7da6/toyota-corolla_sedan-2023-1600-03/1366_2000.jpg"
        }
    ]
    return(
        <section id="vehiculoIndividual">
            {
                vehiculo.map((vehiculo)=>(
                    <div class="vehiculo">
                        <div class="imgVehiculo">
                            <img src={vehiculo.img}  alt={`${vehiculo.marca} ${vehiculo.modelo} `} class="img"/>
                            <h3>Imformación  básica</h3>
                            <div class="infoVehiculo">
                                <div>
                                    <h3>Tracción</h3>
                                    <span>{vehiculo.traccion}</span>
                                </div>
                                <div>
                                    <h3>Transmisión</h3>
                                    <span>{vehiculo.transmision}</span>
                                </div>
                                <div>
                                    <h3>Condición</h3>
                                    <span>{vehiculo.condicion}</span>
                                </div>
                                <div>
                                    <h3>Carroceria</h3>
                                    <span>{vehiculo.carroceria}</span>
                                </div>
                                <div>
                                    <h3>Color</h3>
                                    <span>{vehiculo.color}</span>
                                </div>
                                <div>
                                    <h3>Ciudad</h3>
                                    <span>{vehiculo.ciudad}</span>
                                </div>

                            </div>
                        </div>
                        <div class="masInfo">
                            <div class="infoComprar">
                                <div class="infoVehiculo">
                                    <h3>Condición: {vehiculo.condicion}</h3>
                                    <h2>{vehiculo.modelo} {vehiculo.marca} {vehiculo.anio}</h2>
                                    <p>{`${vehiculo.kilometraje} km`} | {vehiculo.transmision}</p>
                                </div>
                                <div class="infoPrecio">
                                    <h3>Precio</h3>
                                    <span>$ {vehiculo.precio}</span>
                                    <p>El precio no incluye el IVA</p>
                                </div>
                                <div>
                                    <button>Contactar Vendedor</button>
                                </div>
                            </div>
                            <div class="otrosVehiculosRelacionados">
                                <h3>Otros {vehiculo.modelo}  </h3>
                                <div class="vehiculosRelacionados" >
                                    {
                                        otorsVehiculos.map((otro)=>(
                                            <a href="#" >
                                                <img src={otro.img} alt={`${otro.marca} ${otro.modelo} `}  />
                                                <div class="microInfo" >
                                                    <span class="anioKm">{`${otro.anio} - ${otro.kilometraje} km`}</span>
                                                    <span class="precio">$ {otro.precio}</span>
                                                    <p class="ubicacion">
                                                        <span class="material-symbols-outlined">
                                                            location_on
                                                        </span> {otro.ciudad}
                                                    </p>
                                                </div>
                                            </a>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
export {Vehiculos, VehiculosIndividual} ;
