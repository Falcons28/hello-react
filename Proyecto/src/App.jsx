import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "./componentes/combate.css";
import SeleccionMascota from "./componentes/SeleccionMascota";
import Batalla from "./componentes/Batalla";
import Reiniciar from "./componentes/Reiniciar";
import Llamaground from "./assets/llamaground.jpg";
import Otterwater from "./assets/otterwater.jpg";
import Cougarfire from "./assets/cougarfire.jpg";
import Andiviento from "./assets/Andiviento.jpg";
import Anguivolta from "./assets/anguivolta.jpg";
import Pumanoctis from "./assets/pumanoctis.jpg";
import Frigurso from "./assets/frigurso.jpg";
import Armaduron from "./assets/armaduron.jpg";



function App() {
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [ataqueSeleccionado, setAtaqueSeleccionado] = useState(null);
  const [batallaIniciada, setBatallaIniciada] = useState(false);

  const handleMascotaSeleccionada = (mascota) => {
    setMascotaSeleccionada(mascota);
    setBatallaIniciada(true);  // Inicia la batalla inmediatamente después de seleccionar la mascota
  };

  const handleAtaqueSeleccionado = (ataque) => {
    setAtaqueSeleccionado(ataque);
  };

  const elementSeleccionarAtaque = useRef(null);
  const [activoSeleccionarAtaque, setActivoSeleccionarAtaque] = useState(false);


  function seleccionarMascotaJugador(){

    document.getElementById("seleccionar-ataque").style.display = "flex";

    let radio1 = document.getElementById("llamaground");
    let radio2 = document.getElementById("otterwater");
    let radio3 = document.getElementById("cougarfire");
    let radio4 = document.getElementById("andiviento");
    let radio5 = document.getElementById("anguivolta");
    let radio6 = document.getElementById("pumanoctis");
    let radio7 = document.getElementById("frigurso");
    let radio8 = document.getElementById("armaduron");

    let mascotaJugador = document.getElementById("mascota-jugador");

    if (radio1.checked) {
        mascotaJugador.innerHTML = "<img src={Llamaground}  alt='Llamaground 🦙'><div>Llamaground 🦙</div>";
    } else if (radio2.checked) {
        mascotaJugador.innerHTML = "<img src='./img/otterwater.jpeg' alt='Otterwater 🦦'><div>Otterwater 🦦</div>";
    } else if (radio3.checked) {
        mascotaJugador.innerHTML = "<img src='./img/cougarfire.jpeg' alt='Cougarfire 🐆'><div>Cougarfire 🐆</div>";
    } else if (radio4.checked) {
        mascotaJugador.innerHTML = "<img src='./img/Andiviento.jpg' alt='Andiviento 🦅'><div>Andiviento 🦅</div>";
    }
    else if (radio5.checked) {
        mascotaJugador.innerHTML = "<img src='./img/anguivolta.jpg' alt='Anguivolta 🐍'><div>Anguivolta 🐍</div>";
    }
    else if (radio6.checked) {
        mascotaJugador.innerHTML = "<img src='./img/pumanoctis.jpg' alt='Pumanoctis 🐱'><div>Pumanoctis 🐱</div>";
    }
    else if (radio7.checked) {
        mascotaJugador.innerHTML = "<img src='./img/frigurso.jpg' alt='Frigurso 🐻'><div>Frigurso 🐻</div>";
    }
    else if (radio8.checked) {
        mascotaJugador.innerHTML = "<img src='./img/armaduron.jpg' alt='Armaduron 🦔'><div>Armaduron 🦔</div>";
    } else {
        document.getElementById("seleccionar-mascota").style.display = "block";
        document.getElementById("seleccionar-ataque").style.display = "none";
        alert("Elige una mascota 🐵");
    }
    seleccionarMascotaEnemigo()
      console.log("hola chamo")
    }

    function seleccionarMascotaEnemigo(){
      let mascotaEnemigo = document.getElementById("mascota-enemigo");
      let mascotaAleatoria = numeroAleatorio(1, 8);
  
      if (mascotaAleatoria == 1) {
          mascotaEnemigo.innerHTML = "<img src='./img/llamaground.jpeg' alt='Llamaground 🦙'><div>Llamaground 🦙</div>";
      } else if (mascotaAleatoria == 2) {
          mascotaEnemigo.innerHTML = "<img src='./img/otterwater.jpeg' alt='Otterwater 🦦'><div>Otterwater 🦦</div>";
      }  else if (mascotaAleatoria == 3) {
          mascotaEnemigo.innerHTML = "<img src='./img/cougarfire.jpeg' alt='Cougarfire 🐆'><div>Cougarfire 🐆</div>";
      } else if (mascotaAleatoria == 4) {
          mascotaEnemigo.innerHTML = "<img src='./img/Andiviento.jpg'   alt='Andiviento 🦅'><div>Andiviento 🦅</div>";
      }else if (mascotaAleatoria == 5) {
          mascotaEnemigo.innerHTML = "<img src='./img/anguivolta.jpg' alt='Anguivolta 🐍'><div>Anguivolta 🐍</div>";
      }else if (mascotaAleatoria == 6) {
          mascotaEnemigo.innerHTML = "<img src='./img/pumanoctis.jpg' alt='Pumanoctis 🐱'><div>Pumanoctis 🐱</div>";
      }else if (mascotaAleatoria == 7) {
          mascotaEnemigo.innerHTML = "<img src='./img/frigurso.jpg' alt='Frigurso 🐻'><div>Frigurso 🐻</div>";
      }else {
          mascotaEnemigo.innerHTML = "<img src='./img/armaduron.jpg' alt='Armaduron 🦔'><div>Armaduron 🦔</div>";
      }
    }

    function numeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }


  function iniciarJuego() {

    useEffect(() => {


      const elementSeleccionaAtaq = document.getElementById("seleccionar-ataque")
      if(elementSeleccionaAtaq){
        elementSeleccionaAtaq.style.display = "none";
      }

     /*  const elementReiniciar= document.getElementById("reiniciar")
      if(elementReiniciar){
        elementReiniciar.style.display = "flex";
      }
 */
      let botonMascotaJugador = document.getElementById("boton-seleccionar");
      botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

      
       
    }, []);

    // Desaparece el selecconar mascota
    //document.getElementById("seleccionar-ataque").style.display = "none";
    //document.getElementById("reiniciar").style.display = "none";

   /*
    let botonMascotaJugador = document.getElementById("boton-seleccionar");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonAire = document.getElementById("boton-aire");
    botonAire.addEventListener("click", ataqueAire);

    let botonRayo = document.getElementById("boton-rayo");
    botonRayo.addEventListener("click", ataqueRayo);

    let botonOscuridad = document.getElementById("boton-oscuridad");
    botonOscuridad.addEventListener("click", ataqueOscuridad);

    let botonHielo = document.getElementById("boton-hielo");
    botonHielo.addEventListener("click", ataqueHielo);

    let botonMetal = document.getElementById("boton-metal");
    botonMetal.addEventListener("click", ataqueMetal);
    
    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);*/
}

