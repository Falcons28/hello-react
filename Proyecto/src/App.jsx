import React, { useEffect, useRef, useState,Fragment } from "react";
import "./App.css";
import "./componentes/seleccion.css";

import Llamaground from "./assets/llamaground.jpg";
import Otterwater from "./assets/otterwater.jpg";
import Cougarfire from "./assets/cougarfire.jpg";
import Andiviento from "./assets/Andiviento.jpg";
import Anguivolta from "./assets/anguivolta.jpg";
import Pumanoctis from "./assets/pumanoctis.jpg";
import Frigurso from "./assets/frigurso.jpg";
import Armaduron from "./assets/armaduron.jpg";
import Mascota from "./componentes/Mascota";
import MascotaSeleccionada from "./componentes/MascotaSeleccionada";


function App() {
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);
  const [ataqueSeleccionado, setAtaqueSeleccionado] = useState(null);
  const [batallaIniciada, setBatallaIniciada] = useState(false);

  const objLlama = {id: "llamaground", rutaImagen:Llamaground, nombreImagenConIcono: "Llamaground 🦙"}
  const objotterwater = {id: "otterwater", rutaImagen:Otterwater, nombreImagenConIcono: "Otterwater 🦦"}
  const objcougarfire = {id: "cougarfire", rutaImagen:Cougarfire, nombreImagenConIcono: "Cougarfire 🐆"}
  const objandiviento = {id: "andiviento", rutaImagen:Andiviento, nombreImagenConIcono: "Andiviento 🦅"}
  const objanguivolta = {id: "anguivolta", rutaImagen:Anguivolta, nombreImagenConIcono: "Anguivolta 🐍"}
  const objpumanoctis = {id: "pumanoctis", rutaImagen:Pumanoctis, nombreImagenConIcono: "Pumanoctis 🐱"}
  const objfrigurso = {id: "frigurso", rutaImagen:Frigurso, nombreImagenConIcono: "Frigurso 🐻"}
  const objarmaduron= {id: "armaduron", rutaImagen:Armaduron, nombreImagenConIcono: "Armaduron 🦔"}

  const listadoMascotas = [
    objLlama,objotterwater,objcougarfire,objandiviento,objanguivolta,objpumanoctis,objfrigurso,objarmaduron
  ]




  const handleMascotaSeleccionada = (mascota) => {
    setMascotaSeleccionada(mascota);
    setBatallaIniciada(true);  // Inicia la batalla inmediatamente después de seleccionar la mascota
  };

  const handleAtaqueSeleccionado = (ataque) => {
    setAtaqueSeleccionado(ataque);
  };

  const elementSeleccionarAtaque = useRef(null);
  const [activoSeleccionarAtaque, setActivoSeleccionarAtaque] = useState(false);

  let ataqueJugador;
  let ataqueEnemigo;
let vidasJugador = 6;
let vidasEnemigo = 6;


const [mascotaSeleccionadaJugador, setMascotaSeleccionadaJugador] = useState(null); 

const manejarSeleccionJugador = (mascotaSeleccionada) => { 
    setMascotaSeleccionadaJugador(mascotaSeleccionada);
};

