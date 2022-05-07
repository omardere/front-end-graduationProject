import React,{useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

import axios from 'axios' 

function FormProduct() {
  const [data,setData]=useState({
    estimatedTime:"",
    description:"",
    height:"",
    width:"",
    photo:""  ,
    percent:"",
    store:"",
    quantity:""
  })
  const history = useNavigate();
    
    
  const [warehouse,setWarehouse]=useState({
    warehouse:[],
      
  })
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/wareHouse`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }}).then(
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
   axios.post(`http://localhost:8080/api/v1/product/addProduct/${data.store}`,{
    
    estimatedTime:data.estimatedTime,
    description:data.description,
    height:data.height,
    width:data.width,
    photo:data.photo ,
    percent:data.percent,
    quantity:data.quantity
   },{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
    }}).then(res=>{
     if(res.status===200)
   {
    setData({
      estimatedTime:"",
      description:"",
      height:"",
      width:"",
      photo:""  ,
      percent:"",
      store:"",
      quantity:""
  
    });
history('/NP');   

  }
   })

   
  }
 
  

  return (
    <div>
      
<section id="form_product">
  <main style={{
backgroundSize: "cover",
backgroundRepeat: "no-repeat", 
marginTop: "0px",
color:"beige"}} id="main" className="main">

  <div  className="pagetitle">
    <h1>Products</h1>
    <nav>
      <ol className="breadcrumb">
      <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
        <li className="breadcrumb-item">Forms</li>
        <li className="breadcrumb-item ">Product</li>
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
            <form onSubmit={(e)=>submit(e)}>
              <div style={{marginTop: "-50px"}}  className="row mb-3">
                <label for="inputText"  className="col-sm-3 col-form-label">height</label>
                <div  className="col-sm-9">
                  <input   onChange={(e)=>handle(e)} value={data.height} id="height"  type="text" required className="form-control"/>
                </div>
              </div>
              <div   className="row mb-3">
                <label for="inputText"  className="col-sm-3 col-form-label">width</label>
                <div  className="col-sm-9">
                  <input   onChange={(e)=>handle(e)} value={data.width} id="width" type="text" required className="form-control"/>
                </div>
              </div>
              <div  className="row mb-3">
                <label for="inputText" className="col-sm-3 col-form-label">Time to end</label>
                <div  className="col-sm-9">
                  <input  onChange={(e)=>handle(e)} value={data.estimatedTime} id="estimatedTime" required type="text" className="form-control"/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label"> percent</label>
                <div className="col-sm-9">
                  <input onChange={(e)=>handle(e)} value={data.percent} id="percent" required type="text" className="form-control"/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label"> Quantity</label>
                <div className="col-sm-9">
                  <input onChange={(e)=>handle(e)} value={data.quantity} id="quantity" required type="text" className="form-control"/>
                </div>
              </div>
         
              
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label"> product photo</label>
                <div className="col-sm-9">
                  <input onChange={(e)=>handle(e)}  id="photo" required type="file" className="subtask-hide col-xs-10"/>
                </div>
              </div>
              
             
             
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">Description</label>
                <div className="col-sm-9">
                  <input onChange={(e)=>handle(e)} value={data.description} id="description" type="text" className="form-control"/>
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
              
              <div className="row mb-3">
                <div  className="col-sm-10">
                  <button style={{marginRight: "60px", marginLeft: "200px"}} type="submit" className="btn btn-primary">Next</button>
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

export default FormProduct
