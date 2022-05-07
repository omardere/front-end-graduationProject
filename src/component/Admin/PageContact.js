import React, { useRef, useState } from 'react';
import firebase from './firebase';
import 'firebase/firestore';
import 'firebase/auth';
import './pageContact.css';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function PageContact() {
  const [user] = useAuthState(auth);
  return (
    <section id="page_contact">
       <main style={{
       height: "600px", 
      textAlign: "center",
       margin: "0 auto",
       backgroundColor:"#282c34",
       overflowY:"scroll",

      }}
      id="main" className="main">
      <header style={{backgroundColor: "#181717",
  height: "10vh",
  position:"fixed",
  minHeight: "50px",
  color: "white",
  //position: "fixed",
  //position:"fixed",
  top:"80px",
  left:"0px",
 // top:"0px",
 width: "100%",
  marginTop: "-20px",
  marginLeft: "30px",
 alignItems: "center",
 justifyContent: "space-between",
 zIndex: "99",
  padding: "10px",
  boxSizing: "border-box"
}}>
        <span style={{marginRight:"-150px",fontSize:"20px"}}>🔥💬 Welcome in chat to contact us 🔥💬</span>
      </header>

      <section style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        marginRight:"-30px",
        backgroundColor: "rgb(40, 37, 53)"
      }}>
        {<ChatRoom /> }
      </section>

    </main>
    </section>
  );
}








function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('mesg2');
  const query = messagesRef.orderBy('createdAt').limit(50);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const  uid = localStorage.getItem("username");
    console.log(uid)
    await messagesRef.add({
      msg: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: localStorage.getItem("name"),
      uid,
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main style={{
       padding: "10px",
      // height: "80vh",
       margin: "10vh 0 10vh",
       display: "flex",
       flexDirection: "column",
    }}>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form style={{height: "10vh",
 position: "fixed",
  bottom: "0",
 backgroundColor: "rgb(24, 23, 23)",
 width: "100%",
 // maxWidth: "728px",
display: "inline",
  fontSize: "1.5rem"
  }} onSubmit={sendMessage}>

      <input style={{
        lineHeight:" 1.5",
        width: "65%",
        marginLeft:"269px",
        fontSize: "1.5rem",
        background: "rgb(58, 58, 58)",
        color: "white",
        outline: "none",
        border: "none",
        padding: "0 10px"
      }} value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button style={{
         width: "10%",
         
         backgroundColor: "rgb(56, 56, 143)"
      }} type="submit" className='bi bi-send-fill' disabled={!formValue}></button>
      {/* 🕊️ */}

    </form>
  </>)
}


function ChatMessage(props) {
  const { name,msg, uid  } = props.message;

  const messageClass = uid === localStorage.getItem("username") ? 'sent' : 'received';
if(messageClass=='sent')
  return (<>
    <div style={{
     // display: "flex",
     // alignItems: "center"
     //marginRight:"600px"
    }} className={`message ${messageClass}`}>
     
      <p style={{
    //  maxWidth: "500px",
        marginBottom: "12px",
      
        lineHeight: "24px",
        backgroundColor:"blue",
        marginLeft:"280px",
        padding: "10px 20px",
        borderRadius: "25px",
        position: "relative",
        color: "white",
        textAlign: "left",
        width:"70%"
      }}>{name}:{msg}</p>
    </div>
  </>)
  else
  return (<>
    <div style={{
     // display: "flex",
     // alignItems: "center"
     //marginRight:"600px"
    }} className={`message ${messageClass}`}>
     
      <p style={{
    //  maxWidth: "500px",
        marginBottom: "12px",
      
        lineHeight: "24px",
        backgroundColor:"#3c3c5c",
        marginLeft:"280px",
        padding: "10px 20px",
        borderRadius: "25px",
        position: "relative",
        color: "white",
        textAlign: "left",
        width:"70%"
      }}>{name}:{msg}</p>
    </div>
  </>)
}


// import { NavLink } from 'react-router-dom'

// function PageContact() {
//   return (
//     <div>
      
// <section id="page_contact">
//   <main style={{
//   height: "600px",
//   marginTop: "0px"}}
//  id="main" className="main">

//     <section  id="contact" className="contact">
//       <div  className="container" data-aos="fade-up">

//         <div   className="pagetitle">
//           <h1>Contact</h1>
//           <nav>
//             <ol className="breadcrumb">
//             <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
//               <li className="breadcrumb-item">Page</li>
//               <li className="breadcrumb-item">Contact</li>
//             </ol>
//           </nav>
//         </div>
//         {/* <!-- End Page Title --> */}


       
//         <div  className="row mt-5">

//           <div  className="col-lg-4">
//             <div style={{backgroundColor: "rgb(99, 82, 82)"}} className="info">
//               <div className="address">
//                 <i className="bi bi-geo-alt"></i>
//                 <h4>Location:</h4>
//                 <p>Rafedia street, Nablus</p>
//               </div>

//               <div className="email">
//                 <i className="bi bi-envelope"></i>
//                 <h4>Email:</h4>
//                 <p>info@example.com</p>
//               </div>

//               <div className="phone">
//                 <i className="bi bi-phone"></i>
//                 <h4>Call:</h4>
//                 <p>0592289271</p>
//               </div>

//             </div>

//           </div>

//           <div   className="col-lg-8 mt-5 mt-lg-0">
           
//             <form style={{backgroundColor: "rgb(99, 82, 82)"}} action="forms/contact.php" method="post" className="php-email-form">
//               <div  className="row">
//                 <div className="col-md-6 form-group">
//                   <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
//                 </div>
//                 <div className="col-md-6 form-group mt-3 mt-md-0">
//                   <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
//                 </div>
//               </div>
//               <div  className="form-group mt-3">
//                 <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
//               </div>
//               <div className="form-group mt-3">
//                 <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
//               </div>
//               <div className="my-3">
//                 <div className="loading">Loading</div>
//                 <div className="error-message"></div>
//                 <div className="sent-message">Your message has been sent. Thank you!</div>
//               </div>
//               <div className="text-center"><button type="submit">Send Message</button></div>
//             </form>

//           </div>

//         </div>

//       </div>
//     </section>
//     {/* <!-- End Contact Section --> */}


//   </main>
//   {/* <!-- End #!main --> */}

//   {/* <!-- ======= Footer ======= --> */}
  
//   <a href="#!" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

// </section>
//     </div>
//   )
// }

export default PageContact
