import React from "react";
import "./seleccion.css";
function MascotaJugador({ ataqueJugador }) {
  return (
    <div id="mascota-jugador">
      <div id="ataque-jugador">{ataqueJugador}</div>
    </div>
  );
}

export default MascotaJugador;