const [mascotaJugador, setMascotaJugador] = useState(null);
const [mascotaEnemigo, setMascotaEnemigo] = useState(null);

  const seleccionarMascotaJugador = () =>{
        // Oculta "none"
        document.getElementById("seleccionar-mascota").style.display = "none";
        // Mostrar 
        document.getElementById("seleccionar-ataque").style.display = "flex";
        // Mostrar 
        document.getElementById("btn-me-rindo").style.display = "block"
    let mascotaJugador = document.getElementById("mascota-jugador");
    console.log("ejecutando: seleccionarMascotaJugador")
    console.log("idImagenSeleccionada: "+mascotaSeleccionadaJugador)
    setMascotaJugador(mascotaSeleccionadaJugador)
    seleccionarMascotaEnemigo()
      console.log("hola chamo")
    }

    function seleccionarMascotaEnemigo(){
      let mascotaEnemigo = document.getElementById("mascota-enemigo");
      let mascotaAleatoria = numeroAleatorio(1, 8); 
      console.log(listadoMascotas[mascotaAleatoria])
        setMascotaEnemigo(listadoMascotas[mascotaAleatoria])
    }

    function numeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function combate() {
    let vidasDelJugador = document.getElementById("vidas-jugador");
    let vidasDelEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueJugador == ataqueEnemigo) {
        crearMensajes("¡EMPATE!");
    } else if (
        // Fuego 🔥
        (ataqueJugador == "FUEGO 🔥" && (ataqueEnemigo == "TIERRA 🌱" || ataqueEnemigo == "HIELO ❄️" || ataqueEnemigo == "METAL 🛡️")) ||
        // Agua 💦
        (ataqueJugador == "AGUA 💦" && (ataqueEnemigo == "FUEGO 🔥" || ataqueEnemigo == "METAL 🛡️" || ataqueEnemigo == "OSCURIDAD 🌑")) ||
        // Tierra 🌱
        (ataqueJugador == "TIERRA 🌱" && (ataqueEnemigo == "AGUA 💦" || ataqueEnemigo == "AIRE 💨" || ataqueEnemigo == "RAYO ⚡")) ||
        // Aire 💨
        (ataqueJugador == "AIRE 💨" && (ataqueEnemigo == "FUEGO 🔥" || ataqueEnemigo == "HIELO ❄️" || ataqueEnemigo == "OSCURIDAD 🌑")) ||
        // Rayo ⚡
        (ataqueJugador == "RAYO ⚡" && (ataqueEnemigo == "AGUA 💦" || ataqueEnemigo == "AIRE 💨" || ataqueEnemigo == "METAL 🛡️")) ||
        // Oscuridad 🌑
        (ataqueJugador == "OSCURIDAD 🌑" && (ataqueEnemigo == "RAYO ⚡" || ataqueEnemigo == "HIELO ❄️")) ||
        // Hielo ❄️
        (ataqueJugador == "HIELO ❄️" && (ataqueEnemigo == "TIERRA 🌱" || ataqueEnemigo == "OSCURIDAD 🌑")) ||
        // Metal 🛡️
        (ataqueJugador == "METAL 🛡️" && (ataqueEnemigo == "RAYO ⚡" || ataqueEnemigo == "HIELO ❄️" || ataqueEnemigo == "OSCURIDAD 🌑"))
    ) {
        if (vidasDelEnemigo.innerHTML > 0) {
            vidasDelEnemigo.innerHTML = --vidasDelEnemigo.innerHTML;
            crearMensajes("¡GANASTE!");
        }
    } else {
        if (vidasDelJugador.innerHTML > 0) {
            vidasDelJugador.innerHTML = --vidasDelJugador.innerHTML;
            crearMensajes("¡PERDISTE!");
        }
    }

    revisarVidas();
}

function revisarVidas() {
    let vidasJugador = parseInt(document.getElementById("vidas-jugador").innerHTML);
    let vidasEnemigo = parseInt(document.getElementById("vidas-enemigo").innerHTML);

    if (vidasJugador <= 0) {
        mensajeFinal("Lamentablemente perdiste😢, suerte a la próxima.");
    } else if (vidasEnemigo <= 0) {
        mensajeFinal("¡FELICITACIONES!🎉, ganaste 😉");
    }
}

  function iniciarJuego() {

    useEffect(() => {

      const elementSeleccionaAtaq = document.getElementById("seleccionar-ataque")
      if(elementSeleccionaAtaq){
        elementSeleccionaAtaq.style.display = "none";
      }

      const elementReiniciar = document.getElementById("reiniciar")
      if(elementReiniciar){
        elementReiniciar.style.display = "none";
      }
    
     /* let botonMascotaJugador = document.getElementById("boton-seleccionar"); 
       botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);*/

      
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
    botonReiniciar.addEventListener("click", reiniciarJuego);

    let botonMeRindo = document.getElementById("boton-me-rindo");
    botonMeRindo.addEventListener("click", rendirse);
    }, []);
 
}

function ataqueFuego() {
    ataqueJugador = "FUEGO 🔥";
    ataqueAleatorioEnemigo();
}


