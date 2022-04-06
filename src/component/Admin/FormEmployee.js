import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function FormEmployee() {
  //const url='http://localhost:8080/api/v1/employee/addEmployee/1';
  const [data,setData]=useState({
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
   axios.post(`http://localhost:8080/api/v1/employee/addEmployee/${data.department}`,{
    salary:parseInt(data.salary),
    startingDate:data.startdate,
    role:data.role,
      user:{ firstName:data.fname,
       lastName:data.lname,
       userName:data.username,
       email:data.email,
       dop:data.bod,
       password:data.password,
       role:1
      }
   }).then(res=>{
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
   })

   
  }
  else if(e.target.id==="btn2")
  {
    var fn=false,ln=false,emal=false,pod=false,pass=false,sd=false,slar=false,rl=false;
    

    if(data.fname!==""){
      fn=true;
   
    }
     if(data.lname!==""){
       ln=true;
      }
       if(data.bod!==""){
         pod=true;
        }
         if(data.email!==""){
           emal=true;
          }
           if(data.password!==""){
             pass=true;
           }
            if(data.startdate!==""){
              sd=true;
              }
              if(data.role!==""){
                rl=true;
            
                }
                if(data.salary!==""){
                  slar=true;
                 
                  }
                  if(fn&&ln&&emal&&pass&&pod)
                  {
                    console.log('1')
                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                  else if(fn&&ln&&emal&&pass&&!pod)
                  {
                    console.log('2')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}&password=${data.password}`)  
                  }
                 else if(fn&&ln&&emal&&!pass&&pod)
                  {
                    console.log('3')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}&dop=${data.bod}`)  
                  }
                 else if(fn&&ln&&!emal&&pass&&pod)
                  {
                    console.log('4')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&dop=${data.bod}&password=${data.password}`)  
                  }
                else  if(fn&&!ln&&emal&&pass&&pod)
                  {
                    console.log('5')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                else  if(!fn&&ln&&emal&&pass&&pod)
                  {
                    console.log('6')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?lastName=${data.lname}
                    &email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                 else if(!fn&&!ln&&emal&&pass&&pod)
                  {
                    console.log('7')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                 else if(!fn&&!ln&&!emal&&pass&&pod)
                  {
                    console.log('8')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?dop=${data.bod}&password=${data.password}`)  
                  }
                else  if(!fn&&!ln&&!emal&&!pass&&pod)
                  {
                    console.log('9')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?dop=${data.bod}`)  
                  }
                else  if(fn&&!ln&&!emal&&!pass&&!pod)
                  {
                    console.log('10')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    `)  
                  }
                 else if(fn&&ln&&!emal&&!pass&&!pod)
                  {
                    console.log('11')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}`)  
                  }
                  else if(fn&&ln&&emal&&!pass&&!pod)
                  {
                    console.log('13')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}`)  
                  }
                  else if(fn&&ln&&!emal&&!pass&&pod)
                  {
                    console.log('14')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&pod=${data.bod}`)  
                  }
                  else if(fn&&ln&&!emal&&pass&&!pod)
                  {
                    console.log('15')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&password=${data.password}`)  
                  }
                  else if(!fn&&ln&&!emal&&!pass&&!pod)
                  {
                    console.log('16')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?
                    lastName=${data.lname}`)  
                  }
                  else if(!fn&&!ln&&!emal&&pass&&!pod)
                  {
                    console.log('17')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?password=${data.password}`)  
                  }
                  else if(!fn&&ln&&emal&&!pass&&!pod)
                  {
                    console.log('18')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?email=${data.email}
                    `)  
                  }
                  else if(fn&&!ln&&!emal&&pass&&!pod)
                  {
                    console.log('19')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                   &password=${data.password}`)  
                  }
                  else if(fn&&!ln&&emal&&!pass&&!pod)
                  {
                    console.log('20')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                   &email=${data.email}`)  
                  }
                  else if(!fn&&ln&&emal&&!pass&&!pod)
                  {
                    console.log('21')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?lastName=${data.lname}
                   &email=${data.email}`)  
                  }
                  else if(!fn&&ln&&!emal&&pass&&!pod)
                  {
                    console.log('22')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?lastName=${data.lname}
                   &password=${data.password}`)  
                  }
                  else if(!fn&&!ln&&emal&&pass&&!pod)
                  {
                    console.log('23')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?email=${data.email}
                   &password=${data.password}`)  
                  }
                  if(sd&&slar&&rl){
                    console.log('e1')
                    axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${data.username}/?startingDate=${data.startdate}&salary=${data.salary}&role=${data.role}`)
                  }
                  if(sd&&!slar&&!rl){
                    console.log('e2')
                    axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${data.username}/?startingDate=${data.startdate}`)
                  }
                  if(sd&&slar&&!rl){
                    console.log('e3')
                    axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${data.username}/?startingDate=${data.startdate}&salary=${data.salary}`)
                  }
                  if(!sd&&slar&&!rl){
                    console.log('e4')
                    axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${data.username}/?salary=${data.salary}`)
                  }
                  if(!sd&&slar&&rl){
                    console.log('e5')
                    axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${data.username}/?salary=${data.salary}&role=${data.role}`)
                  }
                  if(!sd&&!slar&&rl){
                    console.log('e6')
                    axios.put(`http://localhost:8080/api/v1/employee/updateByUserName/${data.username}/?role=${data.role}`)
                  }
                

                   


                   fn=false;
                   ln=false;
                   emal=false;
                   pod=false;
                   pass=false;
                   sd=false;
                   slar=false;
                   rl=false;

              
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
  axios.delete(`http://localhost:8080/api/v1/employee/deleteEmployeeByUserName/${data.username}`
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
      department:""
  
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
        <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
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
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">department</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.department} id="department" required  type="text" className="form-control"/>
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
