import React, { useState } from "react";
import "./App.css";
import "./componentes/seleccion.css";
import SeleccionMascotaJugador from "./componentes/SeleccionMascotaJugador";
import SeleccionarMascotaEnemigo from "./componentes/SeleccionarMascotaEnemigo";
import Ataques from "./componentes/Ataques";
import Combate from "./componentes/Combate";
import Reiniciar from "./componentes/ReiniciarJuego";
import Rendirse from "./componentes/Rendirse";

function App() {
  const [mascotaJugador, setMascotaJugador] = useState(null);
  const [mascotaEnemigo, setMascotaEnemigo] = useState(null);
  const [ataqueJugador, setAtaqueJugador] = useState(null);
  const [ataqueEnemigo, setAtaqueEnemigo] = useState(null);
  const [vidasJugador, setVidasJugador] = useState(6);
  const [vidasEnemigo, setVidasEnemigo] = useState(6);
  const [resultado, setResultado] = useState("");
  const [faseJuego, setFaseJuego] = useState("SELECCIONAR_MASCOTA");

 
  const seleccionarMascota = () => {
    console.log("seleccionarMascota ejecutandose...")
    console.log("Valor de mascota jugador::"+mascotaJugador)
    if (mascotaJugador) {
      console.log("Entra if")
      setFaseJuego("MOSTRAR_ATAQUES");
      const mascotaAleatoria = seleccionarMascotaAleatoria(); 
      console.log(mascotaAleatoria)
      setMascotaEnemigo(mascotaAleatoria);
    } else {
      alert("Por favor, selecciona una mascota antes de continuar.");
    }
  };

  const seleccionarMascotaAleatoria = () => {
    const mascotas = [
      { nombre: "Llamaground", imagen: "Llamaground.jpg" },
      { nombre: "Otterwater", imagen: "Otterwater.jpg" },
      { nombre: "Cougarfire", imagen: "Cougarfire.jpg" },
      { nombre: "Andiviento", imagen: "Andiviento.jpg" },
      { nombre: "Anguivolta", imagen: "Anguivolta.jpg" },
      { nombre: "Pumanoctis", imagen: "Pumanoctis.jpg" },
      { nombre: "Frigurso", imagen: "Frigurso.jpg" },
      { nombre: "Armaduron", imagen: "Armaduron.jpg" },
    ];

    const numeroAleatorio = Math.floor(Math.random() * 8);
    return mascotas[numeroAleatorio];
  };

  const ejecutarAtaque = (ataque) => {
    setAtaqueJugador(ataque);
    const ataqueEnemigoAleatorio = seleccionarAtaqueAleatorio();
    setAtaqueEnemigo(ataqueEnemigoAleatorio);
    setFaseJuego("COMBATE");
  };

  const seleccionarAtaqueAleatorio = () => {
    const ataques = ["FUEGO", "AGUA", "TIERRA", "AIRE", "RAYO", "OSCURIDAD", "HIELO", "METAL"];
    const numeroAleatorio = Math.floor(Math.random() * ataques.length);
    return ataques[numeroAleatorio];
  };

  return (
    <div className="App">
      <h1>¡Criaturas legendarias!</h1>

      <h2> FASE DDEL JUEGO:::: {faseJuego}  </h2>


      {faseJuego === "SELECCIONAR_MASCOTA" && (
        <div>
          <SeleccionMascotaJugador setMascotaJugador={setMascotaJugador} />
          <button onClick={seleccionarMascota}>Seleccionar</button>
        </div>
      )}

      {faseJuego === "MOSTRAR_ATAQUES" && (
        <div>
          <SeleccionarMascotaEnemigo mascotaEnemigo={mascotaEnemigo} />
          <Ataques setAtaqueJugador={setAtaqueJugador} />
        </div>
      )}

      {faseJuego === "COMBATE" && ataqueJugador && (
        <Combate
          mascotaJugador={mascotaJugador}
          mascotaEnemigo={mascotaEnemigo}
          ataqueJugador={ataqueJugador}
          ataqueEnemigo={ataqueEnemigo}
          setAtaqueEnemigo={setAtaqueEnemigo}
          vidasJugador={vidasJugador}
          setVidasJugador={setVidasJugador}
          vidasEnemigo={vidasEnemigo}
          setVidasEnemigo={setVidasEnemigo}
          resultado={resultado}
          setResultado={setResultado}
        />
      )}

      <Reiniciar />
      <Rendirse setVidasJugador={setVidasJugador} setResultado={setResultado} />
    </div>
  );
}

export default App;
