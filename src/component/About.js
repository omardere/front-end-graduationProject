import React from 'react'

function About() {
  return (
    <div style={{marginTop:"50px",backgroundColor:"white"}}>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpeg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>Smart Learning Factory </h3>
            <p className="fst-italic">
              Smart Learning Factory Help us get inspired by using physical and virtual simulations to develop a factory design, to get the most productivity possible in less time.
            </p>
           
            <p>
              This intelligent learning factory uses Lego parts to produce and assemble new products, which aims to simulate the situation in real life. The inspection and quality system for these products has been replaced from a traditional system to an intelligent system that uses cameras to early detect anomalies of the final product to improve quality and identify Defect times for parts and products and make adjustments to processing or assembly time to increase productivity.
            </p>
          </div>
        </div>

      </div>
    </section>
    
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
     
        <div className="row">
          <div className="image col-lg-6" style={{ backgroundImage: 'url("assets/img/about1.jpeg")' }} data-aos="fade-right"></div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
              <i className="bi bi-brightness-high"></i>
              <h4>Flexible </h4>
              <p>easy to control and easy to shape</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-cube-alt"></i>
              <h4>efficiency</h4>
              <p>Save effort, time and cost</p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bi bi-check2-all"></i>
              <h4>unique</h4>
              <p>Designing new products in shapes and colors according to the customer's desire </p>
            </div>
            <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i className="bx bx-shield"></i>
              <h4>Specific</h4>
              <p>Identify potential problems and develop appropriate solutions</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
  );
}

export default About
