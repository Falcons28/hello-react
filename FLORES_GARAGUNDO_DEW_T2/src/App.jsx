import { Fragment } from "react";
import './App.css';
import Cabecera from "./componentes/cabecera";
import Carrusel from "./componentes/carrusel";
import SeccionTuristica from "./componentes/seccturismo";
import Testimonio from "./componentes/testimonio";
import PiePagina from "./componentes/piepag";


function Aplicacion() {
  return (
    <div className="aplicacion">
      <header>
        <Cabecera />
      </header>
      <section className="seccion-carrusel">
        <Carrusel />
      </section>
< section >
  <SeccionTuristica />
  </section>
  <Testimonio/>
  <PiePagina/>
    </div>
  );
}

export default Aplicacion;
