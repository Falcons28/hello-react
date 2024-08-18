import { fragment,useEffect } from "react";
import './piepag.css';  // Importa el archivo CSS correspondiente

// Importa las imágenes de las redes sociales
import facebookIcon from '../image/facebook.png';
import instagramIcon from '../image/instagram.png';
import youtubeIcon from '../image/youtube.png';

function PiePagina() {

  useEffect(function() {
    // Seleccionar todas las imágenes dentro de los enlaces
    var iconos = document.querySelectorAll(".icono-red img");

    // Añadir el evento onclick a cada icono
    for (var i = 0; i < iconos.length; i++) {
      iconos[i].onclick = function() {
        if (this.style.opacity === "0.7") {
          this.style.opacity = "1";
        } else {
          this.style.opacity = "0.7";
        }
      };
    }
  }, []);

  return (
    //Estructura del pie de página
    <footer className="pie-pagina">
      <div className="contenido-pie">
        <span>TRAVELING</span>
        <div className="redes-sociales">
          <a href="https://www.facebook.com" target="_blank" className="icono">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank"  className="icono">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" className="icono">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;
