import "../Styles/NavBar.css";
import fotoUser from"../Media/FotoUser1.jpeg"
import { useState } from "react";
const NavBar = () => {

    const [usuario, setUsuario] = useState(localStorage.getItem("user"));
    

    return (
        <nav id="nav">
            <div class="logo">
                <h2><span>LES</span>motors</h2>
            </div>
            <div class="buscador">
                <input type="text" placeholder="Busca el carro de tus sueños" />
                <a id="myA" href="#">
                    <span id="mySpan" class="material-symbols-outlined">
                        search
                    </span>
                </a>
            </div>
            <div class="user">
                <span class="material-symbols-outlined">
                    garage_home
                </span>
                <img src={fotoUser} alt="FotoUser" id="fotoUser" />
            </div>
            {
            usuario && <div class="user">
                <span class="material-symbols-outlined">
                        garage_home
                </span>
                <img src={fotoUser} alt="FotoUser" id="fotoUser" />
            </div>
            }
        </nav>
    );

}
export default NavBar;