// seccturismo.jsx

import './seccturismo.css';  // Importa el archivo CSS correspondiente

// Importando las imágenes directamente desde la carpeta 'image'
import carrusel1 from '../image/carrusel1.jpg';
import carrusel2 from '../image/carrusel2.jpg';
import carrusel3 from '../image/carrusel3.jpg';

// No se necesita importar ningún componente adicional llamado 'Imagenes'.
// Usamos directamente las imágenes importadas en el código JSX.
function SeccionTuristica() {
  return (
    <section className="seccion-turistica">
      <div className="imagen-turistica-container">
        <div className="imagen-turistica">
          <img src={carrusel1} alt="Arequipa - Yanahuara" />
          <p>Arequipa - Yanahuara</p>
        </div>
        <div className="imagen-turistica">
          <img src={carrusel2} alt="Cusco - Machupicchu" />
          <p>Cusco - Machupicchu</p>
        </div>
        <div className="imagen-turistica">
          <img src={carrusel3} alt="Piura - Catacaos" />
          <p>Piura - Catacaos</p>
        </div>
      </div>
    </section>
  );
}

export default SeccionTuristica;
