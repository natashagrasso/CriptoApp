import { useState } from 'react';

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
  const [error, guardarError] = useState(false);

  const { criptomoneda, moneda } = busqueda;

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (moneda.trim() === '' || criptomoneda.trim() === '') {
      guardarError(true);
      // Evitar la consulta si hay errores
      setConsultar(false);
      return;
    }

    guardarError(false);
    setConsultar(true);
  };

  return (
    <div className="w-2/3 lg:w-2/3 m-auto px-0 pb-8 w-50">
      {error && (
        <p className="bg-red-600 text-white p-2 mb-2 rounded-md"> POR FAVOR SELECCIONE UNA MONEDA ...
        </p>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-9 rounded-md w-full">
        <div className="mb-500 w-full">
        <label htmlFor="Moneda" className="block text-black-700">
          Tipo de moneda
        </label>
        <select
          id="moneda"
          className=" border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md  "
          name="moneda"
          value={moneda}
          onChange={handleChange}
        >
          <option value=''>Seleccionar..</option>
          <option value='USD'>Dólares Estadounidenses</option>
          <option value='ARS'>Pesos Argentinos </option>
        </select>

        <label htmlFor="Criptomoneda">Seleccione una criptomoneda</label>
          <select
            id="criptomoneda"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            name="criptomoneda"
            value={criptomoneda}
            onChange={handleChange}
        >
            <option value=''>Seleccionar... </option>
            <option value='BTC'>Bitcoin</option>
            <option value='THE'>Thether </option>
            <option value = 'ETH'>Etherotum </option>
            <option value = 'DOGE'>Dogecoin </option>
            <option value = 'CAR'>Cardano  </option>
            <option value = 'LTC'>Litecoin  </option>
            <option value = 'BNB'>Binance Coin </option>
            <option value = 'DOT'>Polkadot  </option>
            <option value = 'XRP'>Ripple  </option>
            <option value = 'BIT'>BitBay </option>
            <option value = 'EOS'>Eos  </option>
            <option value = 'BCH'>Bitcoin cash </option>
            <option value = 'LINK'>Chainlink  </option>
            <option value = 'AIDOC'>Aidoc</option>
            <option value = 'XMR'>Monero </option>
            <option value = 'NEO'>NEO </option>
            <option value = 'IOTA'>Uniswap </option>
            <option value = 'XLM'>Lumens </option>
            <option value = 'ANT'>A </option>
            <option value = 'ARAW'> Araw</option>

          </select>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className="bg-yellow-400 w-full p-2 text-white rounded-md uppercase font-bold hover:bg-yellow-400 cursor-pointer transitions-color mt-6"
        />
      </form>
    </div>
  );
};

export default Formulario;