import React, { useState } from "react";
import "./seleccion.css";

function SeleccionAtaque({ onAtaqueSeleccionado, onIniciarBatalla }) {
  const [ataqueSeleccionado, setAtaqueSeleccionado] = useState(null);

  const seleccionarAtaque = (event) => {
    const ataqueId = event.target.id;
    setAtaqueSeleccionado(ataqueId);
    onAtaqueSeleccionado(ataqueId);
  };

  return (
    <section id="seleccionar-ataque">
      <h2>Elige tu ataque</h2>
      <div>
        <button id="fuego" className="btn-personalizado" onClick={seleccionarAtaque}>
          🔥<br />Fuego
        </button>
        <button id="agua" className="btn-personalizado" onClick={seleccionarAtaque}>
          💦<br />Agua
        </button>
        <button id="tierra" className="btn-personalizado" onClick={seleccionarAtaque}>
          🌱<br />Tierra
        </button>
        <button id="aire" className="btn-personalizado" onClick={seleccionarAtaque}>
          💨<br />Aire
        </button>
        <button id="rayo" className="btn-personalizado" onClick={seleccionarAtaque}>
          ⚡<br />Rayo
        </button>
        <button id="oscuridad" className="btn-personalizado" onClick={seleccionarAtaque}>
          🌑<br />Oscuridad
        </button>
        <button id="hielo" className="btn-personalizado" onClick={seleccionarAtaque}>
          ❄️<br />Hielo
        </button>
        <button id="metal" className="btn-personalizado" onClick={seleccionarAtaque}>
          🛡️<br />Metal
        </button>
      </div>
      <button
        onClick={onIniciarBatalla}
        className="btn-personalizado"
        disabled={!ataqueSeleccionado}
      >
        ⚔️ Iniciar Batalla
      </button>
    </section>
  );
}

export default SeleccionAtaque;
