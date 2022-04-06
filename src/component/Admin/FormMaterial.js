import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function FormMaterial() {
  const url='http://localhost:8080/api/v1/employee/addEmployee/1';
  const [data,setData]=useState({
    property:"",
    avalipility:"",
    photo:"",
    count:"",
    store:""   
  })
  const [warehouse,setWarehouse]=useState({
    warehouse:[],
      
  })
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/wareHouse`).then(
      (res)=>
      setWarehouse({
        warehouse:res.data
      })
    )
}, []);
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
   axios.post(`http://localhost:8080/api/v1/material/addMaterial/${data.store}`,{
    
      availability: data.avalipility,
      description: data.property,
      count: data.count,
      image: data.photo
   }).then(res=>{
     if(res.status===200)
   {
    setData({
      property:"",
      avalipility:"",
      photo:"",
      count:"",
      store:""   
  
    });
  }
   })

   
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
    <div>


<section id="form_material">
  <main style={{
height: "600px",
backgroundSize: "cover",
backgroundRepeat: "no-repeat", 
zIndex: "1", 
marginTop: "0px",
color:"beige"}} id="main" className="main">

  <div  className="pagetitle">
    <h1>Materials</h1>
    <nav>
      <ol className="breadcrumb">
      <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
        <li className="breadcrumb-item">Forms</li>
        <li className="breadcrumb-item ">Material</li>
      </ol>
    </nav>
  </div>
  {/* <!-- End Page Title --> */}

  <section  className="section">
    <div className="row">
      <div style={{width: "90%", display:" flex", justifyContent: "center",background: "none "}} >

        <div style={{width:"62%"}} >
          <div className="card-body">

            {/* <!-- General Form Elements --> */}
            <form>
              
              <div style={{marginTop: "-50px"}} className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">Count</label>
                <div className="col-sm-9">
                  <input  onChange={(e)=>handle(e)} value={data.count} id="count" required type="text" className="form-control"/>
                </div>
              </div>
              <div style={{marginTop: "20px"}} className="row mb-3">
                <label for="inputText" className="col-sm-3 col-form-label">avalipility</label>
                <div  className="col-sm-9">
                  <input  onChange={(e)=>handle(e)} value={data.avalipility} id="avalipility" required type="text" className="form-control"/>
                </div>
              </div>
              
              
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label"> product photo</label>
                <div className="col-sm-9">
                  <input  onChange={(e)=>handle(e)}  id="photo" required type="file" className="subtask-hide col-xs-10"/>
                </div>
              </div>
             
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">property</label>
                <div className="col-sm-9">
                  <input  onChange={(e)=>handle(e)} value={data.property} id="property"  type="text" className="form-control"/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">wareHouse</label>
                <div className="col-sm-9">
                  <select onChange={(e)=>handle(e)} value={data.store} id="store" >
                  <option value="">None</option>
                  { warehouse.warehouse.map(ware => (
  <option key={ware.department.name} value={ware.department.name}>
    {ware.department.name}
  </option>
))} 
                  </select>
                </div>
              </div>
      
              

             
              
              <div style={{marginTop: "100px"}} className="row mb-3">
                <div  className="col-sm-10">
                  <button onClick={(e)=>submit(e)} id="btn1" style={{marginRight: "30px", marginLeft: "60px"}} type="submit" className="btn btn-primary">ADD</button>
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

export default FormMaterial
