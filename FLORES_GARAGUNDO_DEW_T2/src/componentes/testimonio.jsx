// Testimonio.jsx
import { Fragment,useState } from "react";
import './testimonio.css';  // Importa el archivo CSS correspondiente

// Importa las imágenes de los testimonios
import clienteImagen1 from '../image/testimonio1.jpg';
import clienteImagen2 from '../image/testimonio2.jpg';
import clienteImagen3 from '../image/testimonio3.jpg';

function Testimonio() {
  const testimonios = [
    {
      nombre: 'Monkey D. Luffy',
      texto: '"La página web de viajes que han creado es simplemente la mejor que he encontrado. Desde la facilidad de uso hasta las increíbles ofertas que ofrecen, mi experiencia fue inolvidable. Gracias a ustedes, pude planear el viaje de mis sueños sin complicaciones. Cada detalle fue perfecto, y su atención al cliente fue excepcional. Sin duda, recomendaré esta página a todos mis amigos y familiares. ¡Es la mejor opción para planificar un viaje!"',
      imagen: clienteImagen1,
    },
    {
      nombre: 'Roronoa Zoro',
      texto: '"No puedo expresar lo maravillosa que fue mi experiencia con esta página web de viajes. Todo fue tan sencillo y directo, desde la reserva hasta los consejos de viaje que recibí. Los destinos sugeridos fueron perfectos para mí, y realmente hicieron que mi viaje fuera inolvidable. Nunca había utilizado un sitio web tan completo y amigable. Sin duda, volveré a utilizar sus servicios en mi próximo viaje. ¡Altamente recomendable!"',
      imagen: clienteImagen2,
    },
    {
      nombre: 'Eustass kid',
      texto: '"¡Qué experiencia tan increíble! Esta página web de viajes es, sin duda, la mejor que he utilizado. La facilidad para encontrar ofertas y planificar todo fue sorprendente. Me ayudaron en cada paso del proceso, lo que hizo que mi viaje fuera absolutamente inolvidable. La atención al detalle y el excelente servicio al cliente marcaron la diferencia. Estoy muy agradecido y definitivamente recomendaré este sitio a todos mis conocidos. ¡El mejor lugar para planificar viajes!"',
      imagen: clienteImagen3,
    },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length);
  };

  return (
    <section className="seccion-testimonio">
      <div className="testimonio-container">
        <img src={testimonios[index].imagen} alt="Cliente satisfecho" className="imagen-testimonio" />
        <div className="texto-testimonio">
          <h3>Testimonios de <br /> NUESTROS CLIENTES</h3>
          <p>{testimonios[index].texto}</p>
          <p className="nombre-cliente">{testimonios[index].nombre}</p>
          <div className="flechas-navegacion">
            <button onClick={handlePrev} className="flecha-prev">
            ←
            </button>
            <button onClick={handleNext} className="flecha-next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonio;
