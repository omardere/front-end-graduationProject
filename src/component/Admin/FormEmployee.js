import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function FormEmployee() {
  //const url='http://localhost:8080/api/v1/employee/addEmployee/1';
  const [warehouse,setWarehouse]=useState({
    warehouse:[],
      
  })
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/department`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }}).then(
      (res)=>
      setWarehouse({
        warehouse:res.data
      })
    )
}, []);
  const [data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    bod:"",
    startdate:"",
    photo:""  ,
    salary:"",
    role:"",
    department:""    
  })
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value;
    if(e.target.id==="photo"){
      newdata[e.target.id]=e.target.files[0].name;
     }
    setData(newdata);
    console.log(newdata);
  }
  function submit(e){
   e.preventDefault();
    console.log(e.target.id);
    if(e.target.id==="btn1")
    {
   axios.post(`http://localhost:8080/api/v1/employee/addEmployee/${data.store}`,{
    salary:data.salary,
    startingDate:data.startdate,
    role:data.role,
    image:data.photo,
      user:{ firstName:data.fname,
       lastName:data.lname,
       userName:data.username,
       email:data.email,
       dop:data.bod,
       password:data.password,
      }
      
   },{
     headers:{
    'Authorization': `Bearer ${localStorage.getItem("token")}` 
  }}).then(res=>{
     if(res.status===200)
   {
    setData({
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      bod:"",
      startdate:"",
      salary:"",
      role:"",
      department:""
      
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
                            alert("employee not found")
                          }
                        })
                      axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${data.username}/?salary=${data.salary}&role=${data.role}`,null,{
                        headers: {
                          'Authorization': `Bearer ${localStorage.getItem("token")}` 
                        }
                      }).catch(e=>
                        {
                          if(e.response.status===500)
                          {
                            alert("employee not found")
                          }
                        })
                  
            setData({
              fname:"",
              lname:"",
              email:"",
              username:"",
              password:"",
              bod:"",
              startdate:"",
              salary:"",  
              role:"",
              department:""
            });  
            
  }
  else if(e.target.id==="btn3")  
{
  axios.delete(`http://localhost:8080/api/v1/employee/deleteEmployeeByUserName/${data.username}`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
    }
  }
  ).then(res=>{
     if(res.status===200)
   {
    setData({
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      bod:"",
      startdate:"",
      salary:"", 
      role:"",  
      department:"",
      store:"None",
      photo:""
  
    });
  }
   })
    
  
} 
  }

  return (
    <div  >
      <section  id="form_employee">
  <main style={{
  zIndex: "1", 
  marginTop: "0px",
  color:"beige"}} id="main" className="main">

    <div   className="pagetitle">
      <h1>Employee</h1>
      <nav >
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
          <li className="breadcrumb-item">Forms</li>
          <li className="breadcrumb-item ">Employee</li>
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
                <label for="inputDate" className="col-sm-3 col-form-label"> personal photo</label>
                <div className="col-sm-9">
                  <input onChange={(e)=>handle(e)}  id="photo" required type="file" className="subtask-hide col-xs-10"/>
                </div>
              </div>
                <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">department</label>
                <div className="col-sm-9">
                  <select onChange={(e)=>handle(e)} value={data.store} id="store" >
                  <option value="">None</option>
                  { warehouse.warehouse.map(ware => (
  <option key={ware.name} value={ware.name}>
    {ware.name}
  </option>
))} 
                  </select>
                </div>
              </div>
                
                
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Dob</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="bod" value={data.bod} required  type="date" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Starting Date</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.startdate} id="startdate" required type="date" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Salary</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.salary} id="salary" required type="text" className="form-control"/>
                  </div>
                </div>                              
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Role</legend>
                  <div className="col-sm-9">
                    <div className="form-check">
                      <input className="form-check-input" onChange={(e)=>handle(e)} type="radio" required name="gridRadios" id="role" value="1" />
                      <label className="form-check-label" for="gridRadios1">
                        Employee
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" onChange={(e)=>handle(e)} type="radio" required name="gridRadios" id="role" value="2"/>
                      <label className="form-check-label" for="gridRadios2">
                       head
                      </label>
                    </div>
                    <div className="form-check ">
                      <input className="form-check-input" onChange={(e)=>handle(e)} type="radio" required name="gridRadios" id="role" value="3" />
                      <label className="form-check-label" for="gridRadios3">
                        Manager
                      </label>
                    </div>
                  </div>
                </fieldset>
                
                <div className="row mb-3">
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

export default FormEmployee
