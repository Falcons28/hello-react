import React from "react";

function Ataques({ setAtaqueJugador }) {
  const seleccionarAtaque = (e) => {
    setAtaqueJugador(e.target.id.replace("boton-", "").toUpperCase());
  };

  return (
    <section id="seleccionar-ataque">
      <h2>Elige tu ataque:</h2>
      <div>
        <button id="boton-fuego" onClick={seleccionarAtaque}>🔥 Fuego</button>
        <button id="boton-agua" onClick={seleccionarAtaque}>💦 Agua</button>
        <button id="boton-tierra" onClick={seleccionarAtaque}>🌱 Tierra</button>
        <button id="boton-aire" onClick={seleccionarAtaque}>💨 Aire</button>
        <button id="boton-rayo" onClick={seleccionarAtaque}>⚡ Rayo</button>
        <button id="boton-oscuridad" onClick={seleccionarAtaque}>🌑 Oscuridad</button>
        <button id="boton-hielo" onClick={seleccionarAtaque}>❄️ Hielo</button>
        <button id="boton-metal" onClick={seleccionarAtaque}>🛡️ Metal</button>
      </div>
    </section>
  );
}

export default Ataques;
