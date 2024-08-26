import React from "react";
import MascotaJugador from "./MascotaJugador";
import MascotaEnemigo from "./MascotaEnemigo";
import "./seleccion.css";

function Batalla({ vidasJugador, vidasEnemigo, ataqueJugador, ataqueEnemigo }) {
  return (
    <div className="batalla">
      <div>
        <p id="vidas-jugador">{vidasJugador}</p>
        <MascotaJugador ataqueJugador={ataqueJugador} />
      </div>
      <div>
        <p id="vidas-enemigo">{vidasEnemigo}</p>
        
        <MascotaEnemigo ataqueEnemigo={ataqueEnemigo} />

     
      </div>
    </div>
  );
}

export default Batalla;
