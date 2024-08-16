import { Fragment } from "react";
import './App.css';
import Cabecera from "./componentes/cabecera";
import Carrusel from "./componentes/carrusel";
import SeccionTuristica from "./componentes/seccturismo";


function Aplicacion() {
  return (
    <div className="aplicacion">
      <header>
        <Cabecera />
      </header>
      <section className="seccion-carrusel">
        <Carrusel />
      </section>
<SeccionTuristica />
    </div>
  );
}

export default Aplicacion;
