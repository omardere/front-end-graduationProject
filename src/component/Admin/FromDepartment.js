import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function FormDepartment() {
  const url='http://localhost:8080/api/v1/department/addDepartment';

  const [data,setData]=useState({
    name:"",
    email:"",
    fax:"",
    phone:"",
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
    phone:data.phone,
    fax:data.fax,
    email:data.email,
    name:data.name,
   }).then(res=>{
     if(res.status===200)
   {
    setData({
      name:"",
      phone:"",
      email:"",
      fax:"",     
    });
  }
   })

   
  }
  else if(e.target.id==="btn2")
  {
    var e=false,f=false,p=false;
    
         if(data.email!==""){
           e=true;
          }
           if(data.fax!==""){
             f=true;
           }
            if(data.phone!==""){
              p=true;
              }
                  if(e&&f&&p)
                  {
                    console.log('1')
                    axios.put(`http://localhost:8080/api/v1/department/update/${data.name}/?fax=${data.fax}&email=${data.email}&phone=${data.phone}`)  
                  }
                  else if(e&&f&&!p)
                  {
                    console.log('2')
                    axios.put(`http://localhost:8080/api/v1/department/update/${data.name}/?fax=${data.fax}&email=${data.email}`)  
                  }
                  else if(e&&!f&&!p)
                  {
                    console.log('3')
                    axios.put(`http://localhost:8080/api/v1/department/update/${data.name}/?email=${data.email}`)  
                  }
                  else if(e&&!f&&p)
                  {
                    console.log('4')
                    axios.put(`http://localhost:8080/api/v1/department/update/${data.name}/?phone=${data.phone}&email=${data.email}`)  
                  }
                  else if(!e&&f&&!p)
                  {
                    console.log('5')
                    axios.put(`http://localhost:8080/api/v1/department/update/${data.name}/?fax=${data.fax}`)  
                  }
                  else if(!e&&!f&&p)
                  {
                    console.log('6')
                    axios.put(`http://localhost:8080/api/v1/department/update/${data.name}/?phone=${data.phone}`)  
                  }
                  else if(!e&&f&&p)
                  {
                    console.log('7')
                    axios.put(`http://localhost:8080/api/v1/department/update/${data.name}/?fax=${data.fax}&phone=${data.phone}`)  
                  }
                  
                  e=false;f=false;p=false;
      setData({
        name:"",
        phone:"",
        email:"",
        fax:"",    
      });
     
  
     
  }
  else if(e.target.id==="btn3")  
{
  axios.delete(`http://localhost:8080/api/v1/department/deleteByName/${data.name}`
  ).then(res=>{
     if(res.status===200)
   {
    setData({
        name:"",
        phone:"",
        email:"",
        fax:"",    
    });
  }
   })
    
  
} 
  }

  return (
    <div  >
      <section  id="form_department">
  <main style={{
height: "600px",
backgroundSize: "cover",
backgroundRepeat: "no-repeat", 
zIndex: "1", 
marginTop: "0px",
color:"beige"}} id="main" className="main">

    <div   className="pagetitle">
      <h1>Department</h1>
      <nav >
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
          <li className="breadcrumb-item">Forms</li>
          <li className="breadcrumb-item ">Department</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section  className="section">
      <div className="row">
        <div style={{width: "90%", display: "flex", justifyContent: "center",background:" none "}} >

          <div style={{width:" 55%"}} >
            <div >

              {/* <!-- General Form Elements --> */}
              <form  >
                <div style={{marginTop: "-50px"}} className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label"> Name</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.name} id="name"   type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" className="form-control"/>
                  </div>
                </div>
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">Fax</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.fax} id="fax"  type="text" className="form-control"/>
                  </div>
                </div>                                               
                
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">phone</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.phone} id="phone"  type="text" className="form-control"/>
                  </div>
                </div>
              
                <div style={{marginTop: "150px"}} className="row mb-3">
                  <div  className="col-sm-10">
                    <button onClick={(e)=>submit(e)} id="btn1" style={{marginRight: "30px", marginLeft: "60px"}} type="submit" className="btn btn-primary">ADD</button>
                    <button onClick={(e)=>submit(e)} id="btn2" style={{marginRight:" 30px"}} type="submit" className="btn btn-primary">Update</button>
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
</section>
    </div>
  )
}

export default FormDepartment
