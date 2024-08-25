import React, { useState, useEffect } from "react";
import BotonesAtaque from "./BotonesAtaque";


import "./seleccion.css";

function SeleccionAtaque({
  ataqueSeleccionado,
  setAtaqueJugador,
  vidasJugador,
  vidasEnemigo,
  setVidasJugador,
  setVidasEnemigo,
  setResultado,
}) {
  const [ataqueEnemigo, setAtaqueEnemigo] = useState(null);

  const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const ataqueAleatorioEnemigo = () => {
    const ataques = [
      "FUEGO 🔥",
      "AGUA 💦",
      "TIERRA 🌱",
      "AIRE 💨",
      "RAYO ⚡",
      "OSCURIDAD 🌑",
      "HIELO ❄️",
      "METAL 🛡️",
    ];
    setAtaqueEnemigo(ataques[numeroAleatorio(0, 7)]);
  };

  const combate = () => {
    if (ataqueSeleccionado === ataqueEnemigo) {
      setResultado("¡EMPATE!");
    } else if (
      // Fuego 🔥
      (ataqueSeleccionado === "FUEGO 🔥" &&
        (ataqueEnemigo === "TIERRA 🌱" ||
          ataqueEnemigo === "HIELO ❄️" ||
          ataqueEnemigo === "METAL 🛡️")) ||
      // Agua 💦
      (ataqueSeleccionado === "AGUA 💦" &&
        (ataqueEnemigo === "FUEGO 🔥" ||
          ataqueEnemigo === "METAL 🛡️" ||
          ataqueEnemigo === "OSCURIDAD 🌑")) ||
      // Tierra 🌱
      (ataqueSeleccionado === "TIERRA 🌱" &&
        (ataqueEnemigo === "AGUA 💦" ||
          ataqueEnemigo === "AIRE 💨" ||
          ataqueEnemigo === "RAYO ⚡")) ||
      // Aire 💨
      (ataqueSeleccionado === "AIRE 💨" &&
        (ataqueEnemigo === "FUEGO 🔥" ||
          ataqueEnemigo === "HIELO ❄️" ||
          ataqueEnemigo === "OSCURIDAD 🌑")) ||
      // Rayo ⚡
      (ataqueSeleccionado === "RAYO ⚡" &&
        (ataqueEnemigo === "AGUA 💦" ||
          ataqueEnemigo === "AIRE 💨" ||
          ataqueEnemigo === "METAL 🛡️")) ||
      // Oscuridad 🌑
      (ataqueSeleccionado === "OSCURIDAD 🌑" &&
        (ataqueEnemigo === "RAYO ⚡" || ataqueEnemigo === "HIELO ❄️")) ||
      // Hielo ❄️
      (ataqueSeleccionado === "HIELO ❄️" &&
        (ataqueEnemigo === "TIERRA 🌱" || ataqueEnemigo === "OSCURIDAD 🌑")) ||
      // Metal 🛡️
      (ataqueSeleccionado === "METAL 🛡️" &&
        (ataqueEnemigo === "RAYO ⚡" ||
          ataqueEnemigo === "HIELO ❄️" ||
          ataqueEnemigo === "OSCURIDAD 🌑"))
    ) {
      if (vidasEnemigo > 0) {
        setVidasEnemigo(vidasEnemigo - 1);
        setResultado("¡GANASTE!");
      }
    } else {
      if (vidasJugador > 0) {
        setVidasJugador(vidasJugador - 1);
        setResultado("¡PERDISTE!");
      }
    }
    revisarVidas();
  };

  const revisarVidas = () => {
    if (vidasJugador <= 0) {
      setResultado("Lamentablemente perdiste😢, suerte a la próxima.");
    } else if (vidasEnemigo <= 0) {
      setResultado("¡FELICITACIONES!🎉, ganaste 😉");
    }
  };

  useEffect(() => {
    if (ataqueSeleccionado) {
      ataqueAleatorioEnemigo();
    }
  }, [ataqueSeleccionado]);

  useEffect(() => {
    if (ataqueSeleccionado && ataqueEnemigo) {
      combate();
    }
  }, [ataqueEnemigo]);

  return (
    <section id="seleccionar-ataque">
      <h2>Elige tu ataque</h2>
      <BotonesAtaque setAtaqueJugador={setAtaqueJugador} />
    </section>
  );
}

export default SeleccionAtaque;
