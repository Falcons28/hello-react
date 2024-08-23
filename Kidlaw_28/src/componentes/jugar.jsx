import { useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';

import hero1 from '../assets/cougarfire.jpeg';
import hero2 from '../assets/llamaground.jpeg';
import hero3 from '../assets/otterwater.jpeg';
import './jugar.css'; 

function Jugar(){

    const { username } = useParams();
    const [hereoSeleccionado, setHeroe] = useState('');

    const seleccionarHeroe = (hero) => {
        console.log(`Hiciste clic en: ${hero}`);
        setHeroe(hero); // Aquí se actualiza el estado con el héroe seleccionado
    };

    const batallaConPc = () => {
        if (hereoSeleccionado === '') {
            alert("No has seleccionado un héroe");
        } else {
            alert(`Batallando con ${hereoSeleccionado}`);
        }
    };

    return (

        <>
        <div className="container">
            <h1>Bienvenido, {username}!</h1>
            <h1 className="title">¡Criaturas legendarias!</h1>
            <div className="icons">
                {/* Puedes agregar los iconos aquí */}
            </div>
            <h2 className="subtitle">Elige tu mascota:</h2>
            <div className="pets">
                <div className="pet-card" onClick={() => seleccionarHeroe('Hero 1')} >
                <img src={hero1} alt="cougarfire" />
                <p className="pet-name">Llamaground</p>
                </div>
                <div className="pet-card" onClick={() => seleccionarHeroe('Hero 2')}>
                <img src={hero2} alt="llamaground" />
                <p className="pet-name">Otterwater</p>
                </div>
                <div className="pet-card" onClick={() => seleccionarHeroe('Hero 3')}>
                <img src={hero3} alt="Otterwater" />
                <p className="pet-name">Cougarfire</p>
                </div>
            </div>

            <h3>Héroe Seleccionado: {hereoSeleccionado}</h3>

                <div className="buttons">
                    <button onClick={batallaConPc} className="battle-button" >Batalla con PC </button>
                    <button className="battle-button">Batalla en Mapa</button>
                </div>
        </div> 
        </>


        
    );
}

export default Jugar;