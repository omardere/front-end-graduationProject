import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'
import axios from 'axios' 
function Signup() {
const [data,setData]=useState({
  fname:"",
  lname:"",
  email:"",
  username:"",
  password:"",
  bod:"",
  address:"",
  postalcode:"",
  phone:"",
  credit:"" ,
  creditname:""
})
function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value;
  setData(newdata);
  console.log(newdata);
}
function submit(e){
 e.preventDefault();  
 axios.post(`http://localhost:8080/api/v1/customer/addCustomer`,{
  address:data.address,
     postalCode:data.postalcode,
     phoneNumber:data.phone,
     cardID:data.credit,
     creditCard:data.creditname,
    user:{ firstName:data.fname,
     lastName:data.lname,
     userName:data.username,
     email:data.email,
     dop:data.bod,
     password:data.password,  
    }
 }).then(res=>{
   if(res.status===200)
 {
  axios.post(`http://localhost:8080/api/v1/card/addCard/${data.username}`,{
    

  }   
      
   )
  setData({
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    bod:"",
    address:"",
    postalcode:"",
    phone:"",
    credit:"" ,
    creditname:""
    
  });
}
 }).catch(e=>
  {
    if(e.response.status===500)
    {
      alert("user name or email are alredy found")
    }
  })
}
 

  return (
    <body class="img js-fullheight" style={{backgroundImage: "url(assets/img/login.jpeg)"}}>
	
    <section class="ftco-section">
		<div  id="signup" class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">SignUp</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="login-wrap p-0">
		      	
		      	<form onSubmit={(e)=>submit(e)} class="signin-form">
		      		<div class="form-group">
		      			<input onChange={(e)=>handle(e)} value={data.fname} id="fname" type="text" class="form-control" placeholder="First Name" required/>
                          
		      		</div>
	            <div class="form-group">
	              <input onChange={(e)=>handle(e)} value={data.lname} id="lname"  type="text" class="form-control" placeholder="Last Name" required/>
	              
	            </div>
                <div class="form-group">
                    <input onChange={(e)=>handle(e)} value={data.username} id="username" type="text" class="form-control" placeholder="Username" required/>
                </div>
          <div class="form-group">
            <input onChange={(e)=>handle(e)} value={data.email} id="email" type="email" class="form-control" placeholder="Email" required/>
            
          </div>
          <div class="form-group">
            <input onChange={(e)=>handle(e)} value={data.password}  id="password" type="password" class="form-control" placeholder="Password" required/>
            
          </div>
          <div class="form-group">
            <input onChange={(e)=>handle(e)} value={data.bod} id="bod" type="date" class="form-control" placeholder="dob" required/>
        </div>
        <div class="form-group">
            <input onChange={(e)=>handle(e)} value={data.address} id="address" type="text" class="form-control" placeholder="Address" required/>
        </div>
        <div style={{alignItems:"center"}} class="form-group">
            <input onChange={(e)=>handle(e)} value={data.postalcode} id="postalcode" type="text"  class="form-control" placeholder="Postal code" required/>
        </div>
        <div class="form-group">
            <input onChange={(e)=>handle(e)} value={data.phone} id="phone" type="text" class="form-control" placeholder="Phone Number" required/>
        </div>
        <div class="form-group">
            <input onChange={(e)=>handle(e)} value={data.credit} id="credit" type="text" class="form-control" placeholder="Credit Card ID" required/>
            
        </div>
        <div class="form-group">
            <input onChange={(e)=>handle(e)} value={data.creditname} id="creditname" type="text" class="form-control" placeholder="Credit Card" required/>
            
        </div>
  
	            <div class="form-group">
	            	<button type="submit" class="form-control btn btn-primary submit px-3">Sign Up</button>
	            </div>
	     </form>
              <div style={{marginop: "10px",textAlign:"center"}}>
              <NavLink  to="/" class="w-100 text-center">&mdash; Or Sign In &mdash;</NavLink>
            </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
	</body>
  )
}

export default Signup