function ataqueAgua() {
    ataqueJugador = "AGUA 💦";
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = "TIERRA 🌱";
    ataqueAleatorioEnemigo();
}
function ataqueAire() {
    ataqueJugador = "AIRE 💨";
    ataqueAleatorioEnemigo();
}
function ataqueRayo() {
    ataqueJugador = "RAYO ⚡";
    ataqueAleatorioEnemigo();
}
function ataqueOscuridad() {
    ataqueJugador = "OSCURIDAD 🌑";
    ataqueAleatorioEnemigo();
}
function ataqueHielo() {
    ataqueJugador = "HIELO ❄️";
    ataqueAleatorioEnemigo();
}
function ataqueMetal() {
    ataqueJugador = "METAL 🛡️";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = numeroAleatorio(1, 8); // Cambia el rango a 8 para incluir los nuevos poderes
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO 🔥";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA 💦";
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA 🌱";
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = "AIRE 💨";
    } else if (ataqueAleatorio == 5) {
        ataqueEnemigo = "RAYO ⚡";
    } else if (ataqueAleatorio == 6) {
        ataqueEnemigo = "OSCURIDAD 🌑";
    } else if (ataqueAleatorio == 7) {
        ataqueEnemigo = "HIELO ❄️";
    } else {
        ataqueEnemigo = "METAL 🛡️";
    }
    combate();
}

function reiniciarJuego() {
    document.location.reload();
}

function crearMensajes(msj) {
    let resultado = document.getElementById("resultado");
    let ataqueDelJugador = document.getElementById("ataque-jugador");
    let ataqueDelEnemigo = document.getElementById("ataque-enemigo");

    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");

    resultado.innerHTML = msj;
    nuevoAtaqueJugador.innerHTML = ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

    ataqueDelJugador.appendChild(nuevoAtaqueJugador);
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function mensajeFinal(msj) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = msj;

    document.getElementById("boton-fuego").disabled = true;
    document.getElementById("boton-agua").disabled = true;
    document.getElementById("boton-tierra").disabled = true;
    document.getElementById("boton-aire").disabled = true;
    document.getElementById("boton-rayo").disabled = true;
    document.getElementById("boton-oscuridad").disabled = true;
    document.getElementById("boton-hielo").disabled = true;
    document.getElementById("boton-metal").disabled = true;
    document.getElementById("reiniciar").style.display = "block";
}

function rendirse() {
    // Mostrar un mensaje i
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "¡Te has rendido! 😔";

    // Establecer las vidas del jugador a 0
    document.getElementById("vidas-jugador").innerHTML = "0";

    // Deshabilitar todos los botones de ataque
    var ataques = ["fuego", "agua", "tierra", "aire", "rayo", "oscuridad", "hielo", "metal"];
    for (var i = 0; i < ataques.length; i++) {
        document.getElementById("boton-" + ataques[i]).disabled = true;
    }

    // Mostrar el botón de reinicio y ocultar las opciones de batalla
    document.getElementById("reiniciar").style.display = "block";
    document.getElementById("btn-me-rindo").style.display = "none";
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
                    {listadoMascotas.map((elemento, index) => (
                          <Mascota key={index} mascota ={elemento} onSelect={manejarSeleccionJugador}/>
                    ))}
              </div>
              {
                          mascotaSeleccionadaJugador &&   
                          <div>
                          ID Imagen seleccionada: {mascotaSeleccionadaJugador.id}
                      </div>
                        } 
              <p><button className="boton-seleccionar" onClick={seleccionarMascotaJugador} >Seleccionar</button></p>  
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
                        <p>JUGADOR</p>
                        {
                          mascotaJugador &&   
                            <MascotaSeleccionada mascota={mascotaJugador} />
                        } 
                        <div id="ataque-jugador"></div>
                    </div>
                    <div>
                        <p id="vidas-enemigo">6</p>

                        <p>ENEMIGO</p>
                        {
                          mascotaEnemigo &&   
                            <MascotaSeleccionada mascota = {mascotaEnemigo} />
                        }
                       
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
