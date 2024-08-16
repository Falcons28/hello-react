// PiePagina.jsx
import { Fragment } from "react";
import './piepag.css';  // Importa el archivo CSS correspondiente

// Importa las imágenes de las redes sociales
import facebookIcon from '../image/facebook.png';
import instagramIcon from '../image/instagram.png';
import youtubeIcon from '../image/youtube.png';

function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="contenido-pie">
        <span>TRAVELING</span>
        <div className="redes-sociales">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icono-red">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icono-red">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icono-red">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;