iniciarJuego();


  return (
    <div className="App">
      <h1>¡Criaturas legendarias!</h1>
      <div className="ataques-titulo">🔥💦🌱💨⚡🌑❄️🛡️</div>
      <div className="div-padre">
        <div className="div-hijo">
          <section id="seleccionar-mascota">
            <h2>Elige tu mascota:</h2>
              <div className="tarjetas">
                    <input type="radio" name="mascota" id="llamaground"/>
                    <label htmlFor="llamaground">
                        <img src={Llamaground} alt="Llamaground 🦙"/>
                        <div>Llamaground 🦙</div>
                    </label>
                    <input type="radio" name="mascota" id="otterwater"/>
                    <label htmlFor="otterwater">
                        <img src={Otterwater} alt="Otterwater 🦦"/>
                        <div>Otterwater 🦦</div>
                    </label>
                    <input type="radio" name="mascota" id="cougarfire"/>
                    <label htmlFor="cougarfire">
                        <img src={Cougarfire} alt="Cougarfire 🐆"/>
                        <div>Cougarfire 🐆</div>
                    </label>
                    <input type="radio" name="mascota" id="andiviento"/>
                    <label htmlFor="andiviento">
                        <img src={Andiviento} alt="Andiviento 🦅"/>
                        <div>Andiviento 🦅</div>
                    </label>
                    <input type="radio" name="mascota" id="anguivolta"/>
                    <label htmlFor="anguivolta">
                        <img src={Anguivolta} alt="Anguivolta 🐍"/>
                        <div>Anguivolta 🐍</div>
                    </label>
                    <input type="radio" name="mascota" id="pumanoctis"/>
                    <label htmlFor="pumanoctis">
                        <img src={Pumanoctis} alt="Pumanoctis 🐱"/>
                        <div>Pumanoctis 🐱</div>
                    </label>
                    <input type="radio" name="mascota" id="frigurso"/>
                    <label htmlFor="frigurso">
                        <img src={Frigurso} alt="Frigurso 🐻"/>
                        <div>Frigurso 🐻</div>
                    </label>
                    <input type="radio" name="mascota" id="armaduron"/>
                    <label htmlFor="armaduron">
                        <img src={Armaduron} alt="Armaduron 🦔"/>
                        <div>Armaduron 🦔</div>
                    </label>
              </div>
              <p><button id="boton-seleccionar">Seleccionar</button></p>
          </section>
          <section id="seleccionar-ataque" ref={elementSeleccionarAtaque}>
                <h2>Elige tu ataque</h2>

                <div>
                    <button id="boton-fuego" className="btn-personalizado"><span className="ataques-titulo">🔥</span><br/>Fuego</button>
                    <button id="boton-agua" className="btn-personalizado"><span className="ataques-titulo">💦</span><br/>Agua</button>
                    <button id="boton-tierra" className="btn-personalizado"><span className="ataques-titulo">🌱</span><br/>Tierra</button>
                    <button id="boton-aire" className="btn-personalizado"><span className="ataques-titulo">💨</span><br/>Aire</button>
                    <button id="boton-rayo" className="btn-personalizado"><span className="ataques-titulo">⚡</span><br/>Rayo</button>
                    <button id="boton-oscuridad" className="btn-personalizado"><span className="ataques-titulo">🌑</span><br/>Oscuridad</button>
                    <button id="boton-hielo" className="btn-personalizado"><span className="ataques-titulo">❄️</span><br/>Hielo</button>
                    <button id="boton-metal" className="btn-personalizado"><span className="ataques-titulo">🛡️</span><br/>Metal</button>
                </div>
                
                <p id="resultado">¡Mucha suerte 😉!</p>

                <div id="reiniciar">
                    <button id="boton-reiniciar" className="btn-personalizado">🔃 Reiniciar</button>
                </div>
       
                <div className="batalla">
                    <div>
                        <p id="vidas-jugador">6</p>
                        <div id="mascota-jugador"></div>
                        <div id="ataque-jugador"></div>
                    </div>
                    <div>
                        <p id="vidas-enemigo">6</p>
                        <div id="mascota-enemigo"></div>
                        <div id="ataque-enemigo"></div>
                    </div>
                </div>
                    <div id="btn-me-rindo">
                    <button id="boton-me-rindo" className="btn-personalizado">🏳️ Me rindo</button>
                    </div>
            </section>
        </div>
      </div>
    </div>
  );
}

export default App;
