import React, { useEffect, useState } from "react";
import "../componentes/seleccion.css";

function Batalla({ mascotaSeleccionada, ataqueSeleccionado }) {
  const [vidasJugador, setVidasJugador] = useState(6);
  const [vidasEnemigo, setVidasEnemigo] = useState(6);
  const [resultado, setResultado] = useState("¡Mucha suerte 😉!");
  const [ataqueEnemigo, setAtaqueEnemigo] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    if (ataqueSeleccionado) {
      realizarAtaque();
    }
  }, [ataqueSeleccionado]);

  const realizarAtaque = () => {
    const ataqueAleatorio = obtenerAtaqueAleatorio();
    setAtaqueEnemigo(ataqueAleatorio);

    let resultadoCombate;

    if (ataqueSeleccionado === ataqueAleatorio) {
      resultadoCombate = "¡EMPATE!";
    } else if (
      (ataqueSeleccionado === "fuego" && ["tierra", "hielo", "metal"].includes(ataqueAleatorio)) ||
      (ataqueSeleccionado === "agua" && ["fuego", "metal", "oscuridad"].includes(ataqueAleatorio)) ||
      (ataqueSeleccionado === "tierra" && ["agua", "aire", "rayo"].includes(ataqueAleatorio)) ||
      (ataqueSeleccionado === "aire" && ["fuego", "hielo", "oscuridad"].includes(ataqueAleatorio)) ||
      (ataqueSeleccionado === "rayo" && ["agua", "aire", "metal"].includes(ataqueAleatorio)) ||
      (ataqueSeleccionado === "oscuridad" && ["rayo", "hielo"].includes(ataqueAleatorio)) ||
      (ataqueSeleccionado === "hielo" && ["tierra", "oscuridad"].includes(ataqueAleatorio)) ||
      (ataqueSeleccionado === "metal" && ["rayo", "hielo", "oscuridad"].includes(ataqueAleatorio))
    ) {
      resultadoCombate = "¡GANASTE!";
      setVidasEnemigo(vidasEnemigo - 1);
    } else {
      resultadoCombate = "¡PERDISTE!";
      setVidasJugador(vidasJugador - 1);
    }

    setResultado(resultadoCombate);
    actualizarMensajes(ataqueSeleccionado, ataqueAleatorio, resultadoCombate);
    revisarVidas();
  };

  const obtenerAtaqueAleatorio = () => {
    const ataques = ["fuego", "agua", "tierra", "aire", "rayo", "oscuridad", "hielo", "metal"];
    const indiceAleatorio = Math.floor(Math.random() * ataques.length);
    return ataques[indiceAleatorio];
  };

  const actualizarMensajes = (ataqueJugador, ataqueEnemigo, resultado) => {
    const nuevoMensaje = `Tú: ${ataqueJugador.toUpperCase()} - Enemigo: ${ataqueEnemigo.toUpperCase()} => ${resultado}`;
    setMensajes((prevMensajes) => [...prevMensajes, nuevoMensaje]);
  };

  const revisarVidas = () => {
    if (vidasJugador <= 0) {
      setResultado("Lamentablemente perdiste😢, suerte a la próxima.");
      deshabilitarBotones();
    } else if (vidasEnemigo <= 0) {
      setResultado("¡FELICITACIONES!🎉, ganaste 😉");
      deshabilitarBotones();
    }
  };

  const deshabilitarBotones = () => {
    const botones = document.querySelectorAll(".btn-personalizado");
    botones.forEach((boton) => {
      boton.disabled = true;
    });
  };

  return (
    <section className="batalla">
      <p id="resultado">{resultado}</p>
      <div className="batalla-info">
        <div>
          <p id="vidas-jugador">{vidasJugador}</p>
          <div id="mascota-jugador">{mascotaSeleccionada}</div>
          <div id="ataque-jugador">Ataque: {ataqueSeleccionado && ataqueSeleccionado.toUpperCase()}</div>
        </div>
        <div>
          <p id="vidas-enemigo">{vidasEnemigo}</p>
          <div id="mascota-enemigo">Enemigo Aleatorio</div>
          <div id="ataque-enemigo">Ataque: {ataqueEnemigo && ataqueEnemigo.toUpperCase()}</div>
        </div>
      </div>
      <div className="mensajes-combate">
        {mensajes.map((mensaje, index) => (
          <p key={index}>{mensaje}</p>
        ))}
      </div>
    </section>
  );
}

export default Batalla;
