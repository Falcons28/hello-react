import React, { useEffect } from "react";
import CrearMensajes from "./CrearMensajes";
import RevisarVidas from "./RevisarVidas";

function Combate({
  mascotaJugador,
  mascotaEnemigo,
  ataqueJugador,
  ataqueEnemigo,
  setAtaqueEnemigo,
  vidasJugador,
  setVidasJugador,
  vidasEnemigo,
  setVidasEnemigo,
  resultado,
  setResultado,
}) {
  useEffect(() => {
    if (ataqueJugador && !ataqueEnemigo) {
      const ataque = AtaqueAleatorioEnemigo();
      setAtaqueEnemigo(ataque);
    } else if (ataqueJugador && ataqueEnemigo) {
      CrearMensajes(ataqueJugador, ataqueEnemigo);
      RevisarVidas(vidasJugador, setVidasJugador, vidasEnemigo, setVidasEnemigo, setResultado);
    }
  }, [ataqueJugador, ataqueEnemigo]);

  return (
    <div className="combate">
      <div id="resultado">{resultado}</div>
      {/* Muestra el estado del combate */}
    </div>
  );
}

export default Combate;
