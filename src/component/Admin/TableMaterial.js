import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function TableMaterial() {
  const [material,setMaterial]=useState({
    material:[],
      
  })
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/material`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }
    }).then(
      (res)=>
      setMaterial({
        material:res.data
      })
    )
  }, []);

  return (
    <div>
      
<section id="table_material">
  
  <main style={{ marginTop: "0px"}}
     id="main" className="main">
    <div  className="pagetitle">
        <h1>Materials</h1>
        <nav>
          <ol className="breadcrumb">
          <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item">Materials</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}
         
<section style={{color: "black"}} className="h-100 gradient-custom">
        <div style={{  marginTop: "-100px"}} className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              {
            material.material.map(m=>{
          var sr="assets/img/"+ m.image;
          return(
            <div>   
            <div  className="card-body">
                  {/* <!-- Single item --> */}
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* <!-- Image --> */}
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img width="100px" height="200px" src={sr}
                          className="w-100" alt="Blue Jeans Jacket" />
                        <a href="#i">
                          <div className="mask" style={{backgroundColor: "rgba(231, 12, 12, 0.2)"}}></div>
                        </a>
                      </div>
                      {/* <!-- Image --> */}
                    </div>
      
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* <!-- Data --> */}
                      <p><strong>id:{m.id}</strong></p>
                      <p>availability: {m.availability}</p>
                      <p>count: count</p>
                      <p>ware house: {m.wareHouse.department.name}</p>
                      {/* <!-- Data --> */}
                    </div>
      
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* <!-- Quantity --> */}
                     
                        <p><strong>Description</strong></p>
                        <p> {m.description}</p>
                      
                      {/* <!-- Quantity --> */}
      
                      
                    </div>
                  </div>
                  
              </div>
            
      </div>

        )
        })
      }
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


export default TableMaterial
