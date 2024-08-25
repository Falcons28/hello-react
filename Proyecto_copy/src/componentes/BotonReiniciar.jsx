import React from "react";
import "./seleccion.css";
function BotonReiniciar() {
  const reiniciarJuego = () => {
    document.location.reload();
  };

  return (
    <div id="reiniciar">
      <button
        id="boton-reiniciar"
        onClick={reiniciarJuego}
        className="btn-personalizado"
      >
        🔃 Reiniciar
      </button>
    </div>
  );
}

export default BotonReiniciar;
