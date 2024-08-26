import React from "react";
import Llamaground from "../assets/llamaground.jpg";
import Otterwater from "../assets/otterwater.jpg";
import Cougarfire from "../assets/cougarfire.jpg";
import Andiviento from "../assets/Andiviento.jpg";
import Anguivolta from "../assets/anguivolta.jpg";
import Pumanoctis from "../assets/pumanoctis.jpg";
import Frigurso from "../assets/frigurso.jpg";
import Armaduron from "../assets/armaduron.jpg";

function SeleccionMascotaJugador({ setMascotaJugador }) {
  const seleccionarMascota = (e) => {
    setMascotaJugador(e.target.id);
  };

  return (
    <section id="seleccionar-mascota">
      <h2>Elige tu mascota:</h2>
      <div className="tarjetas">
        <input type="radio" name="mascota" id="Llamaground" onClick={seleccionarMascota} />
        <label htmlFor="Llamaground">
          <img src={Llamaground} alt="Llamaground 🦙" />
          <div>Llamaground 🦙</div>
        </label>
        <input type="radio" name="mascota" id="Otterwater" onClick={seleccionarMascota} />
        <label htmlFor="Otterwater">
          <img src={Otterwater} alt="Otterwater 🦦" />
          <div>Otterwater 🦦</div>
        </label>
        <input type="radio" name="mascota" id="Cougarfire" onClick={seleccionarMascota} />
        <label htmlFor="Cougarfire">
          <img src={Cougarfire} alt="Cougarfire 🐆" />
          <div>Cougarfire 🐆</div>
        </label>
        <input type="radio" name="mascota" id="Andiviento" onClick={seleccionarMascota} />
        <label htmlFor="Andiviento">
          <img src={Andiviento} alt="Andiviento 🦅" />
          <div>Andiviento 🦅</div>
        </label>
        <input type="radio" name="mascota" id="Anguivolta" onClick={seleccionarMascota} />
        <label htmlFor="Anguivolta">
          <img src={Anguivolta} alt="Anguivolta 🐍" />
          <div>Anguivolta 🐍</div>
        </label>
        <input type="radio" name="mascota" id="Pumanoctis" onClick={seleccionarMascota} />
        <label htmlFor="Pumanoctis">
          <img src={Pumanoctis} alt="Pumanoctis 🐱" />
          <div>Pumanoctis 🐱</div>
        </label>
        <input type="radio" name="mascota" id="Frigurso" onClick={seleccionarMascota} />
        <label htmlFor="Frigurso">
          <img src={Frigurso} alt="Frigurso 🐻" />
          <div>Frigurso 🐻</div>
        </label>
        <input type="radio" name="mascota" id="Armaduron" onClick={seleccionarMascota} />
        <label htmlFor="Armaduron">
          <img src={Armaduron} alt="Armaduron 🦔" />
          <div>Armaduron 🦔</div>
        </label>
      </div>
    </section>
  );
}

export default SeleccionMascotaJugador;
