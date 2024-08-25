import React from "react";
import Llamaground from "../assets/llamaground.jpg";
import Otterwater from "../assets/otterwater.jpg";
import Cougarfire from "../assets/cougarfire.jpg";
import Andiviento from "../assets/Andiviento.jpg";
import Anguivolta from "../assets/anguivolta.jpg";
import Pumanoctis from "../assets/pumanoctis.jpg";
import Frigurso from "../assets/frigurso.jpg";
import Armaduron from "../assets/armaduron.jpg";
import "./seleccion.css";
function SeleccionMascota({ seleccionarMascotaJugador }) {
  return (
    <section id="seleccionar-mascota">
      <h2>Elige tu mascota:</h2>
      <div className="tarjetas">
        <input type="radio" name="mascota" id="llamaground" />
        <label htmlFor="llamaground">
          <img src={Llamaground} alt="Llamaground 🦙" />
          <div>Llamaground 🦙</div>
        </label>
        <input type="radio" name="mascota" id="otterwater" />
        <label htmlFor="otterwater">
          <img src={Otterwater} alt="Otterwater 🦦" />
          <div>Otterwater 🦦</div>
        </label>
        <input type="radio" name="mascota" id="cougarfire" />
        <label htmlFor="cougarfire">
          <img src={Cougarfire} alt="Cougarfire 🐆" />
          <div>Cougarfire 🐆</div>
        </label>
        <input type="radio" name="mascota" id="andiviento" />
        <label htmlFor="andiviento">
          <img src={Andiviento} alt="Andiviento 🦅" />
          <div>Andiviento 🦅</div>
        </label>
        <input type="radio" name="mascota" id="anguivolta" />
        <label htmlFor="anguivolta">
          <img src={Anguivolta} alt="Anguivolta 🐍" />
          <div>Anguivolta 🐍</div>
        </label>
        <input type="radio" name="mascota" id="pumanoctis" />
        <label htmlFor="pumanoctis">
          <img src={Pumanoctis} alt="Pumanoctis 🐱" />
          <div>Pumanoctis 🐱</div>
        </label>
        <input type="radio" name="mascota" id="frigurso" />
        <label htmlFor="frigurso">
          <img src={Frigurso} alt="Frigurso 🐻" />
          <div>Frigurso 🐻</div>
        </label>
        <input type="radio" name="mascota" id="armaduron" />
        <label htmlFor="armaduron">
          <img src={Armaduron} alt="Armaduron 🦔" />
          <div>Armaduron 🦔</div>
        </label>
      </div>
      <p>
        <button id="boton-seleccionar" onClick={seleccionarMascotaJugador}>
          Seleccionar
        </button>
      </p>
    </section>
  );
}

export default SeleccionMascota;
