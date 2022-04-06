import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 
function FormSublayer() {
const url='http://localhost:8080/api/v1/supplier/addSupplier';
  const [data,setData]=useState({
    name:"",
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    bod:"",
    address:"",
    type:"",
    fax:"",
    method:"",
    phone:"",
    postal:"",      
  })
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function submit(e){
   e.preventDefault();
    console.log(e.target.id);
    if(e.target.id==="btn1")
    {
     
   axios.post(url,{
    
    address:data.address,
    postalCode:data.postal,
    fax:data.fax,
    paymentMethode:data.method,
    discountType:data.type,
    phoneNumber:data.phone,
    user: {
      firstName: data.fname,
      lastName: data.lname,
      userName: data.username,
      email: data.email,
      dop: data.bod,
      password: data.password
  },
  companyName:data.name
   }).then(res=>{
    console.log(res.status)
     if(res.status===200)
   {
    setData({
      name:"",
      address:"",
      type:"",
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      bod:"",
      fax:"",
      method:"",
      phone:"",
      postal:"",
      
    });
  }
   })

   
  }
  else if(e.target.id==="btn2")
  {
    var fn=false,ln=false,emal=false,pod=false,pass=false,n=false,ad=false,t=false,f=false,m=false,ph=false,p=false;
    

    if(data.fname!==""){
      fn=true;
   
    }
     if(data.lname!==""){
       ln=true;
      }
       if(data.bod!==""){
         pod=true;
        }
         if(data.email!==""){
           emal=true;
          }
           if(data.password!==""){
             pass=true;
           }
            if(data.method!==""){
              m=true;
              }
              if(data.phone!==""){
                ph=true;
            
                }
                if(data.postal!==""){
                  p=true;
                 
                  }
                  if(data.name!==""){
                    n=true;
                   
                    }
                    if(data.address!==""){
                      ad=true;                   
                      }
                      if(data.type!==""){
                       t=true;
                       
                        }
                        if(data.fax!==""){
                          f=true;
                         
                          }
                  if(m&&t&&f&&ph&&ad&&n&&p)
                  {       
                    console.log('1')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &paymentMethode=${data.method}&postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}&companyName=${data.name}&discountType=${data.type}`)  
                  }
                  else if(m&&!t&&!f&&!ph&&!ad&&!n&&!p)
                  {       
                    console.log('2')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?paymentMethode=${data.method}`)  
                  }
                 else if(!m&&t&&!f&&!ph&&!ad&&!n&&!p)
                 {       
                   console.log('3')
                   axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?
                   discountType=${data.type}`)  
                 }
                 else if(!m&&!t&&f&&!ph&&!ad&&!n&&!p)
                 {       
                   console.log('4')
                   axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?fax=${data.fax}`)  
                 }
                else  if(!m&&!t&&!f&&ph&&!ad&&!n&&!p)
                {       
                  console.log('5')
                  axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?phoneNumber=${data.phone}`)  
                }
                else  if(!m&&!t&&!f&&!ph&&ad&&!n&&!p)
                {       
                  console.log('6')
                  axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                  `)  
                }
                 else if(!m&&!t&&!f&&!ph&&!ad&&n&&!p)
                 {       
                   console.log('7')
                   axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?companyName=${data.name}`)  
                 }
                 else if(!m&&!t&&!f&&!ph&&!ad&&!n&&p)
                 {       
                   console.log('8')
                   axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?discountType=${data.type}`)  
                 }
                else  if(m&&t&&!f&&!ph&&!ad&&!n&&!p)
                {       
                  console.log('9')
                  axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?
                  &paymentMethode=${data.method}&discountType=${data.type}`)  
                }
                else  if(m&&t&&!f&&!ph&&!ad&&n&&!p)
                {       
                  console.log('10')
                  axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?
                  &paymentMethode=${data.method}&companyName=${data.name}&discountType=${data.type}`)  
                }
                 else if(!m&&!t&&f&&ph&&ad&&!n&&p)
                 {       
                   console.log('11')
                   axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                   &postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}`)  
                 }
                  else if(!m&&t&&!f&&!ph&&ad&&n&&!p)
                  {       
                    console.log('12')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &companyName=${data.name}&discountType=${data.type}`)  
                  }
                  else if(m&&!t&&f&&ph&&ad&&n&&p)
                  {       
                    console.log('13')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &paymentMethode=${data.method}&postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}&companyName=${data.name}`)  
                  }
                  else if(!m&&t&&f&&ph&&ad&&n&&p)
                  {       
                    console.log('14')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}&companyName=${data.name}&discountType=${data.type}`)  
                  }
                  else if(m&&t&&!f&&ph&&ad&&n&&p)
                  {       
                    console.log('15')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &paymentMethode=${data.method}&postalCode=${data.postal}&phoneNumber=${data.phone}&companyName=${data.name}&discountType=${data.type}`)  
                  }
                  else if(m&&t&&f&&!ph&&ad&&n&&p)
                  {       
                    console.log('16')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &paymentMethode=${data.method}&postalCode=${data.postal}&fax=${data.fax}&companyName=${data.name}&discountType=${data.type}`)  
                  }
                  else if(m&&t&&f&&ph&&!ad&&n&&p)
                  {       
                    console.log('17')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?
                    &paymentMethode=${data.method}&postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}&companyName=${data.name}&discountType=${data.type}`)  
                  }
                  else if(m&&t&&f&&ph&&ad&&!n&&p)
                  {       
                    console.log('18')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &paymentMethode=${data.method}&postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}&discountType=${data.type}`)  
                  }
                  else if(m&&t&&f&&ph&&ad&&n&&!p)
                  {       
                    console.log('19')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &paymentMethode=${data.method}&fax=${data.fax}&phoneNumber=${data.phone}&companyName=${data.name}&discountType=${data.type}`)  
                  }
                  else if(m&&!t&&f&&ph&&ad&&!n&&p)
                  {       
                    console.log('20')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &paymentMethode=${data.method}&postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}`)  
                  }
                  else if(!m&&!t&&f&&ph&&ad&&n&&p)
                  {       
                    console.log('21')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                    &postalCode=${data.postal}&fax=${data.fax}&phoneNumber=${data.phone}&companyName=${data.name}`)  
                  }
                  else if(!m&&!t&&!f&&ph&&ad&&n&&p)
                  {       
                    console.log('22')
                    axios.put(`http://localhost:8080/api/v1/supplier/updateByUserName/${data.username}?address=${data.address}
                   &postalCode=${data.postal}&phoneNumber=${data.phone}&companyName=${data.name}`)  
                  }
                  if(fn&&ln&&emal&&pass&&pod)
                  {
                    console.log('1')
                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                  else if(fn&&ln&&emal&&pass&&!pod)
                  {
                    console.log('2')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}&password=${data.password}`)  
                  }
                 else if(fn&&ln&&emal&&!pass&&pod)
                  {
                    console.log('3')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}&dop=${data.bod}`)  
                  }
                 else if(fn&&ln&&!emal&&pass&&pod)
                  {
                    console.log('4')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&dop=${data.bod}&password=${data.password}`)  
                  }
                else  if(fn&&!ln&&emal&&pass&&pod)
                  {
                    console.log('5')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                else  if(!fn&&ln&&emal&&pass&&pod)
                  {
                    console.log('6')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?lastName=${data.lname}
                    &email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                 else if(!fn&&!ln&&emal&&pass&&pod)
                  {
                    console.log('7')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?email=${data.email}&dop=${data.bod}&password=${data.password}`)  
                  }
                 else if(!fn&&!ln&&!emal&&pass&&pod)
                  {
                    console.log('8')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?dop=${data.bod}&password=${data.password}`)  
                  }
                else  if(!fn&&!ln&&!emal&&!pass&&pod)
                  {
                    console.log('9')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?dop=${data.bod}`)  
                  }
                else  if(fn&&!ln&&!emal&&!pass&&!pod)
                  {
                    console.log('10')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    `)  
                  }
                 else if(fn&&ln&&!emal&&!pass&&!pod)
                  {
                    console.log('11')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}`)  
                  }
                  else if(fn&&ln&&emal&&!pass&&!pod)
                  {
                    console.log('13')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&email=${data.email}`)  
                  }
                  else if(fn&&ln&&!emal&&!pass&&pod)
                  {
                    console.log('14')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&pod=${data.bod}`)  
                  }
                  else if(fn&&ln&&!emal&&pass&&!pod)
                  {
                    console.log('15')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                    &lastName=${data.lname}&password=${data.password}`)  
                  }
                  else if(!fn&&ln&&!emal&&!pass&&!pod)
                  {
                    console.log('16')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?
                    lastName=${data.lname}`)  
                  }
                  else if(!fn&&!ln&&!emal&&pass&&!pod)
                  {
                    console.log('17')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?password=${data.password}`)  
                  }
                  else if(!fn&&ln&&emal&&!pass&&!pod)
                  {
                    console.log('18')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?email=${data.email}
                    `)  
                  }
                  else if(fn&&!ln&&!emal&&pass&&!pod)
                  {
                    console.log('19')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                   &password=${data.password}`)  
                  }
                  else if(fn&&!ln&&emal&&!pass&&!pod)
                  {
                    console.log('20')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?firstName=${data.fname}
                   &email=${data.email}`)  
                  }
                  else if(!fn&&ln&&emal&&!pass&&!pod)
                  {
                    console.log('21')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?lastName=${data.lname}
                   &email=${data.email}`)  
                  }
                  else if(!fn&&ln&&!emal&&pass&&!pod)
                  {
                    console.log('22')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?lastName=${data.lname}
                   &password=${data.password}`)  
                  }
                  else if(!fn&&!ln&&emal&&pass&&!pod)
                  {
                    console.log('23')

                    axios.put(`http://localhost:8080/api/v1/user/update/${data.username}/?email=${data.email}
                   &password=${data.password}`)  
                  }
                

                   


                   fn=false;
                   ln=false;
                   emal=false;
                   pod=false;
                   pass=false;
                   m=false;
                   t=false;
                   f=false;
                   ph=false;
                   ad=false;
                   n=false;
                   p=false;
                   

              
            setData({
              name:"",
              address:"",
              type:"",
              fname:"",
              lname:"",
              email:"",
              username:"",
              password:"",
              bod:"",
              fax:"",
              method:"",
              phone:"",
              postal:"",
            });  
            
  }
  else if(e.target.id==="btn3")  
{
  axios.delete(`http://localhost:8080/api/v1/supplier/deleteByUserName/${data.username}`
  ).then(res=>{
     if(res.status===200)
   {
    setData({
      name:"",
      address:"",
      type:"",
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      bod:"",
      fax:"",
      method:"",
      phone:"",
      postal:"",
      
    });
  }
   })
    
  
} 
  }



  return (
    <div>
      
<section  id="form_sublayer">
  <main style={{
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat", 
  marginTop: "0px",
  zIndex: "1",
  color:"beige"}} id="main" className="main">
  
    <div  className="pagetitle">
      <h1>Sublayers</h1>
      <nav>
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
          <li className="breadcrumb-item">Forms</li>
          <li className="breadcrumb-item ">Sublayer</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}
  
    <section  className="section">
      <div className="row">
        <div style={{width: "90%", display: "flex", justifyContent: "center",background: "none"}} >
  
          <div style={{width: "70%"}} >
            <div className="card-body">
  
              {/* <!-- General Form Elements --> */}
              <form>
              <div style={{marginTop: "-50px"}} className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">First Name</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.fname} id="fname" required  type="text" className="form-control"/>
                  </div>
                </div>
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">Last Name</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="lname" value={data.lname}  required type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" required className="form-control"/>
                  </div>
                </div>
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">UserName</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} value={data.username} id="username" required  type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="password" value={data.password} required type="password" className="form-control"/>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Dob</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="bod" value={data.bod} required  type="date" className="form-control"/>
                  </div>
                </div>
                  <div  className="row mb-3">
                    <label for="inputText" className="col-sm-3 col-form-label">Company Name</label>
                    <div  className="col-sm-9">
                      <input  onChange={(e)=>handle(e)} value={data.name} id="name" type="text" className="form-control"/>
                    </div>
                  </div>
                  <div  className="row mb-3">
                    <label for="inputText" className="col-sm-3 col-form-label">Adress</label>
                    <div  className="col-sm-9">
                      <input  type="text" onChange={(e)=>handle(e)} value={data.address} id="address" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-3 col-form-label">Current Order</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control"/>
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-3 col-form-label">fax</label>
                    <div className="col-sm-9">
                      <input type="text"  onChange={(e)=>handle(e)} value={data.fax} id="fax" className="form-control"/>
                    </div>
                  </div>
                  
                  
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">Payment Method</label>
                    <div className="col-sm-9">
                      <input type="text" onChange={(e)=>handle(e)} value={data.method} id="method" className="form-control"/>
                    </div>
                  </div>
                 
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">Postal Code</label>
                    <div className="col-sm-9">
                      <input type="text"  onChange={(e)=>handle(e)} value={data.postal} id="postal" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">discount type</label>
                    <div className="col-sm-9">
                      <input  onChange={(e)=>handle(e)} value={data.type} id="type" type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">Phone Number</label>
                    <div className="col-sm-9">
                      <input  onChange={(e)=>handle(e)} value={data.phone} id="phone" type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputDate" className="col-sm-3 col-form-label">Material Provider</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control"/>
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <div  className="col-sm-10">
                      <button onClick={(e)=>submit(e)} id="btn1" style={{marginRight: "30px", marginLeft:" 150px"}} type="submit" className="btn btn-primary">ADD</button>
                      <button onClick={(e)=>submit(e)} id="btn2" style={{marginRight:" 30px", }}type="submit" className="btn btn-primary">Update</button>
                      <button onClick={(e)=>submit(e)} id="btn3" type="submit" className="btn btn-primary">Delete</button>
  
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

export default FormSublayer
