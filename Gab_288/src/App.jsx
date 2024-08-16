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
    <Pie/>
    </>
  );
}
export default App;
