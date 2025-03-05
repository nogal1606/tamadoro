import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/navbar';
import Estudio from "./estudio/estudio.tsx";
import Mascotas from "./mascotas/Mascotas.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/estudio" element={<Estudio/>} />
        <Route path="/mascotas" element={<Mascotas/>} />
        <Route path="/" element={<h1>Bienvenido a Tamadoro</h1>} />
      </Routes>
    </Router>
  );
}

export default App;


