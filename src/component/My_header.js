import React from 'react'
import { NavLink } from 'react-router-dom'

function My_header() {
  function logout() {
    localStorage.clear()
    window.location.reload(false);
    
     }

  if(localStorage.getItem("role")==="Customer")
  {
  return (
    <header id="header" className="fixed-top header-scrolled">
    <div className="container d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="index.html"><span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><NavLink className="nav-link scrollto active" to="/hero">Home</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/services">Services</NavLink></li>
          <li><NavLink className="nav-link scrollto " to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/team">Team</NavLink></li>
          <li className="dropdown"><a href="#!"><span>Department</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><NavLink exact to="/Product">Our Products</NavLink></li>
              <li><NavLink to="/Cart">Card</NavLink></li>               
            </ul>
          </li>
          <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <NavLink onClick={logout}  to="/" className="get-started-btn scrollto">Logout</NavLink>


    </div>
  </header>
  )}
  else{
    return (
      <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex align-items-center justify-content-lg-between">
  
        <h1 className="logo me-auto me-lg-0"><a >SQI<span>.</span></a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <!-- <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
  
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><NavLink className="nav-link scrollto active" to="/hero">Home</NavLink></li>
            <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
            <li><NavLink className="nav-link scrollto" to="/services">Services</NavLink></li>
            <li><NavLink className="nav-link scrollto " to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink className="nav-link scrollto" to="/team">Team</NavLink></li>
            <li className="dropdown"><a href="#!"><span>Department</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li><NavLink exact to="/Product">Our Products</NavLink></li>
                <li><NavLink to="/Cart">Card</NavLink></li>               
              </ul>
            </li>
            <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        
        <NavLink to="/" className="get-started-btn scrollto">Login</NavLink>

      </div>
    </header>
    )
  }
}

export default My_header
