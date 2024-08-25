import React from "react";
import "./seleccion.css";
function Combate({
  ataqueJugador,
  ataqueEnemigo,
  setVidasJugador,
  setVidasEnemigo,
  crearMensajes,
  revisarVidas,
}) {
  const combate = () => {
    if (ataqueJugador === ataqueEnemigo) {
      crearMensajes("¡EMPATE!");
    } else if (
      (ataqueJugador === "FUEGO 🔥" &&
        (ataqueEnemigo === "TIERRA 🌱" ||
          ataqueEnemigo === "HIELO ❄️" ||
          ataqueEnemigo === "METAL 🛡️")) ||
      (ataqueJugador === "AGUA 💦" &&
        (ataqueEnemigo === "FUEGO 🔥" ||
          ataqueEnemigo === "METAL 🛡️" ||
          ataqueEnemigo === "OSCURIDAD 🌑")) ||
      (ataqueJugador === "TIERRA 🌱" &&
        (ataqueEnemigo === "AGUA 💦" ||
          ataqueEnemigo === "AIRE 💨" ||
          ataqueEnemigo === "RAYO ⚡")) ||
      (ataqueJugador === "AIRE 💨" &&
        (ataqueEnemigo === "FUEGO 🔥" ||
          ataqueEnemigo === "HIELO ❄️" ||
          ataqueEnemigo === "OSCURIDAD 🌑")) ||
      (ataqueJugador === "RAYO ⚡" &&
        (ataqueEnemigo === "AGUA 💦" ||
          ataqueEnemigo === "AIRE 💨" ||
          ataqueEnemigo === "METAL 🛡️")) ||
      (ataqueJugador === "OSCURIDAD 🌑" &&
        (ataqueEnemigo === "RAYO ⚡" || ataqueEnemigo === "HIELO ❄️")) ||
      (ataqueJugador === "HIELO ❄️" &&
        (ataqueEnemigo === "TIERRA 🌱" || ataqueEnemigo === "OSCURIDAD 🌑")) ||
      (ataqueJugador === "METAL 🛡️" &&
        (ataqueEnemigo === "RAYO ⚡" ||
          ataqueEnemigo === "HIELO ❄️" ||
          ataqueEnemigo === "OSCURIDAD 🌑"))
    ) {
      setVidasEnemigo((prevVidas) => prevVidas - 1);
      crearMensajes("¡GANASTE!");
    } else {
      setVidasJugador((prevVidas) => prevVidas - 1);
      crearMensajes("¡PERDISTE!");
    }

    revisarVidas();
  };

  React.useEffect(() => {
    if (ataqueJugador && ataqueEnemigo) {
      combate();
    }
  }, [ataqueJugador, ataqueEnemigo]);

  return null;
}

export default Combate;
