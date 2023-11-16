// Tabla.js
import React from 'react';

const Tabla = ({ colorFondoPar, colorFondoImpar, mostrarSoloPrimeros10, mostrarSoloUltimos10, busqueda }) => {
  // Definir un array estático de elementos
  const datos = [
    { id: 1, nombre: 'Jugador 1', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 2, nombre: 'Jugador 2', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 3, nombre: 'Jugador 3', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 4, nombre: 'Jugador 4', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 5, nombre: 'Jugador 5', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 6, nombre: 'Jugador 6', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 7, nombre: 'Jugador 7', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 8, nombre: 'Jugador 8', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 9, nombre: 'Jugador 9', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 10, nombre: 'Jugador 10', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 11, nombre: 'Jugador 11', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 12, nombre: 'Jugador 12', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 13, nombre: 'Jugador 13', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 14, nombre: 'Jugador 14', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 15, nombre: 'Jugador 15', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 16, nombre: 'Jugador 16', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 17, nombre: 'Jugador 17', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 18, nombre: 'Jugador 18', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 19, nombre: 'Jugador 19', equipo: 'Equipo 1', posicion: 'Posición 1' },
    { id: 20, nombre: 'Jugador 20', equipo: 'Equipo 1', posicion: 'Posición 1' },
  ];

  let elementosAMostrar = [...datos];

 

  if (mostrarSoloPrimeros10) {
    elementosAMostrar = datos.slice(0, 10);
  } else if (mostrarSoloUltimos10) {
    elementosAMostrar = datos.slice(-10);
  }

  if (busqueda) {
    elementosAMostrar = elementosAMostrar.filter((elemento) =>
      elemento.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Equipo</th>
          <th>Posición</th>
        </tr>
      </thead>
      <tbody>
        {elementosAMostrar.map((elemento, index) => (
          <tr
            key={elemento.id}
            style={{
              backgroundColor:
                index % 2 === 0 ? colorFondoPar : colorFondoImpar,
            }}
          >
            <td>{elemento.id}</td>
            <td>{elemento.nombre}</td>
            <td>{elemento.equipo}</td>
            <td>{elemento.posicion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
