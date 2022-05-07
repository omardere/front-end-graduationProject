import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 


function FormStore() {
  const [data,setData]=useState({
    name:"",
    email:"",
    fax:"",
    phone:"",
    capacity:""
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
   axios.post(`http://localhost:8080/api/v1/wareHouse/add`,{
  
    capacity:data.capacity,
    department:{
    phone:data.phone,
    fax:data.fax,
    email:data.email,
    name:data.name
    }
   },{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
    }}).then(res=>{
     if(res.status===200)
   {
    setData({
      name:"",
      phone:"",
      email:"",
      fax:"",  
      capacity:""   
    });
  }
   })

   
  }
  else if(e.target.id==="btn2")
  {    
         if(data.email===""){
           data.email=null;
          }
           if(data.fax===""){
            data.fax=null;
           }
            if(data.phone===""){
              data.phone=null;
              }
              if(data.capacity===""){
                data.capacity=null;
                }
            axios.put(`http://localhost:8080/api/v1/wareHouse/update/${data.name}?capacity=${data.capacity}`,null,{
              headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}` 
              }})  
            axios.put(`http://localhost:8080/api/v1/department/update/${data.name}?email=${data.email}&fax=${data.fax}&phone=${data.phone}`,null,{
              headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}` 
              }})  
      setData({
        name:"",
        phone:"",
        email:"",
        fax:"", 
        capacity:""      
      });
     
  
     
  }
  else if(e.target.id==="btn3")  
  {
    axios.delete(`http://localhost:8080/api/v1/wareHouse/deleteByName/${data.name}`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }}
    ).then(res=>{
       if(res.status===200)
     {
      setData({
          name:"",
          phone:"",
          email:"",
          fax:"",    
          capacity:""   
      });
    }
     })
    }
  
}
  return (
    <div>
      
<section id="form_store">
  <main style={{
  backgroundSize: "cover",
  marginTop: "0px",
  backgroundRepeat: "no-repeat", 
  zIndex:"1", 
  color:"beige"}} id="main" className="main">

  <div  className="pagetitle">
    <h1>Store</h1>
    <nav>
      <ol className="breadcrumb">
      <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
        <li className="breadcrumb-item">Forms</li>
        <li className="breadcrumb-item ">Store</li>
      </ol>
    </nav>
  </div>
  {/* <!-- End Page Title --> */}

  <section  className="section">
    <div className="row">
      <div style={{width: "90%", display: "flex", justifyContent: "center",background: "none "}} >

        <div style={{width: "62%"}} >
          <div className="card-body">

            {/* <!-- General Form Elements --> */}
            <form >
             
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
             
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">capacity</label>
                <div className="col-sm-9">
                  <input onChange={(e)=>handle(e)} value={data.capacity} id="capacity" required type="text" className="form-control"/>
                </div>
              </div>
              
             
              
              <div style={{marginTop: "50px"}} className="row mb-3">
                <div  className="col-sm-10">
                  <button onClick={(e)=>submit(e)} id="btn1" style={{marginRight: "30px", marginLeft: "60px"}} type="submit" className="btn btn-primary">ADD</button>
                  <button onClick={(e)=>submit(e)} id="btn2" style={{marginRight: "30px"}} type="submit" className="btn btn-primary">Update</button>
                  <button  onClick={(e)=>submit(e)} id="btn3" type="submit" className="btn btn-primary">Delete</button>

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

export default FormStore
