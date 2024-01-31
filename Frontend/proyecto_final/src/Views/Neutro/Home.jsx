import { Vehiculos, VehiculosIndividual} from "../../Components/VehiculosViews";
import SliderHome from "../../Components/SliderHome";
import {PublicidadHome, PublicidadHome2, PublicidadHome3, PublicidadHome4} from "../../Components/PublicidadHome";
const Home = () => {
    return (
        <main>
            <PublicidadHome/>
            <SliderHome/>
            <PublicidadHome4/>
            <PublicidadHome2/>
            <PublicidadHome3/>
            {/* <Vehiculos/>
            <VehiculosIndividual /> */}
        </main>
    );
}

export default Home;