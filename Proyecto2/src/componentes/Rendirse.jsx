import React from "react";

function Reiniciar() {
  const reiniciarJuego = () => {
    window.location.reload();
  };

  return (
    <button id="boton-reiniciar" onClick={reiniciarJuego} className="btn-personalizado">
      🔃 Reiniciar
    </button>
  );
}

export default Reiniciar;
