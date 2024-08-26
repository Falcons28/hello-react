import React, { useEffect, useState } from "react";

function MascotaSeleccionada({ mascota  }) {

  return (
        <> 
           <img  className="mascota-batallar" src={mascota.rutaImagen} alt={mascota.nombreImagenConIcono}/>
           <div>{mascota.nombreImagenConIcono}</div> 
        </>
  );
}

export default MascotaSeleccionada;
