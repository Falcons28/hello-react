// Cabecera.jsx
import { Fragment } from "react";
import logo from '../image/cabecera1.webp';
import './cabecera.css';

function Cabecera() {
  return (
    <nav className="menu">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logotipo" />
        <span className="texto-logo">TRAVELING</span>
      </div>
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
