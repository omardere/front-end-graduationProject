import React,{useState,useEffect,useRef} from 'react'
import './Login.css'
import { NavLink,useNavigate } from 'react-router-dom'
import axios from 'axios';
function Login() {
	// http://localhost:8090/authenticate

	const [data,setData]=useState(
		{
		username:"",
		pass:"",
		flag:false
		}
	)
	const [user,setUser]=useState(
		{
		user:[]
		}
	)
	const history = useNavigate();
	// useEffect(() => {
	// 	axios.get(`http://localhost:8080/api/v1/user`).then(
	// 			(res)=>
	// 			setUser({
	// 			  user:res.data
	// 			})
	// 		  )
	  
	// 	  }, []);
	function handle(e){
		const newdata={...data}
		newdata[e.target.id]=e.target.value;
		setData(newdata);
		console.log(newdata);
	  }
	  function submit(e){
		e.preventDefault(); 
		axios.post(`http://localhost:8080/api/v1/authenticate/authenticate`,{
			userName:data.username,
			userPassword:data.pass
		}).then(
			(res)=>
			{
				if(res.status===200)
				{
             console.log(res.data)
			 localStorage.setItem("token",res.data.jwtToken)
             localStorage.setItem("role",res.data.user.role.roleName)
			 localStorage.setItem("username",res.data.user.userName)
			 localStorage.setItem("name",res.data.user.firstName+" "+res.data.user.lastName)			 
			 if(res.data.user.role.roleName==="Employee"||res.data.user.role.roleName==="Admin"||res.data.user.role.roleName==="Head")
				{
					window.location.reload(false);
					
				}
				else
				{
					setTimeout(function(){
						window.location.reload(false); 
					 },1000);				
	 	         	history('/hero')
				
		 		}

				}
				
			}
			  ).catch(error=>
				{
					if(error.response.status===401)
					{
                       setData({
						   flag:true,
						   username:"",
						   pass:"",
					   })
					   
					}
					
				})
			  
			  
		// user.user.every(u=>{
		// 	console.log(u.userName)
		// 	console.log(u.password)

		// 	if(u.userName===data.username&&u.password===data.pass)
		// 	{
		// 		localStorage.setItem('token',u.role)
		// 		console.log(u.role)
		// 		if(u.role===1)
		// 		{
		// 			window.location.reload(false);
					
		// 		}
		// 		else
		// 		{
		// 			setTimeout(function(){
		// 				window.location.reload(false); 
		// 			 },1000);				
		// 		history('/hero')
				
		// 		}
		// 	    return false
		// 	}
			
        // return true
		// }) 
       
	  }
	
 if(data.flag===true){
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
		      	
		      	<form onSubmit={(e)=>submit(e)} class="signin-form">
		      		<div class="form-group">
		      			<input id='username' type="text" class="form-control" value={data.username} onChange={(e)=>handle(e)}  placeholder="Username" required/>
		      		</div>
	            <div class="form-group">
				<input id="pass"  value={data.pass} onChange={(e)=>handle(e)} type="password" class="form-control" placeholder="Password" required/>
	              
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
			
			<div style={{  marginTop: "10px",textAlign:"center"}}>
              <p style={{color:"red"}} >&mdash; user name or password not correct &mdash;</p>
            </div>
		      </div>
				</div>
			</div>
		</div>
	</section>
    
	</body>
  )}else{
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
					
					<form onSubmit={(e)=>submit(e)} class="signin-form">
						<div class="form-group">
							<input id='username' type="text" class="form-control" value={data.username} onChange={(e)=>handle(e)}  placeholder="Username" required/>
						</div>
				  <div class="form-group">
				  <input id="pass"  value={data.pass} onChange={(e)=>handle(e)} type="password" class="form-control" placeholder="Password" required/>
					
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
}

export default Login
