import React,{useState,useEffect,useRef} from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
function Login() {
	const userRef=useRef();
	const errRef=useRef();
	const [user,setUser]=useState('');
	const [pwd,setpwd]=useState('');
	const [errMsg,setErrMsg]=useState('');
	const [success,setSuccess]=useState(false);
	useEffect(()=>
	{
		userRef.current.focus();
	},[])
	useEffect(()=>
	{
		setErrMsg('');
	},[user,pwd])
  return (
      <body class="img js-fullheight" style={{backgroundImage: "url(assets/img/login.jpeg)"}}>
	<section class="ftco-section">
		<div id="signin" class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Signin</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="login-wrap p-0">
		      	
		      	<form action="#" class="signin-form">
		      		<div class="form-group">
		      			<input type="text" class="form-control" onChange={(e)=>setUser(e.target.value)} ref={userRef} placeholder="Username" required/>
		      		</div>
	            <div class="form-group">
	              <input id="password-field" type="password" class="form-control" placeholder="Password" required/>
	              
	            </div>
	            <div class="form-group">
	            	<button type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
	            </div>
	            <div class="form-group d-md-flex">
	            	<div class="w-50">
		            	<label class="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" checked/>
									  <span class="checkmark"></span>
									</label>
								</div>
								<div class="w-50 text-md-right">
									<a href="#!" style={{color: "#fff"}}>Forgot Password</a>
								</div>
	            </div>
	          </form>
	          <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
	          <div class="social d-flex text-center">
	          	<a href="#!" class="px-2 py-2 mr-md-1 rounded"><span class="ion-logo-facebook mr-2"></span> Facebook</a>
	          	<a href="#!" class="px-2 py-2 ml-md-1 rounded"><span class="ion-logo-twitter mr-2"></span> Twitter</a>
	          </div>
              <div style={{marginTop: "10px",textAlign:"center"}}>
              <NavLink  to="/signup" class="w-100 text-center">&mdash; Or Sign UP &mdash;</NavLink>
            </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
    
	</body>
  )
}

export default Login
