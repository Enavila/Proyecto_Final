import fotoEduardo from "../Media/FotoUser1.jpeg"

const AsideLesf = () => {
    let selects =[{
        nameSelect:"Marca",
        optionsSelect:[
            {
                value:"Marca",
                name:"Marca",
                selected:true,
                hidden:true
            },
            {
                value:"toyota",
                name:"toyota",
            },
            {
                value:"ford",
                name:"ford",
            }
        ]
    }]
    return (
        <aside id="asideLeft">
            <span>Filtros</span>
            {
                selects.map((select)=>{
                    return(
                        <select name={select.nameSelect} id="">
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
                        <div>
                            <img src={user.imgPerfil} alt={user.usuario} />
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
                        <div>
                            <span class={btn.classIcon}>{btn.nameIcon}</span>
                            <p>{btn.text}</p>
                        </div>
                    )
                )
            }
            {
                btnCerrarSesion.map((btn)=>
                    (
                        <div>
                            <span class={btn.classIcon}>{btn.nameIcon}</span>
                            <p>{btn.text}</p>
                        </div>
                    )
                )
            }
        </aside>
    );
}


export {AsideLesf, AsideRight} ;