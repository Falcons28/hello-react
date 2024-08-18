import { Fragment,useEffect } from "react";
import './seccturismo.css';  

import cusco from '../image/turismo1.jpg';
import arequipa from '../image/turismo2.jpg';
import piura from '../image/turismo3.jpg';

function SeccionTuristica() {

  useEffect(function() {
    // Selecciona todas las imágenes de la sección turística
    var imagenes = document.querySelectorAll(".seccion-turistica img");

    // Añade el efecto zoom al pasar el ratón sobre cada imagen
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].onmouseenter = function() {
        this.style.transform = "scale(1.045)";
        this.style.transition = "transform 0.5s ease";
      };
      
      // Quita el efecto zoom al retirar el ratón de la imagen
      imagenes[i].onmouseleave = function() {
        this.style.transform = "scale(1)";
      };
    }
  }, []);
  
  return (
    //Estrucura de la sección
    <section className="seccion-turistica">
      <div className="columna-izquierda">
        <div className="imagen-grande">
          <img src={cusco} alt="Cusco - Machupicchu" />
          <p>Cusco - Machupicchu</p>
        </div>
      </div>
      <div className="columna-derecha">
        <div className="imagen-pequena">
          <img src={arequipa} alt="Arequipa - Yanahuara" />
          <p>Arequipa - Yanahuara</p>
        </div>
        <div className="imagen-pequena">
          <img src={piura} alt="Piura - Catacaos" />
          <p>Piura - Catacaos</p>
        </div>
      </div>
    </section>
  );
}

export default SeccionTuristica;
