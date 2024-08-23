import React, { useEffect, useState } from "react";
import "./combate.css";

function Batalla({ mascota, ataque }) {
  const [enemigo, setEnemigo] = useState(null);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const enemigos = [
      "llamaground",
      "otterwater",
      "cougarfire",
      "andiviento",
      "anguivolta",
      "pumanoctis",
      "frigurso",
      "armaduron"
    ];
    const enemigoAleatorio = enemigos[Math.floor(Math.random() * enemigos.length)];
    setEnemigo(enemigoAleatorio);
  }, []);

  useEffect(() => {
    if (enemigo && ataque) {
      // Lógica de combate
      if (ataque === "fuego" && (enemigo === "tierra" || enemigo === "metal")) {
        setResultado("¡Ganaste!");
      } else if (ataque === "agua" && (enemigo === "fuego" || enemigo === "tierra")) {
        setResultado("¡Ganaste!");
      } else if (ataque === "tierra" && (enemigo === "agua" || enemigo === "rayo")) {
        setResultado("¡Ganaste!");
      } else if (ataque === "aire" && (enemigo === "fuego" || enemigo === "hielo")) {
        setResultado("¡Ganaste!");
      } else if (ataque === "rayo" && (enemigo === "agua" || enemigo === "aire")) {
        setResultado("¡Ganaste!");
      } else if (ataque === "oscuridad" && (enemigo === "rayo" || enemigo === "hielo")) {
        setResultado("¡Ganaste!");
      } else if (ataque === "hielo" && (enemigo === "tierra" || enemigo === "oscuridad")) {
        setResultado("¡Ganaste!");
      } else if (ataque === "metal" && (enemigo === "rayo" || enemigo === "hielo")) {
        setResultado("¡Ganaste!");
      } else {
        setResultado("¡Perdiste!");
      }
    }
  }, [enemigo, ataque]);

  return (
    <div className="batalla">
      <div>
        <p id="vidas-jugador">6</p>
        <div id="mascota-jugador">{mascota}</div>
        <div id="ataque-jugador">{ataque}</div>
      </div>

      <div>
        <p id="vidas-enemigo">6</p>
        <div id="mascota-enemigo">{enemigo}</div>
        <div id="ataque-enemigo">En espera...</div>
      </div>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}
export default Batalla;
