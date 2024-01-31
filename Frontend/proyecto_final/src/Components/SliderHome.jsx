import React, { useEffect, useState } from 'react'
import axios from "axios";

import {Autoplay} from "swiper/modules";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "../Styles/SliderHome.css"



// import Card from './Card';

const SliderHome = () => {
    const [vehiculos, setVehiculos] = useState([]);

    const getVehiculos = async () => {
        const url = "http://127.0.0.1:8000/vehiculos/"


        return await axios
        .get(url)
        .then(({data})=>setVehiculos(data))
        .catch((error)=>console.log(error));
    }

    useEffect(() => {
        getVehiculos()
    },[])

    console.log(vehiculos)

    
    return (
        <section id="sliderHome">
            <h2 class="sliderTitle">Los más buscados</h2>
            <div className="container">
                <div className="swiperContainer">
                    <Swiper style={{width:"100%",padding:"1rem 0"}}
                        loop={true}
                        modules={[Autoplay, Pagination]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            el:".pagination",
                            clickable: true
                        }}
                        slidesPerView={4}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween:25
                            },
                            "@0.50": {
                                slidesPerView: 1,
                                spaceBetween:25
                            },
                            "@1.00": {
                                slidesPerView: 1,
                                spaceBetween:25
                            },
                            "@1.25": {
                                slidesPerView: 2,
                                spaceBetween:20
                            },
                            "@1.50": {
                                slidesPerView: 2,
                                spaceBetween:30
                            },
                            "@1.75": {
                                slidesPerView: 3,
                                spaceBetween:20
                            },
                            "@2.00": {
                                slidesPerView: 4,
                                spaceBetween:30
                            }
                    
                        }}
                    >

                        {vehiculos.map((vehiculo)=>(
                            <SwiperSlide>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="pagination"></div>
            </div>
        </section>
    )
}

export default SliderHome