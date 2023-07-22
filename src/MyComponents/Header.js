import React from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom';


export default function Header() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/signup'; 
    navigate(path);

    const headingh2 = {
      fontFamily: "Allura, cursive",
      //fontWeight: 'bold',
      fontSize: '30px'
    };

  }
  const routeChange2 = () =>{
    let path = '/login';
    navigate(path);
  }
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home" style={{ fontFamily: "'Allura', cursive", fontSize: '30px' }}>PhotoGet</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Pricing">Pricing</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu">
                {/* <li><Link className="dropdown-item" to="#">Vision</Link></li> */}
                <li><Link className="dropdown-item" to="/About Us">Team</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Resources</Link></li>
              </ul>
            </li>
             
          </ul>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">

            <button class="btn btn-primary me-md-2" type="button" onClick={routeChange2}>Login</button>
            <button class="btn btn-primary me-md-2" type="button" onClick={routeChange}>Sign Up</button>

          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
