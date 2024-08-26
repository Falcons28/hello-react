import React, { useEffect, useState } from "react";
import Llamaground from "../assets/llamaground.jpg";
import Otterwater from "../assets/otterwater.jpg";
import Cougarfire from "../assets/cougarfire.jpg";
import Andiviento from "../assets/Andiviento.jpg";
import Anguivolta from "../assets/anguivolta.jpg";
import Pumanoctis from "../assets/pumanoctis.jpg";
import Frigurso from "../assets/frigurso.jpg";
import Armaduron from "../assets/armaduron.jpg";

function SeleccionarMascotaEnemigo({ setMascotaEnemigo }) {

  console.log("SeleccionarMascotaEnemigo")
  console.log(setMascotaEnemigo)
  const [mascotaEnemiga, setMascotaEnemigaState] = useState(null);

  useEffect(() => {
    const mascotaAleatoria = seleccionarMascotaAleatoria();
    
    console.log(mascotaAleatoria)
    setMascotaEnemigo(mascotaAleatoria); // Establecer en el estado global (padre)
    setMascotaEnemigaState(mascotaAleatoria); // Establecer en el estado local (componente)
  }, [setMascotaEnemigo]);

  const seleccionarMascotaAleatoria = () => {
    const numeroAleatorio = Math.floor(Math.random() * 8) + 1;
    let mascotaSeleccionada;

    switch (numeroAleatorio) {
      case 1:
        mascotaSeleccionada = { nombre: "Llamaground", imagen: Llamaground };
        break;
      case 2:
        mascotaSeleccionada = { nombre: "Otterwater", imagen: Otterwater };
        break;
      case 3:
        mascotaSeleccionada = { nombre: "Cougarfire", imagen: Cougarfire };
        break;
      case 4:
        mascotaSeleccionada = { nombre: "Andiviento", imagen: Andiviento };
        break;
      case 5:
        mascotaSeleccionada = { nombre: "Anguivolta", imagen: Anguivolta };
        break;
      case 6:
        mascotaSeleccionada = { nombre: "Pumanoctis", imagen: Pumanoctis };
        break;
      case 7:
        mascotaSeleccionada = { nombre: "Frigurso", imagen: Frigurso };
        break;
      case 8:
        mascotaSeleccionada = { nombre: "Armaduron", imagen: Armaduron };
        break;
      default:
        mascotaSeleccionada = { nombre: "Llamaground", imagen: Llamaground };
        break;
    }

    return mascotaSeleccionada;
  };

  return (
    <section id="seleccionar-mascota-enemigo">
      <h2>El enemigo ha elegido su mascota...</h2>
      {mascotaEnemiga && (
        <div className="tarjetas">
          <img src={mascotaEnemiga.imagen} alt={mascotaEnemiga.nombre} />
          <div>{mascotaEnemiga.nombre}</div>
        </div>
      )}
    </section>
  );
}

export default SeleccionarMascotaEnemigo;
