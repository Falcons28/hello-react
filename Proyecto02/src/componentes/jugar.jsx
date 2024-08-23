import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './jugar.css';
import cougarfire from '../assets/cougarfire.jpeg';
import otterwater from '../assets/otterwater.jpeg';
import llamaground from '../assets/llamaground.jpeg';

function Jugar() {
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const navigate = useNavigate();

  const pokemons = [
    { nombre: 'Cougarfire', img: cougarfire, icono: '🔥' },
    { nombre: 'Otterwater', img: otterwater, icono: '💧' },
    { nombre: 'Llamaground', img: llamaground, icono: '🌱' },
  ];

  const seleccionarMascota = (mascota) => {
    setMascotaSeleccionada(mascota);
  };

  const iniciarBatalla = () => {
    if (mascotaSeleccionada) {
      navigate('/batallapc', { state: { pokemonSeleccionado: mascotaSeleccionada } });
    } else {
      alert('Por favor, selecciona una mascota antes de continuar.');
    }
  };

  return (
    <div className="jugar-fondo">
      <h1 className="titulo">¡Criaturas legendarias!</h1>
      <div className="iconos-superiores">
        <span role="img" aria-label="icono-hoja">🍃</span>
        <span role="img" aria-label="icono-fuego">🔥</span>
        <span role="img" aria-label="icono-agua">💧</span>
        <span role="img" aria-label="icono-tierra">🌱</span>
        <span role="img" aria-label="icono-pocion">⚗️</span>
      </div>
      <div className="seleccion-mascota">
        <h2>Elige tu mascota:</h2>
        <div className="mascotas">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.nombre}
              className={`mascota ${mascotaSeleccionada === pokemon ? 'seleccionada' : ''}`}
              onClick={() => seleccionarMascota(pokemon)}  // Asegúrate de no pasar ningún evento si no es necesario
            >
              <img src={pokemon.img} alt={pokemon.nombre} className="imagen-mascota"/>
              <div className="detalle-mascota">
                <p className="nombre-mascota">{pokemon.nombre}</p>
                <span className="icono-mascota" role="img" aria-label={pokemon.nombre.toLowerCase()}>{pokemon.icono}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="botones">
          <button onClick={iniciarBatalla}>Batalla con PC</button>
          <button>Batalla en Mapa</button>
        </div>
      </div>
    </div>
  );
}

export default Jugar;
