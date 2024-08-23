import React, { useState } from "react";
import llama from "../assets/llamaground.jpg";
import otter from "../assets/otterwater.jpg";
import cougar from "../assets/cougarfire.jpg";
import condor from "../assets/Andiviento.jpg";
import snake from "../assets/anguivolta.jpg";
import cat from "../assets/pumanoctis.jpg";
import bear from "../assets/frigurso.jpg";
import armadillo from "../assets/armaduron.jpg";
import "./seleccion.css";

function SeleccionMascota({ onMascotaSeleccionada }) {
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  const seleccionarMascota = (event) => {
    const mascotaId = event.target.id;
    setMascotaSeleccionada(mascotaId);
  };

  const confirmarSeleccion = () => {
    onMascotaSeleccionada(mascotaSeleccionada);
  };

  return (
    <section id="seleccionar-mascota">
      <h2>Elige tu mascota:</h2>
      <div className="tarjetas">
        <input type="radio" name="mascota" id="llamaground" onClick={seleccionarMascota} />
        <label htmlFor="llamaground">
          <img src={llama} alt="Llamaground 🦙" />
          <div>Llamaground 🦙</div>
        </label>

        <input type="radio" name="mascota" id="otterwater" onClick={seleccionarMascota} />
        <label htmlFor="otterwater">
          <img src={otter} alt="Otterwater 🦦" />
          <div>Otterwater 🦦</div>
        </label>

        <input type="radio" name="mascota" id="cougarfire" onClick={seleccionarMascota} />
        <label htmlFor="cougarfire">
          <img src={cougar} alt="Cougarfire 🐆" />
          <div>Cougarfire 🐆</div>
        </label>

        <input type="radio" name="mascota" id="andiviento" onClick={seleccionarMascota} />
        <label htmlFor="andiviento">
          <img src={condor} alt="Andiviento 🦅" />
          <div>Andiviento 🦅</div>
        </label>

        <input type="radio" name="mascota" id="anguivolta" onClick={seleccionarMascota} />
        <label htmlFor="anguivolta">
          <img src={snake} alt="Anguivolta 🐍" />
          <div>Anguivolta 🐍</div>
        </label>

        <input type="radio" name="mascota" id="pumanoctis" onClick={seleccionarMascota} />
        <label htmlFor="pumanoctis">
          <img src={cat} alt="Pumanoctis 🐱" />
          <div>Pumanoctis 🐱</div>
        </label>

        <input type="radio" name="mascota" id="frigurso" onClick={seleccionarMascota} />
        <label htmlFor="frigurso">
          <img src={bear} alt="Frigurso 🐻" />
          <div>Frigurso 🐻</div>
        </label>

        <input type="radio" name="mascota" id="armaduron" onClick={seleccionarMascota} />
        <label htmlFor="armaduron">
          <img src={armadillo} alt="Armaduron 🦔" />
          <div>Armaduron 🦔</div>
        </label>
      </div>
      <div className="boton-seleccionar-contenedor">
        <button onClick={confirmarSeleccion} className="btn-personalizado seleccionar-btn" disabled={!mascotaSeleccionada}>
          Iniciar Batalla
        </button>
      </div>
      {mascotaSeleccionada && (
          <div className="boton-reiniciar-contenedor">
          <button 
          id="boton-reiniciar" 
          className="btn-reiniciar" 
          style={{ display: 'none' }} 
          onClick={() => window.location.reload()}
          >
          🔃 Reiniciar
        </button>
        </div>
        )}
    </section>
  );
}

export default SeleccionMascota;
