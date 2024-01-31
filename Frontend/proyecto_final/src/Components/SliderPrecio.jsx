import '../Styles/SliderPrecio.css';
import Slider from 'react-slider';
import { useState } from 'react';

const SliderPrecio = () => {
    const precioMinimo = 3500;
    const precioMaximo = 25000;
    const [valores, setValores] = useState([precioMinimo, precioMaximo]);

    return (
        <div id="app">
            <div className="contenedorSlider">
                <p className="precio">PRECIO</p>

                <Slider className={"slider"}
                    onChange={setValores}
                    value={valores}
                    min={precioMinimo}
                    max={precioMaximo}/>

                <p className="rangoActual">
                    Rango Actual: ${valores[1] - valores[0]}
                </p>

                <div className={"valores"}>
                    <span className="contenedorValores">${valores[0]}</span>
                    <span className="contenedorValores">${valores[1]}</span>
                </div>

                <div className='botones'>
                    <button>
                        <span className="material-symbols-outlined">
                            filter_alt
                        </span>
                        Filtrar
                    </button>

                    <button>
                        Reestablecer
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SliderPrecio;