import { Fragment } from "react";
import './carrusel.css';
import carrusel1 from '../image/carrusel1.jpg';
import carrusel2 from '../image/carrusel2.jpg';
import carrusel3 from '../image/carrusel3.jpg';
import carrusel4 from '../image/carrusel4.jpg';

// Definiendo la variable del arreglo
var autos = new Array(4);

// Poblando la variable del arreglo
autos[0] = carrusel1;
autos[1] = carrusel2;
autos[2] = carrusel3;
autos[3] = carrusel4;

var c = 0;

function rotacion() {
  // Cambiando la imagen actual del carrusel e incrementando el indice
  document.getElementById('autoActual').src = autos[c];
  c++;
  if (c === autos.length) {
    c = 0;
  }
  // Llamar a la función rotación de nuevo después de 1 s
  setTimeout(rotacion, 1000);
}

// Iniciar la rotación cuando se cargue la página
window.onload = function() {
  rotacion();
}
//
export default function Carrusel() {
  return (
    //extructura del carrusel
    <div className="carrusel">
      <img id="autoActual" src={autos[0]} alt="Auto en rotación" />
    </div>
  );
}
