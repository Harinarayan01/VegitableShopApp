import React from 'react';
import logo from '../assets/images/logo.png';
// import './NavBar.css'; // Importing external CSS for styling

const NavBar = () => {
  return (
    <div className="container-fluid px-5 header fixed-navbar"> {/* Add 'fixed-navbar' class */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={logo} alt='' />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 menu-color">Home</a></li>
          <li><a href="#" className="nav-link px-2 menu-color">Product</a></li>
          <li><a href="#" className="nav-link px-2 menu-color">About</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <i className='bi bi-search fs-3 me-4 text-success'></i>
          <i className='bi bi-cart fs-3 text-success'>0</i>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
