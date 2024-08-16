import { Fragment } from "react";
import logo from '../image/carrusel1.jpg'
import './cabecera.css';


function Cabecera() {
  return (
    <nav className="menu">
      <img src={logo} alt="Logo" className="logotipo" />
      <ul>
        <li><a href="#">Quiénes somos</a></li>
        <li><a href="#">Destinos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Ofertas</a></li>
      </ul>
    </nav>
  );
}

export default Cabecera;
