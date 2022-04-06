import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


  


class HeaderAdmin extends Component {
 
render(){
  return (
    <div>
      <header  id="header" className="header fixed-top d-flex align-items-center">

<div style={{marginLeft:"20px"}} className="d-flex align-items-center justify-content-between">
  <NavLink to="/DachB" className="logo d-flex align-items-center">
    <img src="assets/img/logoADM.png" alt=""/>
      <span className="d-none d-lg-block">NiceAdmin</span>
    </NavLink>
  
</div>
{/* <!-- End Logo --> */}


<nav className="header-nav ms-auto">
  <ul className="d-flex align-items-center">

    <li className="nav-item d-block d-lg-none">
      <a className="nav-link nav-icon search-bar-toggle " href="#i">
        <i className="bi bi-search"></i>
      </a>
    </li>
    {/* <!-- End Search Icon--> */}

    <li className="nav-item dropdown">

      <a className="nav-link nav-icon" href="#i" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>
      {/* < />!-- End Notification Icon --> */}

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#i"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider">
          </hr></li>
        <li className="dropdown-footer">
          <a href="#i">Show all notifications</a>
        </li>

      </ul>
      {/* <!-- End Notification Dropdown Items --> */}

    </li>
    {/* <!-- End Notification Nav --> */}

    <li className="nav-item dropdown">

      <a className="nav-link nav-icon" href="#i" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>
      {/* < />!-- End Messages Icon --> */}

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#i"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
        </li>
        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="message-item">
          <a href="#i">
            <img src="assets/imgADM/messages-1.jpg" alt="" className="rounded-circle"/>
              <div>
                <h4>Maria Hudson</h4>
                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                <p>4 hrs. ago</p>
              </div>
            </a>
        </li>
        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="message-item">
          <a href="#i">
            <img src="assets/imgADM/messages-2.jpg" alt="" className="rounded-circle"/>
              <div>
                <h4>Anna Nelson</h4>
                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                <p>6 hrs. ago</p>
              </div>
            </a>
        </li>
        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="message-item">
          <a href="#i">
            <img src="assets/imgADM/messages-3.jpg" alt="" className="rounded-circle"/>
              <div>
                <h4>David Muldon</h4>
                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                <p>8 hrs. ago</p>
              </div>
            </a>
        </li>
        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="dropdown-footer">
          <a href="#i">Show all messages</a>
        </li>

      </ul>
      {/* <!-- End Messages Dropdown Items --> */}

    </li>
    {/* <!-- End Messages Nav --> */}

    <li className="nav-item dropdown pe-3">

      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#i" data-bs-toggle="dropdown">
        <img src="assets/imgADM/profile-img.jpg" alt="Profile" className="rounded-circle"/>
          <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
        </a>
      {/* <!-- End Profile Iamge Icon --> */}

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Kevin Anderson</h6>
          <span>Web Designer</span>
        </li>
        <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li>
          <NavLink className="dropdown-item d-flex align-items-center" to="/UP">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </NavLink>
        </li>
        <li>
          <hr className="dropdown-divider">
          </hr></li>

       
        <li>
          <hr className="dropdown-divider">
          </hr></li>



        <li>
          <a className="dropdown-item d-flex align-items-center" href="#i">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
      {/* <!-- End Profile Dropdown Items --> */}
    </li>
    {/* <!-- End Profile Nav --> */}

  </ul>
</nav>
{/* <!-- End Icons Navigation --> */}


</header>

    </div>
    
  )
  
}}

export default HeaderAdmin

