import React,{useState} from 'react'
import firebase from "firebase"
function Contact() {
  const [data,setData]=useState({
    name:"",
    email:"",
    subject:"",
    msg:"",
  })
  const db=firebase.firestore();
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  const uid=localStorage.getItem("username")
  const addDoc=(event)=>{
    event.preventDefault();
    db.collection("mesg2").add({
      name: data.name,
      email: data.email,
      subject:data.subject,
      msg:data.msg ,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      setData({name:"",
      email:"",
      subject:"",
      msg:"",})
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  

  }
  return (
    <div style={{marginTop:"50px",backgroundColor:"white"}}>
          <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        
        <div>
          <iframe style={{border:"0", width: "100%", height: "270px",visibility:"visible"}} title="contact"  src="https://maps.google.com/maps?q=an-najah&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
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

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form onSubmit={addDoc} method="post"  className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input style={{backgroundColor:"#ffc451"}} onChange={(e)=>handle(e)} value={data.name}  type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input style={{backgroundColor:"#ffc451"}} onChange={(e)=>handle(e)} value={data.email}  type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input style={{backgroundColor:"#ffc451"}} type="text" className="form-control" name="subject" onChange={(e)=>handle(e)} value={data.subject}  id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea style={{backgroundColor:"#ffc451"}} onChange={(e)=>handle(e)} value={data.msg} id="msg" className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
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
    </div>
  )
}

export default Contact
