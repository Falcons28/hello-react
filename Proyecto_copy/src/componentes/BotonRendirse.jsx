import React from "react";
import "./seleccion.css";
function BotonRendirse({ setVidasJugador }) {
  const rendirse = () => {
    setVidasJugador(0);
    // Deshabilitar los botones de ataque
    document.getElementById("boton-fuego").disabled = true;
    document.getElementById("boton-agua").disabled = true;
    document.getElementById("boton-tierra").disabled = true;
    document.getElementById("boton-aire").disabled = true;
    document.getElementById("boton-rayo").disabled = true;
    document.getElementById("boton-oscuridad").disabled = true;
    document.getElementById("boton-hielo").disabled = true;
    document.getElementById("boton-metal").disabled = true;
    document.getElementById("reiniciar").style.display = "block";
    document.getElementById("btn-me-rindo").style.display = "none";
  };

  return (
    <div id="btn-me-rindo">
      <button
        id="boton-me-rindo"
        onClick={rendirse}
        className="btn-personalizado"
      >
        🏳️ Me rindo
      </button>
    </div>
  );
}

export default BotonRendirse;
