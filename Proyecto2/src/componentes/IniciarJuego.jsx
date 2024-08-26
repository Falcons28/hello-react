import React, { useEffect } from "react";

function IniciarJuego({
  seleccionarMascotaJugador,
  ataqueFuego,
  ataqueAgua,
  ataqueTierra,
  ataqueAire,
  ataqueRayo,
  ataqueOscuridad,
  ataqueHielo,
  ataqueMetal,
  reiniciarJuego,
  rendirse,
}) {
  useEffect(() => {
    const seleccionarAtaqueElement = document.getElementById("seleccionar-ataque");
    const reiniciarElement = document.getElementById("reiniciar");

    if (seleccionarAtaqueElement) {
      seleccionarAtaqueElement.style.display = "none";
    }

    if (reiniciarElement) {
      reiniciarElement.style.display = "none";
    }

    const botonSeleccionar = document.getElementById("boton-seleccionar");
    if (botonSeleccionar) {
      botonSeleccionar.addEventListener("click", seleccionarMascotaJugador);
    }

    const botonFuego = document.getElementById("boton-fuego");
    if (botonFuego) {
      botonFuego.addEventListener("click", ataqueFuego);
    }

    const botonAgua = document.getElementById("boton-agua");
    if (botonAgua) {
      botonAgua.addEventListener("click", ataqueAgua);
    }

    const botonTierra = document.getElementById("boton-tierra");
    if (botonTierra) {
      botonTierra.addEventListener("click", ataqueTierra);
    }

    const botonAire = document.getElementById("boton-aire");
    if (botonAire) {
      botonAire.addEventListener("click", ataqueAire);
    }

    const botonRayo = document.getElementById("boton-rayo");
    if (botonRayo) {
      botonRayo.addEventListener("click", ataqueRayo);
    }

    const botonOscuridad = document.getElementById("boton-oscuridad");
    if (botonOscuridad) {
      botonOscuridad.addEventListener("click", ataqueOscuridad);
    }

    const botonHielo = document.getElementById("boton-hielo");
    if (botonHielo) {
      botonHielo.addEventListener("click", ataqueHielo);
    }

    const botonMetal = document.getElementById("boton-metal");
    if (botonMetal) {
      botonMetal.addEventListener("click", ataqueMetal);
    }

    const botonReiniciar = document.getElementById("boton-reiniciar");
    if (botonReiniciar) {
      botonReiniciar.addEventListener("click", reiniciarJuego);
    }

    const botonMeRindo = document.getElementById("boton-me-rindo");
    if (botonMeRindo) {
      botonMeRindo.addEventListener("click", rendirse);
    }

    // Limpieza de los event listeners al desmontar el componente
    return () => {
      if (botonSeleccionar) {
        botonSeleccionar.removeEventListener("click", seleccionarMascotaJugador);
      }
      if (botonFuego) {
        botonFuego.removeEventListener("click", ataqueFuego);
      }
      if (botonAgua) {
        botonAgua.removeEventListener("click", ataqueAgua);
      }
      if (botonTierra) {
        botonTierra.removeEventListener("click", ataqueTierra);
      }
      if (botonAire) {
        botonAire.removeEventListener("click", ataqueAire);
      }
      if (botonRayo) {
        botonRayo.removeEventListener("click", ataqueRayo);
      }
      if (botonOscuridad) {
        botonOscuridad.removeEventListener("click", ataqueOscuridad);
      }
      if (botonHielo) {
        botonHielo.removeEventListener("click", ataqueHielo);
      }
      if (botonMetal) {
        botonMetal.removeEventListener("click", ataqueMetal);
      }
      if (botonReiniciar) {
        botonReiniciar.removeEventListener("click", reiniciarJuego);
      }
      if (botonMeRindo) {
        botonMeRindo.removeEventListener("click", rendirse);
      }
    };
  }, [
    seleccionarMascotaJugador,
    ataqueFuego,
    ataqueAgua,
    ataqueTierra,
    ataqueAire,
    ataqueRayo,
    ataqueOscuridad,
    ataqueHielo,
    ataqueMetal,
    reiniciarJuego,
    rendirse,
  ]);

  return null; // Este componente no renderiza nada, solo configura el juego al inicio
}

export default IniciarJuego;
