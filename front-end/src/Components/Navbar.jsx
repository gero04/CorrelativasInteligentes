import React from "react";
import "../styles/Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to='/' className='navbar-link'>Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to='/seguimiento' className="navbar-link" >Seguimiento</Link>
        </li>
        <li className="navbar-item">
          <Link to='/materias' className="navbar-link" >Materias</Link>
        </li>
        <li className="navbar-item">
          <Link to='/about' className="navbar-link" >Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
