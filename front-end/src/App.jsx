import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Inicio from "./Components/Inicio";
import AcercaDe from "./Components/AcercaDe";
import Materias from "./Components/Materias";
import SeguimientoMaterias from "./Components/SeguimientoMaterias";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-indigo-300 h-screen w-screen">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/seguimiento" element={<SeguimientoMaterias />} />
            <Route path="/materias" element={<Materias />} />
            <Route path="/about" element={<AcercaDe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
