// Carrusel.jsx
import { Fragment } from "react";
import React, { useState, useEffect } from 'react';
import './carrusel.css';
import carrusel1 from '../image/carrusel1.jpg';
import carrusel2 from '../image/carrusel2.jpg';
import carrusel3 from '../image/carrusel3.jpg';
import carrusel4 from '../image/carrusel4.jpg';

function Carrusel() {
  var autos = new Array(4);

  // Poblando el arreglo con rutas de imágenes
  autos[0] = carrusel1;
  autos[1] = carrusel2;
  autos[2] = carrusel3;
  autos[3] = carrusel4;
 
  var [c, setC] = useState(0);

  function rotacion() {
    setC(function(prevC) {
      return (prevC + 1) % autos.length;
    });
  }

  useEffect(function() {
    var intervalo = setInterval(rotacion, 1000);
    return function() {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div className="carrusel">
      <img id="autoActual" src={autos[c]} alt="Auto en rotación" />
    </div>
  );
}

export default Carrusel;
