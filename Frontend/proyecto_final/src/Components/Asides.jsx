import { useEffect, useState } from "react";
import fotoEduardo from "../Media/FotoUser1.jpeg"
import "../Styles/AsideRight.css";
import "../Styles/AsideLeft.css";
import SliderPrecio from '../Components/SliderPrecio';

const AsideLeft = () => {
    let autos=[
        {
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2021,
            color: "Blanco",
            kilometraje: 10.000,
            condicion: "seminuevo",
            carroceria: "sedan",
            transmision: "Automatica",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2023_Toyota_Corolla_Sedan.jpg/1200px-2023_Toyota_Corolla_Sedan.jpg"
        },
        {
            marca: "Ford",
            modelo: "Corolla",
            anio: 2023,
            color: "Blanco",
            kilometraje: 10.000,
            condicion: "seminuevo",
            carroceria: "sedan",
            transmision: "Automatica",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2023_Toyota_Corolla_Sedan.jpg/1200px-2023_Toyota_Corolla_Sedan.jpg"
        }
    ]
    const [modelos, setModelos] = useState([]);
    const [anio, setAnio] = useState([]);
    const [color, setColor] = useState([]);
    const [condicion, setCondicion] = useState([]);
    const [carroceria, setCarroceria] = useState([]);
    const [transmision, setTransmision] = useState([]);
    const [marcaSelect, setMarcaSelect] = useState([]);
    useEffect(() => {
        setMarcaSelect(
            autos.map((auto)=>{
                return({
                    value:auto.marca,
                    name:auto.marca
                })
            })
        )
        setModelos(
            autos.map((auto)=>{
                return({
                    value:auto.modelo,
                    name:auto.modelo
                })
            })
        )
        setAnio(
            autos.map((auto)=>{
                return({
                    value:auto.anio,
                    name:auto.anio
                })
            })
        )
        setCondicion(
            autos.map((auto)=>{
                return({
                    value:auto.condicion,
                    name:auto.condicion
                })
            })
        )
        setCarroceria(
            autos.map((auto)=>{
                return({
                    value:auto.carroceria,
                    name:auto.carroceria
                })
            })
        )
        setTransmision(
            autos.map((auto)=>{
                return({
                    value:auto.transmision,
                    name:auto.transmision
                })
            })
        )
        setColor(
            autos.map((auto)=>{
                return({
                    value:auto.color,
                    name:auto.color
                })
            })
        )
    },[]);
    console.log(modelos)

    let selects =[{
        nameSelect:"Marca",
        optionsSelect:[
            {
                value:"Marca",
                name:"Marca",
                selected:true,
                hidden:true
            },
            ...marcaSelect
        ]},
        {
        nameSelect:"Modelo",
        optionsSelect:[
            {
                value:"Modelo",
                name:"Modelo",
                selected:true,
                hidden:true
            },
            ...modelos
        ]},
        {
        nameSelect:"Anio",
        optionsSelect:[
            {
                value:"Anio",
                name:"Año",
                selected:true,
                hidden:true
            },
            ...anio
        ]},
        {
        nameSelect:"Color",
        optionsSelect:[
            {
                value:"Color",
                name:"Color",
                selected:true,
                hidden:true
            },
            ...color
        ]},
        {
        nameSelect:"Condicion",
        optionsSelect:[
            {
                value:"Condicion",
                name:"Condición",
                selected:true,
                hidden:true
            },
            ...condicion
        ]},
        {
        nameSelect:"Carroceria",
        optionsSelect:[
            {
                value:"Carroceria",
                name:"Carrocería",
                selected:true,
                hidden:true
            },
            ...carroceria
        ]},
        {
        nameSelect:"Transmision",
        optionsSelect:[
            {
                value:"Transmision",
                name:"Transmisión",
                selected:true,
                hidden:true
            },
            ...transmision
        ]},
    ]

    return (
        <aside id="asideLeft">
            <div className="filtrarCarros">
                <div className="carritoContenedor">
                    <span className="material-symbols-outlined carrito">
                        directions_car
                    </span>
                </div>
                <h3>BUSCAR EN EL INVENTARIO</h3>
            </div>
            {
                selects.map((select)=>{
                    return(
                        <select name={select.nameSelect} id="select">
                            {
                                select.optionsSelect.map((option)=>{
                                    return(
                                        <option  value={option.value} selected={option.selected} hidden={option.hidden} >{option.name}</option>
                                    )
                                })
                            }
                        </select>
                    )
                })
            }
            <div>
                <SliderPrecio/>
            </div>

            {/* <select name="pais">
                <option value="pais" selected hidden>pais</option>
                <option value="portugal" >Portugal</option>
                <option value="italia">Italia</option>
            </select>
            <select name="" id="">
                <option value=""></option>
            </select>
            <select name="" id="">
                <option value=""></option>
            </select>
            <select name="" id="">
                <option value=""></option>
            </select>
            <select name="" id="">
                <option value=""></option>
            </select>
            <select name="" id="">
                <option value=""></option>
            </select>
            <select name="" id="">
                <option value=""></option>
            </select>
            <select name="" id="">
                <option value=""></option>
            </select> */}
        </aside>
    );
}


const AsideRight = () => {
    let usuarios = [
        {
            nombre: "Eduardo",
            apellido: "Avila",
            correo: "eduardo@gmail.com",
            usuario: "enavila",
            rol: "admin",
            imgPerfil: fotoEduardo
        }
    ];

    let btnsAside=[
        {
            classIcon:"material-symbols-outlined",
            nameIcon:"garage_home",
            text:"Favortios"
        },
        {
            classIcon:"material-symbols-outlined",
            nameIcon:"forward_to_inbox",
            text:"Preguntas"
        },
        {
            classIcon:"material-symbols-outlined",
            nameIcon:"swap_driving_apps",
            text:"Compras"
        },
    ]

    let btnCerrarSesion = [
        {
            classIcon:"material-symbols-outlined",
            nameIcon:"power_settings_new",
            text:"Cerrar Sesion"
        }
    ]

    return (
        <aside id="asideRight">
            {
                usuarios.map((user) =>
                    (
                        <div class="userData">
                            <img src={user.imgPerfil} alt={user.usuario} style={{width:"50px", height:"50px"}} />
                            <div>
                                <p>@{user.usuario} </p>
                                <p>{user.rol}</p>
                            </div>
                        </div>
                    )
                )
            }
            {
                btnsAside.map((btn)=>
                    (
                        <div class="userData">
                            <span class={btn.classIcon}>{btn.nameIcon}</span>
                            <p>{btn.text}</p>
                        </div>
                    )
                )
            }
            {
                btnCerrarSesion.map((btn)=>
                    (
                        <div class="userData">
                            <span class={btn.classIcon}>{btn.nameIcon}</span>
                            <p>{btn.text}</p>
                        </div>
                    )
                )
            }
        </aside>
    );
}


export {AsideLeft, AsideRight} ;