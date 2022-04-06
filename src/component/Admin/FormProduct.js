import React from 'react'
import { NavLink } from 'react-router-dom'

function FormProduct() {
  return (
    <div>
      
<section id="form_product">
  <main style={{
height: "600px",
backgroundSize: "cover",
backgroundRepeat: "no-repeat", 
marginTop: "0px",
color:"beige"}} id="main" className="main">

  <div  className="pagetitle">
    <h1>Products</h1>
    <nav>
      <ol className="breadcrumb">
      <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
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
            <form>
              <div style={{marginTop: "-50px"}}  className="row mb-3">
                <label for="inputText"  className="col-sm-3 col-form-label">Dimension</label>
                <div  className="col-sm-9">
                  <input placeholder="height*width"  type="text" required className="form-control"/>
                </div>
              </div>
              <div  className="row mb-3">
                <label for="inputText" className="col-sm-3 col-form-label">Time to end</label>
                <div  className="col-sm-9">
                  <input required type="text" className="form-control"/>
                </div>
              </div>
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">production step</label>
                <div className="col-sm-9">
                  <input required type="text" className="form-control"/>
                </div>
              </div>
              <div style={{marginTop: "20px"}} className="row mb-3">
                <label for="inputText" className="col-sm-3 col-form-label">Color</label>
                <div  className="col-sm-9">
                  <input required type="color" className="form-control"/>
                </div>
              </div>
              
              
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label"> product photo</label>
                <div className="col-sm-9">
                  <input required type="file" className="subtask-hide col-xs-10"/>
                </div>
              </div>
             
             
              <div className="row mb-3">
                <label for="inputDate" className="col-sm-3 col-form-label">Description</label>
                <div className="col-sm-9">
                  <input  type="text" className="form-control"/>
                </div>
              </div>
              
              
              <div className="row mb-3">
                <div  className="col-sm-10">
                  <button style={{marginRight: "30px", marginLeft: "60px"}} type="submit" className="btn btn-primary">ADD</button>
                  <button style={{marginRight: "30px"}} type="submit" className="btn btn-primary">Update</button>
                  <button  type="submit" className="btn btn-primary">Delete</button>

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
