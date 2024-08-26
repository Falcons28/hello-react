function CrearMensajes(ataqueJugador, ataqueEnemigo) {
  let resultado = document.getElementById("resultado");
  let ataqueDelJugador = document.getElementById("ataque-jugador");
  let ataqueDelEnemigo = document.getElementById("ataque-enemigo");

  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  resultado.innerHTML = "Resultado: " + ataqueJugador + " vs " + ataqueEnemigo;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}

export default CrearMensajes;
