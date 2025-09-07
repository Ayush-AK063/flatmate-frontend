import React from "react";
import { Link } from 'react-router-dom';
import logo from "/img/logo.png";

const Nav = ({ isAuthenticated }) => {
  return (
    <>
      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 px-3">
          <Link to={'/'} className="navbar-brand d-flex align-items-center text-center">
            <div className=" p-2 me-2">
              <img
                className="img-fluid"
                src={logo}
                alt="Icon"
                style={{ width: 'auto', height: 30 }}
              />
            </div>
            <h1 className="m-0 text-primary">Nestio</h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto ">
              <Link to={'/'} className="nav-item nav-link">
                Home
              </Link>
              <Link to={'/about'} className="nav-item nav-link">
                About
              </Link>
              
              <Link to={'/contact'} className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
              {isAuthenticated ? (
                <div>
                  <Link to={'/dashboard'} className="btn btn-primary mx-1">Dashboard</Link>
                  <Link to={'/logout'} className="btn btn-primary mx-1">Logout</Link>
                </div>
              ) : (
                <Link to={'/login'} className="btn btn-primary">Login/SignUp</Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
