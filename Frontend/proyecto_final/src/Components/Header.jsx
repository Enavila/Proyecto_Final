import NavBar from "./NavBar"
import Botonera from "./Botonera"
import { AsideLeft, AsideRight } from "./Asides";
const Header = () => {
    return (
        <header style={{position:"fixed",width:"100%",zIndex:"2",}}>
            <NavBar/>
            <Botonera/>
            <div style={{position:"relative",display:"flex",justifyContent:"space-between"}}>
                
                <AsideRight/>
            </div>
        </header>
    );
}

export default Header;