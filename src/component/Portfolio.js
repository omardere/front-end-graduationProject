import React from 'react'

function Portfolio() {
  return (
    <div style={{marginTop:"50px",backgroundColor:"white"}}>
      <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/product/prod1.jpeg" className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/product/prod2.jpeg" className="img-fluid" alt=""/>
             
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/product/prod3.jpeg" className="img-fluid" alt=""/>
              
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/product/prod4.jpeg" className="img-fluid" alt=""/>
             
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/product/prod5.jpeg" className="img-fluid" alt=""/>
             
              </div>
            </div>
          </div>

          


        </div>

    </section>
    </div>
  )
}

export default Portfolio
