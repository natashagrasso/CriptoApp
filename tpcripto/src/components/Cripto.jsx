import React from 'react';

const Cripto = ({ resultado, busqueda }) => {
  const { criptomoneda, moneda } = busqueda;

  if (!resultado.DISPLAY) return null;

  const displayData = resultado.DISPLAY[criptomoneda]?.[moneda];

  if (!displayData) return null;

  return (
    <div className="grid grid-cols-2 gap-4 mb-12 ">
      <div className="text-black bg-white p-4 border-2 border-yellow-400 rounded-md transition-transform transform hover:scale-105">
        <h2 className="name_criptomoneda mb-4">
          <b>
            {criptomoneda} / {moneda} ✨
          </b>
        </h2>

        <p className="results_criptos">
          <b>Precio actual: </b>
          <span>{displayData.OPENDAY}</span> 💲
        </p>
        <p className="results_criptos">
          <b>Precio mAs alto del dia:: </b>  
          <span>{displayData.HIGHDAY}</span> 📈
        </p>
        <p className="results_criptos">
          <b>Precio mas bajo del dia: </b>
          <span>{displayData.LOWDAY}</span>  📉
        </p>

        <p className="results_criptos">
          <b>Variacion utimas 24hs: </b>
          <span>
          {displayData.CHANGE24HOUR} ({displayData.CHANGEPCT24HOUR})
          </span> 🔄
        </p>

      </div>

      <div className="col-span-1"/>
    </div>
  );
};

export default Cripto;
