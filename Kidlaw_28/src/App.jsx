import { Fragment } from "react"
import ingresarNombreUsuario from "./componentes/login.jsx";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Login from "./componentes/login.jsx";
import Jugar from "./componentes/jugar.jsx";

function App(){


  return (
    <> 

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jugar/:username" element={<Jugar />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;