function MensajeFinal({ resultado }) {
  let resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = resultado;

  // Deshabilitar botones
  document.querySelectorAll("button").forEach((button) => (button.disabled = true));
}

export default MensajeFinal;
