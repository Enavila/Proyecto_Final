import "../Styles/NavBar.css";
import fotoUser from"../Media/FotoUser1.jpeg"
const NavBar = () => {
    // function changeColor(a, span, color) {
    //     a.addEventListener("mouseover", () => {
    //         span.style.color = color;
    //     });

    //     a.addEventListener("mouseout", () => {
    //         span.style.color = "";
    //     });
    // }

    // const a = document.getElementById("myA");
    // const span = document.getElementById("mySpan");

    // changeColor(a, span, "red");
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
        </nav>
    );
        // <nav>
        //     <div class="logo">
        //         <h2><span>LES</span>motors</h2>
        //     </div>
        //     <div class="buscador">
        //         <input type="text" placeholder="Busca el carro de tus sueños" />
        //         <a id="myA" href="#">
        //             <span id="mySpan" class="material-symbols-outlined">
        //                 search
        //             </span>
        //         </a>
        //     </div>
        //     <div>
        //         <span class="material-symbols-outlined">
        //             garage_home
        //         </span>
        //         <img src={fotoUser} alt="FotoUser" id="fotoUser" />
        //     </div>
        // </nav>
}
export default NavBar;