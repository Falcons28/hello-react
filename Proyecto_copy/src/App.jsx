import React, { useState } from "react";
import "./App.css";
import "./componentes/seleccion.css"; // Importación de la hoja de estilos
import SeleccionMascota from "./componentes/SeleccionMascota";
import SeleccionAtaque from "./componentes/SeleccionAtaque";
import Batalla from "./componentes/Batalla";
import Mensajes from "./componentes/Mensajes";
import BotonReiniciar from "./componentes/BotonReiniciar";
import BotonRendirse from "./componentes/BotonRendirse";
import seleccionarMascotaEnemigo from "./componentes/MascotaEnemigo";


function App() {
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [ataqueSeleccionado, setAtaqueSeleccionado] = useState(null);
  const [batallaIniciada, setBatallaIniciada] = useState(false);
  const [vidasJugador, setVidasJugador] = useState(6);
  const [vidasEnemigo, setVidasEnemigo] = useState(6);
  const [resultado, setResultado] = useState("¡Mucha suerte 😉!");

  const handleMascotaSeleccionada = (mascota) => {
    setMascotaSeleccionada(mascota);
    setBatallaIniciada(true);
  };

  const handleAtaqueSeleccionado = (ataque) => {
    setAtaqueSeleccionado(ataque);
  };

  return (
    <div className="App">
      <h1>¡Criaturas legendarias!</h1>
      <div className="ataques-titulo">🔥💦🌱💨⚡🌑❄️🛡️</div>
      <div className="div-padre">
        {!batallaIniciada ? (
          <SeleccionMascota seleccionarMascotaJugador={handleMascotaSeleccionada} />
        ) : (
          <>
            <SeleccionAtaque
              ataqueSeleccionado={ataqueSeleccionado}
              setAtaqueJugador={setAtaqueSeleccionado}
              vidasJugador={vidasJugador}
              vidasEnemigo={vidasEnemigo}
              setVidasJugador={setVidasJugador}
              setVidasEnemigo={setVidasEnemigo}
              setResultado={setResultado}
            />
            <Mensajes resultado={resultado} />
            <Batalla
              vidasJugador={vidasJugador}
              vidasEnemigo={vidasEnemigo}
              ataqueJugador={ataqueSeleccionado}
            />
          <seleccionarMascotaEnemigo/>
            <BotonReiniciar />
            <BotonRendirse setVidasJugador={setVidasJugador} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
