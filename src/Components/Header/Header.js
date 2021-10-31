import "./Header.css";

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [token ,setToken] = useState(null)

   useEffect(() => {
    setToken(localStorage.getItem('token'))
   }, []);
  
  return (
    <div className="header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="container-fluid">
            <div className="logos">
              <Link to="/">
                <img id="logo1" src="/logo192.png" alt="logo" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-4">
                <Link to="/">
                  <li
                    className="nav-item ml-5 headerletters nav-link active text-info"
                    aria-current="page"
                    href="#"
                  >
                    INICIO
                  </li>
                </Link>

                {token !== null? 

                <Link to="/create">
                  <li
                    className="nav-item headerletters headerletters nav-link text-info"
                    href="#"
                  >
                    CREAR
                  </li>
                </Link>
: null}

                <li className="nav-item ml-5"></li>
              </ul>
              <div className="headerlogin">
                {token == null? 
                <Link to="/registro">
                  <button
                    className="btn btn-outline text-black bg-light"
                    type="submit"
                  >
                    Iniciar sesion
                  </button>
                </Link>
                : null}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
