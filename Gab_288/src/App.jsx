import { Fragment } from "react";
import Titulo from "./componentes/Titulo";
import Pie from "./componentes/Pie";
import Ciudad from "./componentes/Ciudad"

function App () {

  return (

    <>
    <Titulo/>
    <Ciudad
    nombre ="Lima"
    descripcion ="Capital del Perú"
    imagen ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_AXhjaPJMdz6lVd83xzinN20U-tNEQc-jg&s"
    />
    <Ciudad
    nombre = "Arequipa"
    descripcion="Encatadora tierra volcanica"
    imagen = "https://travel1tours.com/wp-content/uploads/2019/10/Arequipa-768x480.jpg"
    />
    <Pie/>
    </>
  );
}
export default App;
