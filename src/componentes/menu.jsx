import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav className="menu">
    <ul>
      <li><Link to="/">PLANETAS</Link></li>
      <li><Link to="/Replikas">REPLIKAS</Link></li>
      <li><Link to="/Formulario">FORMULARIO</Link></li>
    </ul>
  </nav>
);

export default Menu;
