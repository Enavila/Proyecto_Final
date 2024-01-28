import NavBar from "./NavBar"
import Botonera from "./Botonera"
import { AsideLeft, AsideRight } from "./Asides";
const Header = () => {
    return (
        <header>
            <NavBar/>
            <Botonera/>
            <AsideLeft/>
            <AsideRight/>
        </header>
    );
}

export default Header;