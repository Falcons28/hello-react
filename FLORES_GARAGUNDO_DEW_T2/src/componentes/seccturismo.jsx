// seccturismo.jsx
import { Fragment } from "react";
import './seccturismo.css';  // Importa el archivo CSS correspondiente

import cusco from '../image/turismo1.jpg';
import arequipa from '../image/turismo2.jpg';
import piura from '../image/turismo3.jpg';

function SeccionTuristica() {
  return (
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
