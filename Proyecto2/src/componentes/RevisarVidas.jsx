import MensajeFinal from "./MensajeFinal";

function RevisarVidas(vidasJugador, setVidasJugador, vidasEnemigo, setVidasEnemigo, setResultado) {
  if (vidasJugador <= 0) {
    setResultado("Lamentablemente perdiste😢, suerte a la próxima.");
    MensajeFinal(setResultado);
  } else if (vidasEnemigo <= 0) {
    setResultado("¡FELICITACIONES!🎉 Ganaste 😉");
    MensajeFinal(setResultado);
  }
}

export default RevisarVidas;
