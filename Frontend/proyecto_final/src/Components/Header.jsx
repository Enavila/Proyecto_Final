import NavBar from "./NavBar"
import Botonera from "./Botonera"
import { AsideLesf, AsideRight } from "./Asides";
const Header = () => {
    return (
        <header>
            <NavBar/>
            <Botonera/>
            {/* <AsideLesf/>
            <AsideRight/> */}
        </header>
    );
}

export default Header;