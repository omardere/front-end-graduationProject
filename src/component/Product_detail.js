import React from 'react'

function Product_detail() {
  return (
    <div style={{marginTop:"90px",backgroundColor:"white"}}>
       {/* <!-- ======= Breadcrumbs ======= --> */}
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Product Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Product Details</li>
          </ol>
        </div>

      </div>
    </section>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= Portfolio Details Section ======= --> */}
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
             <div className="swiper-slide">
                  <img src="assets/img/product/prod1.jpeg" alt=""/>
             </div>                             
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Product information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Product date</strong>: 01 March, 2020</li>
                <li><strong>Price</strong>20$</li>
              </ul>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#!">Add to card</a></div>
            </div>
            </div>
            
            
            </div> 
          </div>

        </div>

    </section>
    </div>
  )
}

export default Product_detail
