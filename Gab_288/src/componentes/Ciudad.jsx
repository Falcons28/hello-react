import { Fragment } from "react";

import './Estilos.css'

function Ciudad ({nombre,descripcion,imagen}) {

    return(
        <>
        <div className="ciudad">
            <h3 className="ciudad__titulo">{nombre}</h3>
            <p className="ciudad__descripcion">{descripcion}</p>
            --muestra un texto alternativo "alt"
            <img src={imagen} alt={nombre} />
        </div>
        </>
    );
}

export default Ciudad;