// App.js
import React, { useState } from 'react';
import Tabla from './Tabla';
import './App.css';

function App() {
  const [colorFondoPar, setColorFondoPar] = useState('white');
  const [colorFondoImpar, setColorFondoImpar] = useState('white');
  const [mostrarSoloPrimeros10, setMostrarSoloPrimeros10] = useState(false);
  const [mostrarSoloUltimos10, setMostrarSoloUltimos10] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const cambiarColorPar = () => {
    setColorFondoPar(colorFondoPar === 'white' ? 'red' : 'white');
  };

  const cambiarColorImpar = () => {
    setColorFondoImpar(colorFondoImpar === 'white' ? 'green' : 'white');
  };

  const mostrarSolo10Elementos = () => {
    setMostrarSoloPrimeros10(!mostrarSoloPrimeros10);
    setMostrarSoloUltimos10(false);
  };

  const mostrarUltimos10Elementos = () => {
    setMostrarSoloUltimos10(!mostrarSoloUltimos10);
    setMostrarSoloPrimeros10(false);
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  return (

    <div>
      {/* Banner negro */}
      <div className="banner banner-negro">     
      </div>

      {/* Banner naranja */}
      <div className="banner banner-naranja">
        {/* Logo en el banner naranja */}
        <img
          src="/logo.png" // Reemplaza con la ruta correcta de tu logo
          alt="Logo"
          className="logo-en-banner"
        />
        <div className="texto-centrado">
          <p>Autor: Juan Pablo Zuluaga. Programación IV, Proyecto final.</p>
          </div>
      </div>

      {/* Roster */}
      <div className="roster">Roster</div>

      {/* Buscador */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={handleBusquedaChange}
        />
      </div>

      {/* Contenido de la aplicación */}
      <div className="contenido">
        {/* Botones debajo del buscador */}
        <div className="botones">
          <button onClick={cambiarColorPar}>Cambiar Color Pares</button>
          <button onClick={cambiarColorImpar}>Cambiar Color Impares</button>
          <button onClick={mostrarSolo10Elementos}>
            {mostrarSoloPrimeros10 ? 'Mostrar Todos' : 'Mostrar Solo 10'}
          </button>
          <button onClick={mostrarUltimos10Elementos}>
            {mostrarSoloUltimos10 ? 'Mostrar Todos' : 'Mostrar Ultimos 10'}
          </button>
        </div>

        {/* Tabla de Elementos */}
        <div className="tabla-container">
          <h1>Tabla de Elementos</h1>
          <Tabla
            colorFondoPar={colorFondoPar}
            colorFondoImpar={colorFondoImpar}
            mostrarSoloPrimeros10={mostrarSoloPrimeros10}
            mostrarSoloUltimos10={mostrarSoloUltimos10}
            busqueda={busqueda}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
