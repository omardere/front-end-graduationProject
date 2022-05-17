import React from 'react'

function Team() {
  return (
    <div style={{marginTop:"50px",backgroundColor:"white"}}>
      <section id="team" className="team">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div  id="sp1" className="member-img">
                <img style={{height :" 262px"}}   src="assets/img/team/team-1.jpg " className="img-fluid" alt=""/>
                <div className="social">
                  <a href="#!"><i className="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/ibraheem.arda.3"><i className="bi bi-facebook"></i></a>
                  <a href="#!"><i className="bi bi-instagram"></i></a>
                  <a href="#!"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Ibraheem Arda</h4>
                <span>Computer Engineer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href="#!"><i className="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100006446950656"><i className="bi bi-facebook"></i></a>
                  <a href="#!"><i className="bi bi-instagram"></i></a>
                  <a href="#!"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Omar Dere</h4>
                <span>Computer Engineer </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href="#!"><i className="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/masa.belbisi.3"><i className="bi bi-facebook"></i></a>
                  <a href="#!"><i className="bi bi-instagram"></i></a>
                  <a href="#!"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Masa Belbisi</h4>
                <span>Industrial Engineer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div style={{width:"100%"}} className="member" data-aos="fade-up" data-aos-delay="400">
              <div   className="member-img">
                <img style={{width:"100%",height:"260px"}} src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href="#!"><i className="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100012984550496"><i className="bi bi-facebook"></i></a>
                  <a href="#!"><i className="bi bi-instagram"></i></a>
                  <a href="#!"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Raya alhendi</h4>
                <span> Industrial Engineer</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Team
