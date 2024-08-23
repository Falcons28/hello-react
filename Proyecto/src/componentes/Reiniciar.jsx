import React from "react";
import "./combate.css";

function Reiniciar() {
  const reiniciarJuego = () => {
    window.location.reload();
  };

  return (
    <div id="reiniciar">
      <button id="boton-reiniciar" className="btn-personalizado" onClick={reiniciarJuego}>🔃 Reiniciar</button>
    </div>
  );
}

export default Reiniciar;
