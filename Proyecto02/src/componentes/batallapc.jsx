import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './batallapc.css';
import cougarfire from '../assets/cougarfire.jpeg';
import otterwater from '../assets/otterwater.jpeg';
import llamaground from '../assets/llamaground.jpeg';

function BatallaPC() {
  const location = useLocation();
  const pokemonSeleccionado = location.state?.pokemonSeleccionado;
  const [pokemonPC, setPokemonPC] = useState(null);
  const [vidasJugador, setVidasJugador] = useState(5);
  const [vidasPC, setVidasPC] = useState(5);
  const [resultado, setResultado] = useState('');
  const [iconoResultado, setIconoResultado] = useState('');
  const [historial, setHistorial] = useState([]);

  const poderes = [
    { nombre: 'Unu', icono: '💧' },
    { nombre: 'Allpa', icono: '🌱' },
    { nombre: 'Nina', icono: '🔥' },
    { nombre: 'Wayra', icono: '🍃' },
    { nombre: 'Rumi', icono: '⚗️' },
  ];

  const poderPredomina = {
    'Unu': 'Nina',
    'Allpa': 'Unu',
    'Nina': 'Wayra',
    'Wayra': 'Rumi',
    'Rumi': 'Allpa'
  };

  const pokemons = [
    { nombre: 'Cougarfire', img: cougarfire },
    { nombre: 'Otterwater', img: otterwater },
    { nombre: 'Llamaground', img: llamaground },
  ];

  useEffect(() => {
    const pokemonAleatorio = pokemons[Math.floor(Math.random() * pokemons.length)];
    setPokemonPC(pokemonAleatorio);
  }, []);

  useEffect(() => {
    if (vidasJugador === 0 || vidasPC === 0) {
      const mensajeFinal = vidasJugador === 0 ? '¡Perdiste el juego!' : '¡Ganaste el juego!';
      alert(mensajeFinal);
    }
  }, [vidasJugador, vidasPC]);

  const elegirPoder = (poderJugador) => {
    const poderPC = poderes[Math.floor(Math.random() * poderes.length)].nombre;
    let resultadoRonda = '';
    let icono = '';

    if (poderJugador.nombre === poderPC) {
      resultadoRonda = 'Empate';
      icono = '😲';
    } else if (poderPredomina[poderJugador.nombre] === poderPC) {
      resultadoRonda = 'Ganaste';
      icono = '😊';
      setVidasPC((prevVidas) => prevVidas - 1);
    } else {
      resultadoRonda = 'Perdiste';
      icono = '😢';
      setVidasJugador((prevVidas) => prevVidas - 1);
    }

    setResultado(resultadoRonda);
    setIconoResultado(icono);

    setHistorial([
      ...historial,
      {
        poderJugador: poderJugador.nombre,
        poderPC,
        resultadoRonda,
        icono
      }
    ]);
  };

  return (
    <div className="batalla-fondo">
      <h1 className="titulo-batalla">¡Criaturas legendarias!</h1>
      <div className="iconos-superiores">
        {poderes.map((poder) => (
          <div key={poder.nombre} className="poder" onClick={() => elegirPoder(poder)}>
            <span className="icono-poder">{poder.icono}</span>
            <span>{poder.nombre}</span>
          </div>
        ))}
      </div>
      <div className="contenedor-batalla">
        <h2>Elige tus ataques</h2>
        <div className="resultado">
          {iconoResultado} {resultado}
        </div>
        <div className="vidas">
          <p>Vidas Jugador: {vidasJugador}</p>
          <p>Vidas PC: {vidasPC}</p>
        </div>
        <div className="pokemon-batalla">
          <div className="pokemon">
            <img src={pokemonSeleccionado.img} alt={pokemonSeleccionado.nombre} />
            <p>{pokemonSeleccionado.nombre}</p>
          </div>
          <div className="pokemon">
            <img src={pokemonPC?.img} alt={pokemonPC?.nombre} />
            <p>{pokemonPC?.nombre}</p>
          </div>
        </div>
        <div className="historial-batalla">
          {historial.map((entry, index) => (
            <div key={index} className="registro-batalla">
              <p>{entry.icono} {entry.poderJugador} vs {entry.poderPC}</p>
              <p>{entry.resultadoRonda}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BatallaPC;
