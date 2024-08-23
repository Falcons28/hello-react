import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambia Switch por Routes
import Jugar from './componentes/jugar';
import BatallaPC from './componentes/batallapc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jugar />} /> {/* Usa element en lugar de component */}
        <Route path="/batallapc" element={<BatallaPC />} /> {/* Usa element en lugar de component */}
      </Routes>
    </Router>
  );
}

export default App;
