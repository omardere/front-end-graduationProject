import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function TableMaterial() {
  
  return (
    <div>
      
<section id="table_material">
  
  <main style={{ marginTop: "0px"}}
     id="main" className="main">
    <div  className="pagetitle">
        <h1>Materials</h1>
        <nav>
          <ol className="breadcrumb">
          <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item">Materials</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}
    <section style={{color: "black"}} className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
                
            <div style={{  marginTop: "-100px  "}} className="card-body">
                  {/* <!-- Single item --> */}
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* <!-- Image --> */}
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                          className="w-100" alt="Blue Jeans Jacket" />
                        <a href="#i">
                          <div className="mask" style={{backgroundColor: "rgba(231, 12, 12, 0.2)"}}></div>
                        </a>
                      </div>
                      {/* <!-- Image --> */}
                    </div>
      
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* <!-- Data --> */}
                      <p><strong>id:1</strong></p>
                      <p>Count: 5</p>
                      <p>avelability: yes</p>
                      <p>Production Step: 3</p>
                      {/* <!-- Data --> */}
                    </div>
      
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* <!-- Quantity --> */}
                     
                        <p><strong>Property</strong></p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat ipsam iusto laboriosam excepturi libero, accusamus molestias praesentium err</p>
                      
                      {/* <!-- Quantity --> */}
      
                      
                    </div>
                  </div>
                  {/* <!-- Single item --> */}
      
                  <hr className="my-4" />
      {/* <!-- Single item --> */}
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          {/* <!-- Image --> */}
          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <img  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
              className="w-100" alt="Blue Jeans Jacket" />
            <a href="#i">
              <div className="mask" style={{backgroundColor: "rgba(231, 12, 12, 0.2)"}}></div>
            </a>
          </div>
          {/* <!-- Image --> */}
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          {/* <!-- Data --> */}
          <p><strong>id:1</strong></p>
          <p>Count: 5</p>
          <p>avelability: yes</p>
          <p>Production Step: 3</p>
          {/* <!-- Data --> */}
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          {/* <!-- Quantity --> */}
         
            <p><strong>Property</strong></p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat ipsam iusto laboriosam excepturi libero, accusamus molestias praesentium err</p>
          
          {/* <!-- Quantity --> */}

          
        </div>
      </div>
      {/* <!-- Single item --> */}

   
                  <hr className="my-4" />
                  {/* <!-- Single item --> */}
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* <!-- Image --> */}
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                          className="w-100" alt="Blue Jeans Jacket" />
                        <a href="#i">
                          <div className="mask" style={{backgroundColor: "rgba(231, 12, 12, 0.2)"}}></div>
                        </a>
                      </div>
                      {/* <!-- Image --> */}
                    </div>
      
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* <!-- Data --> */}
                      <p><strong>id:1</strong></p>
                      <p>Count: 5</p>
                      <p>avelability: yes</p>
                      <p>Production Step: 3</p>
                      {/* <!-- Data --> */}
                    </div>
      
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* <!-- Quantity --> */}
                     
                        <p><strong>Property</strong></p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores placeat ipsam iusto laboriosam excepturi libero, accusamus molestias praesentium err</p>
                      
                      {/* <!-- Quantity --> */}
      
                      
                    </div>
                  </div>
                  {/* <!-- Single item --> */}
      
                  
              
              
             
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

export default TableMaterial
