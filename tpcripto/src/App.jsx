import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import Formulario from './components/Formulario';
import Cripto from './components/Cripto';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [busqueda, setBusqueda] = useState({
    criptomoneda: '',
    moneda: ''
  });

  const [resultado, setResultado] = useState({});
  const [consultar, setConsultar] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const { criptomoneda, moneda } = busqueda;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          setResultado(resultado);
          setConsultar(false);
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      }
    };

    consultarAPI();
  }, [consultar, busqueda]);

  //carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const fondoStyle = {
    backgroundImage: 'url("/src/assets/fondoCripto.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
  <div style={fondoStyle} className="min-h-screen flex items-center justify-center">
    {/* <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 min-h-screen flex items-center justify-center"> */}
      <div className="container mx-auto p-100 bg-yellow rounded-md">
        <Header titulo="Cotizador de Criptomonedas" />

        <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
          <div>
            <Slider className="w-full h-auto" {...sliderSettings}>
              <img src="/src/assets/bitcoinImage.jpg" alt="bitcoin"className="w-full h-auto"/>
              <img src="/src/assets/cardano.jpg" alt="cardano"className="w-full h-auto"/>
              <img src="/src/assets/EOS.webp" alt="EOS"className="w-full h-auto"/>
              <img src="/src/assets/Ethereum.jpg" alt="Ethereum"className="w-full h-auto"/>
              <img src="/src/assets/golden-bitcoin.jpg" alt="golden-bitcoin"className="w-full h-auto"/>
              <img src="/src/assets/link.webp" alt="link"className="w-full h-auto"/>
              <img src="/src/assets/riple.jpg" alt="golden-bitcoin"className="w-full h-auto"/>
              <img src="/src/assets/wow.jpg" alt="golden-bitcoin"className="w-full h-auto"/>
            </Slider>
          </div>
          
          <div className="md:col-span-1">
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
          </div>
        </div>

        <Cripto resultado={resultado} busqueda={busqueda} />
      </div>
    </div>
  );
};

export default App;
