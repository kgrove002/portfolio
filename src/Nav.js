import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="qualifications">Qualifications</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
