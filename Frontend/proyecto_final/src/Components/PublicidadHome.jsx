import React from 'react'

import {Autoplay} from "swiper/modules";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import Publicidad1 from "../Media/eduardo1.png"
import Publicidad2 from "../Media/eduardo2.png"
import Publicidad3 from "../Media/eduardo3.png"
import Publicidad4 from "../Media/eduardo4.jpg"
const PublicidadHome = () => {
    const publicidades = [
        {
            name: "publicidad1",
            img: Publicidad1
        },
        {
            name: "publicidad2",
            img: Publicidad2
        },
        {
            name:"publicidad3",
            img: Publicidad3
        },
        {
            name:"publicidad4",
            img: Publicidad4
        }

    ]
  return (
    <section  style={{width:"100%",margin:"0",marginBottom:"-1rem",padding:"0",zIndex:"0"}}>
            <Swiper
                style={{margin:"0",padding:"0"}}
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
            {
                publicidades.map((publicidad)=>(
                    <SwiperSlide style={{overflow:"hidden",margin:"0",padding:"0"}} key={publicidad.name}><img src={publicidad.img} style={{ width:"100%",objectFit:"cover",overflow:"hidden"}} /></SwiperSlide>
                ))
            }
            </Swiper>
    </section>
  )
}

const PublicidadHome2 = () => {

    return (
        <section id='PublicidadHome2' style={{width:"100%",margin:" 0",padding:"0",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",backgroundColor:"#3374DB"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"3rem 7rem",gap:"2rem"}}>
                <h2 style={{color:"#fff", fontSize:"3.5rem",fontFamily:"'Poppins', sans-serif"}}>Cambia tu auto con más beneficios</h2>
                <div style={{display:"flex",flexDirection:"column",gap:".5rem"}}>
                    <p style={{color:"#fff",fontSize:"1.5rem"}}>Te damos un bono extra.</p>
                    <p style={{color:"#fff",fontSize:"1.5rem",borderBottom:"1px solid #fff",borderTop:"1px solid #fff",padding:".5rem 0"}}>Plan de Pagos Pre aprobado</p>
                    <p style={{color:"#fff",fontSize:"1.5rem"}}>No te quedes sin tu auto, los intercambiamos en menos de 24hrs.</p>
                </div>
                <button style={{width:"20rem",height:"3rem",borderRadius:"10px",border:"#3374DB solid 1px",backgroundColor:"rgba(255, 255, 255, 1)",color:"#3374DB",fontSize:"1.5rem"}}>Vende tu auto</button>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJteC9hc3NldHMvaW1hZ2VzL2hvbWUvanBnL2p1bWJvdHJvbi1jaGFuZ2Utc2VsbC1sZy5qcGciLCJlZGl0cyI6e319" alt=""  />
            </div>
        </section>
    );
}

const PublicidadHome3  = () => {
    const beneficios = [
        {
            text: "Inspección técnica gratuita",
            icont: (
                <span class="material-symbols-outlined" style={{color:"#303030",fontSize:"6rem"}}>
                    laptop_mac
                </span>
            )
        },
        {
            text: "Servicio de mantenimiento",
            icont: (
                <span class="material-symbols-outlined" style={{color:"#303030",fontSize:"6rem"}}>
                    construction
                </span>
            )
        },
        {
            text: "Plan de Pagos Pre aprobado",
            icont: (
                <span class="material-symbols-outlined" style={{color:"#303030",fontSize:"6rem"}}>
                    payments
                </span>
            )
        },
        {
            text: "Vende tu auto",
            icont: (
                <span class="material-symbols-outlined" style={{color:"#303030",fontSize:"6rem"}}>
                    sell
                </span>
            )
        },
        {
            text: "Paga con tarjeta o PayPal",
            icont: (
                <span class="material-symbols-outlined" style={{color:"#303030",fontSize:"6rem"}}>
                    credit_card
                </span>
            )
        },
        {
            text: "Recibe tu auto en tu casa",
            icont: (
                <span class="material-symbols-outlined" style={{color:"#303030",fontSize:"6rem"}}>
                    location_on
                </span>
            )
        }
    ]
    return (
        <section id='PublicidadHome3' style={{width:"80%",margin:"0 auto",padding:"3rem 0 3rem 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem",backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
            <span   style={{border:"1px solid #3374DB",width:"10rem",height:"5px",borderRadius:"10px",backgroundColor:"#3374DB"}}></span>
            <h2 style={{color:"#303030", fontSize:"3.5rem"}}>Beneficios de vender tu carro con nosotros</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"3rem",marginTop:"2rem"}}>
                {beneficios.map((beneficio)=>(
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem",backgroundColor:"rgba(255, 255, 255, 0.60)",padding:"1rem",borderRadius:"10px",boxShadow:"0 0 10px 10px rgba(0, 0, 0, 0.2)"}}>
                        {beneficio.icont}
                        <p style={{color:"#303030",fontSize:"1.3rem"}}>{beneficio.text}</p>
                    </div>
                ))}
            </div>
        </section>

    );
}

const PublicidadHome4 = () => {
    const marcas = [
        {
            marca: "Toyota",
            icont:"https://http2.mlstatic.com/D_Q_NP_972198-MLA47080682470_082021-G.webp"
        },
        {
            marca: "Chevrolet",
            icont:"https://http2.mlstatic.com/D_Q_NP_861189-MLA47080406840_082021-G.webp"
        },
        {
            marca: "Ford",
            icont:"https://http2.mlstatic.com/D_Q_NP_677735-MLA47080678535_082021-G.webp"
        },
        {
            marca:"Jeep",
            icont:"https://http2.mlstatic.com/D_Q_NP_963805-MLA47080678546_082021-G.webp"
        },
        {
            marca:"Fiat",
            icont:"https://http2.mlstatic.com/D_Q_NP_780050-MLA47080682517_082021-G.webp"
        },
        {
            marca:"Chery",
            icont:"https://http2.mlstatic.com/D_Q_NP_922392-MLA47080406891_082021-G.webp"
        }
    ]
    return(
        <section id='PublicidadHome4' style={{width:"80%",margin:"0 auto",padding:"3rem 0 3rem 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem",backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
            <h2 style={{color:"#303030", fontSize:"3.5rem"}}>Nuestras marcas</h2>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"2rem",marginTop:"2rem"}}>
                {
                    marcas.map((marca)=>(
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem"}}>
                            <img src={marca.icont} alt={marca.marca} style={{width:"100%",borderRadius:"100%"}}/>
                            <p style={{color:"#303030",fontSize:"1.3rem"}}>{marca.marca}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export  {PublicidadHome, PublicidadHome2, PublicidadHome3, PublicidadHome4}






                {/* <Swiper style={{width:"100%",backgroundColor:"rgba(400, 200, 100)",margin:"0",padding:"0"}}
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
                    slidesPerView={1}
                    spaceBetween={25}
                >

                    {publicidades.map((publicidad)=>(
                        <SwiperSlide style={{width:"100%", objectFit:"cover"}}>
                            <div class="publicidad" style={{width:"100%", objectFit:"cover"}} key={publicidad.name}>
                                <a href="#" class="anclaPublicidad" style={{width:"100%", objectFit:"cover"}}>
                                    <img src={publicidad.img}  alt={publicidad.name} style={{width:"100%", objectFit:"cover"}}/>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper> */}