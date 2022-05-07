import React,{useEffect,useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import axios from 'axios';
import firebase from './firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function HeaderAdmin  () {
  const [not,setNot]=useState([]);
  const [msg,setMsg]=useState([]);

 const ref=firebase.firestore().collection("notification")
 const ref1=firebase.firestore().collection("mesg2")
 const query = ref1.orderBy('createdAt','desc').limit(4);
 const [messages] = useCollectionData(query, { idField: 'id' });

 console.log(ref)
 function getNot(){
   ref.get().then((item)=>{
    const items=item.docs.map((doc)=>doc.data());
    setNot(items);

   })
 }
 function getMsg(){
  ref1.get().then((item)=>{
   const items=item.docs.map((doc)=>doc.data());
   setMsg(items);
  })
}
  const history = useNavigate();
  function logout() {
localStorage.clear()
setTimeout(function(){
  window.location.reload(false); 
 },1000);				
      history('/hero')
 }
 const [adm,setAdm]=useState({
  img:""
  
})
 useEffect(() => {
  getNot();
  getMsg();
  console.log(not);
  const msg1=firebase.messaging();
  msg1.requestPermission().then(()=>{
    return msg1.getToken();
  }).then((data)=>{
    console.log("token",data)
  })
  axios.get(`http://localhost:8080/api/v1/employee/byUserName/${localStorage.getItem("username")}`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  }).then(
    (res)=>
    {
    setAdm({
    img:res.data.image,
    
     
    })
  }
  )
}, []);
var sr="assets/img/"+ adm.img;

  return (
    <div>
      <header  id="header" className="header fixed-top d-flex align-items-center">

<div style={{marginLeft:"20px"}} className="d-flex align-items-center justify-content-between">
  <NavLink to="/" className="logo d-flex align-items-center">
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
        <span className="badge bg-primary badge-number">{not.length}</span>
      </a>
      {/* < />!-- End Notification Icon --> */}

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have {not.length} new notifications
        </li>
        {
          not.map(n=>
            {
              return(
                <div>
                  <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>{n.user}</h4>
            <p>{n.content}</p>
            <p>{n.time}</p>
          </div>
        </li>
                </div>
              )
            })
        }
       
      </ul>
      {/* <!-- End Notification Dropdown Items --> */}

    </li>
    {/* <!-- End Notification Nav --> */}

    <li className="nav-item dropdown">

      <a className="nav-link nav-icon" href="#i" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">{msg.length}</span>
      </a>
      {/* < />!-- End Messages Icon --> */}

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have {msg.length} new messages
        </li>
        {
          messages && messages.map(m=>{
            return(
              <div>
                <li>
          <hr className="dropdown-divider">
          </hr></li>

        <li className="message-item">
          <a href="#i">
          <i className="bi bi-chat-left-dots-fill"></i>       
                 <div>
                <h4>{m.name}</h4>
                <p>{m.subject}</p>
                <p>{m.msg}</p>
              </div>
            </a>
        </li>
              </div>
            )
          })
        }
        

        <li className="dropdown-footer">
          <NavLink to="/PageC">Show all messages</NavLink>
        </li>

      </ul>
      {/* <!-- End Messages Dropdown Items --> */}

    </li>
    {/* <!-- End Messages Nav --> */}
        
    <li className="nav-item dropdown pe-3">

      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#i" data-bs-toggle="dropdown">
        <img src={sr} alt="Profile" className="rounded-circle"/>
          <span className="d-none d-md-block dropdown-toggle ps-2">{localStorage.getItem("name")}</span>
        </a>
      {/* <!-- End Profile Iamge Icon --> */}

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>{localStorage.getItem("name")}</h6>
          <span>{localStorage.getItem("role")}</span>
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
          <button className="dropdown-item d-flex align-items-center" onClick={logout} >
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </button>
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
  
}

export default HeaderAdmin

