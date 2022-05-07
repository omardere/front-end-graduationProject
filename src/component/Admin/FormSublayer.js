import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function FormSublayer() {
const url='http://localhost:8080/api/v1/supplier/addSupplier';
  const [data,setData]=useState({
    name:"",
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    bod:"",
    address:"",
    type:"",
    fax:"",
    method:"",
    phone:"",
    postal:"",      
  })
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function submit(e){
   e.preventDefault();
    console.log(e.target.id);
    if(e.target.id==="btn1")
    {
     
   axios.post(url,{
    
    address:data.address,
    postalCode:data.postal,
    fax:data.fax,
    paymentMethode:data.method,
    discountType:data.type,
    phoneNumber:data.phone,
    user: {
      firstName: data.fname,
      lastName: data.lname,
      userName: data.username,
      email: data.email,
      dop: data.bod,
      password: data.password
  },
  companyName:data.name
   },{
    headers:{
   'Authorization': `Bearer ${localStorage.getItem("token")}` 
 }}).then(res=>{
    console.log(res.status)
     if(res.status===200)
   {
    setData({
      name:"",
      address:"",
      type:"",
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      bod:"",
      fax:"",
      method:"",
      phone:"",
      postal:"",
      
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
  else if(e.target.id==="btn2")
  {  
                 axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}&lastName=${data.lname}&email=${data.email}&password=${data.password}`,null,{
                            headers: {
                              'Authorization': `Bearer ${localStorage.getItem("token")}` 
                            }
                          }).catch(e=>
                            {
                              if(e.response.status===500)
                              {
                                alert("sublyaer not found")
                              }
                            })
                          axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}&paymentMethode=${data.method}&postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}&companyName=${data.name}&discountType=${data.type}`,null,{
                            headers: {
                              'Authorization': `Bearer ${localStorage.getItem("token")}` 
                            }
                          }).catch(e=>
                            {
                              if(e.response.status===500)
                              {
                                alert("sublayer not found")
                              }
                            })
                  

              
            setData({
              name:"",
              address:"",
              type:"",
              fname:"",
              lname:"",
              email:"",
              username:"",
              password:"",
              bod:"",
              fax:"",
              method:"",
              phone:"",
              postal:"",
            });  
            
  }
  else if(e.target.id==="btn3")  
{
  axios.delete(`http://localhost:8080/api/v1/supplier/deleteByUserName/${data.username}`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
    }
  }
  ).then(res=>{
     if(res.status===200)
   {
    setData({
      name:"",
      address:"",
      type:"",
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      bod:"",
      fax:"",
      method:"",
      phone:"",
      postal:"",
      
    });
  }
   })
    
  
} 
  }



  return (
    <div>
      
<section  id="form_sublayer">
  <main style={{
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat", 
  marginTop: "0px",
  zIndex: "1",
  color:"beige"}} id="main" className="main">
  
    <div  className="pagetitle">
      <h1>Sublayers</h1>
      <nav>
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
          <li className="breadcrumb-item">Forms</li>
          <li className="breadcrumb-item ">Sublayer</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}
  
    <section  className="section">
      <div className="row">
        <div style={{width: "90%", display: "flex", justifyContent: "center",background: "none"}} >
  
          <div style={{width: "70%"}} >
            <div className="card-body">
  
              {/* <!-- General Form Elements --> */}
              <form>
              <div style={{marginTop: "-50px"}} className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">First Name</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.fname} id="fname" required  type="text" className="form-control"/>
                  </div>
                </div>
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">Last Name</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="lname" value={data.lname}  required type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" required className="form-control"/>
                  </div>
                </div>
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">UserName</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.username} id="username" required  type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="password" value={data.password} required type="password" className="form-control"/>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Dob</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="bod" value={data.bod} required  type="date" className="form-control"/>
                  </div>
                </div>
                  <div  className="row mb-3">
                    <label for="inputText" className="col-sm-3 col-form-label">Company Name</label>
                    <div  className="col-sm-9">
                      <input  onChange={(e)=>handle(e)} value={data.name} id="name" type="text" className="form-control"/>
                    </div>
                  </div>
                  <div  className="row mb-3">
                    <label for="inputText" className="col-sm-3 col-form-label">Adress</label>
                    <div  className="col-sm-9">
                      <input  type="text" onChange={(e)=>handle(e)} value={data.address} id="address" className="form-control"/>
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-3 col-form-label">fax</label>
                    <div className="col-sm-9">
                      <input type="text"  onChange={(e)=>handle(e)} value={data.fax} id="fax" className="form-control"/>
                    </div>
                  </div>
                  
                  
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">Payment Method</label>
                    <div className="col-sm-9">
                      <input type="text" onChange={(e)=>handle(e)} value={data.method} id="method" className="form-control"/>
                    </div>
                  </div>
                 
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">Postal Code</label>
                    <div className="col-sm-9">
                      <input type="text"  onChange={(e)=>handle(e)} value={data.postal} id="postal" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">discount type</label>
                    <div className="col-sm-9">
                      <input  onChange={(e)=>handle(e)} value={data.type} id="type" type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">Phone Number</label>
                    <div className="col-sm-9">
                      <input  onChange={(e)=>handle(e)} value={data.phone} id="phone" type="text" className="form-control"/>
                    </div>
                  </div>
                 
                  
                  <div className="row mb-3">
                    <div  className="col-sm-10">
                      <button onClick={(e)=>submit(e)} id="btn1" style={{marginRight: "30px", marginLeft:" 150px"}} type="submit" className="btn btn-primary">ADD</button>
                      <button onClick={(e)=>submit(e)} id="btn2" style={{marginRight:" 30px", }}type="submit" className="btn btn-primary">Update</button>
                      <button onClick={(e)=>submit(e)} id="btn3" type="submit" className="btn btn-primary">Delete</button>
  
                    </div>
                  </div>
  
                </form>
                {/* <!-- End General Form Elements --> */}
  
            </div>
          </div>
  
        </div>
  
      </div>
    </section>
  
  </main>
  {/* <!-- End #!main --> */}
  <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

</section>
    </div>
  )
}

export default FormSublayer
