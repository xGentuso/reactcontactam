import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid"></div>
        <Link to="/" className="navbar-brand">Contact Manager</Link>
    </nav>
  );
};

export default Navbar;