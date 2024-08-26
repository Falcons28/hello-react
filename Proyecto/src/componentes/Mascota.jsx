import React, { useEffect, useState } from "react";

function Mascota({ mascota, onSelect  }) {
  //const [vidasJugador, setVidasJugador] = useState(6);
 /*
  useEffect(() => {
 
  }, [idImagen]);*/

  const handleSelect = () => {
    onSelect(mascota);
  };

  return (
        <>
         <input type="radio" name="mascota" id={mascota.id}  onChange={handleSelect}/>
            <label htmlFor={mascota.id}>
                <img src={mascota.rutaImagen} alt={mascota.nombreImagenConIcono}/>
                <div>{mascota.nombreImagenConIcono}</div>
            </label>
        </>
  );
}

export default Mascota;
