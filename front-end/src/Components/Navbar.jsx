import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
      <ul className="text-xl font-bold hover:text-gray-300 transition-colors flex space-x-6">
        <li>
          <Link to='/' className='hover:text-orange-500 transition-colors font-medium'>Inicio</Link>
        </li>
        <li className="">
          <Link to='/seguimiento' className="hover:text-orange-500 transition-colors font-medium" >Seguimiento de materias</Link>
        </li>
        <li className="">
          <Link to='/finales' className="hover:text-orange-500 transition-colors font-medium" >Seguimiento de finales</Link>
        </li>
        <li className="">
          <Link to='/materias' className="hover:text-orange-500 transition-colors font-medium" >Materias</Link>
        </li>
        <li className="">
          <Link to='/about' className="hover:text-orange-500 transition-colors font-medium" >Acerca de</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
