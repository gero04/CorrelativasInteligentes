import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from './components/Layout/Navbar';
import { Inicio } from './pages/Inicio';
import { SeguimientoMaterias } from './pages/SeguimientoMaterias';
import { SeguimientoFinales } from './pages/SeguimientoFinales';
import { Materias } from './pages/Materias';
import { AcercaDe } from './pages/AcercaDe';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-500 w-screen min-h-screen pt-16">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/seguimiento" element={<SeguimientoMaterias />} />
            <Route path="/materias" element={<Materias />} />
            <Route path="/about" element={<AcercaDe />} />
            <Route path="/finales" element={<SeguimientoFinales />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;