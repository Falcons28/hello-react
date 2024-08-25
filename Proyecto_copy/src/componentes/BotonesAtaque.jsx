import React from "react";
import "./seleccion.css";
function BotonesAtaque({ setAtaqueJugador }) {
  return (
    <div>
      <button
        onClick={() => setAtaqueJugador("FUEGO 🔥")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">🔥</span>
        <br />
        Fuego
      </button>
      <button
        onClick={() => setAtaqueJugador("AGUA 💦")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">💦</span>
        <br />
        Agua
      </button>
      <button
        onClick={() => setAtaqueJugador("TIERRA 🌱")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">🌱</span>
        <br />
        Tierra
      </button>
      <button
        onClick={() => setAtaqueJugador("AIRE 💨")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">💨</span>
        <br />
        Aire
      </button>
      <button
        onClick={() => setAtaqueJugador("RAYO ⚡")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">⚡</span>
        <br />
        Rayo
      </button>
      <button
        onClick={() => setAtaqueJugador("OSCURIDAD 🌑")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">🌑</span>
        <br />
        Oscuridad
      </button>
      <button
        onClick={() => setAtaqueJugador("HIELO ❄️")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">❄️</span>
        <br />
        Hielo
      </button>
      <button
        onClick={() => setAtaqueJugador("METAL 🛡️")}
        className="btn-personalizado"
      >
        <span className="ataques-titulo">🛡️</span>
        <br />
        Metal
      </button>
    </div>
  );
}

export default BotonesAtaque;
