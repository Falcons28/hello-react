import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from "./componente/fomulario";

function App() {
  return (
    <>
      <div className="container container-fluid">
        <br />
        <br />
        <h1>Ingreso de Datos</h1>
        <Formulario/>
      </div>
    </>
  );
}

export default App;