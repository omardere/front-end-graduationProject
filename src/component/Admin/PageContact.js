import React from 'react'
import { NavLink } from 'react-router-dom'

function PageContact() {
  return (
    <div>
      
<section id="page_contact">
  <main style={{
  height: "600px",
  marginTop: "0px"}}
 id="main" className="main">

    <section  id="contact" className="contact">
      <div  className="container" data-aos="fade-up">

        <div   className="pagetitle">
          <h1>Contact</h1>
          <nav>
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
              <li className="breadcrumb-item">Page</li>
              <li className="breadcrumb-item">Contact</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}


       
        <div  className="row mt-5">

          <div  className="col-lg-4">
            <div style={{backgroundColor: "rgb(99, 82, 82)"}} className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Rafedia street, Nablus</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>0592289271</p>
              </div>

            </div>

          </div>

          <div   className="col-lg-8 mt-5 mt-lg-0">
           
            <form style={{backgroundColor: "rgb(99, 82, 82)"}} action="forms/contact.php" method="post" className="php-email-form">
              <div  className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div  className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}


  </main>
  {/* <!-- End #!main --> */}

  {/* <!-- ======= Footer ======= --> */}
  
  <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

</section>
    </div>
  )
}

export default PageContact
