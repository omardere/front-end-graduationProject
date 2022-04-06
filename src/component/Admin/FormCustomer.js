import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios' 

function FormCustomer() {
  const [data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    bod:"",
    address:"",
    id:"",
    credit:"",
    phone:"" ,
    postal:""  
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
   axios.post(`http://localhost:8080/api/v1/customer/addCustomer`,{
    address:data.address,
    postalCode:data.postal,
    phoneNumber:data.phone,
    cardID:data.id,
    creditCard:data.credit,
      user:{ firstName:data.fname,
       lastName:data.lname,
       userName:data.username,
       email:data.email,
       dop:data.bod,
       password:data.password   
      }
   }).then(res=>{
     if(res.status===200)
   {
    setData({
      fname:"",
      lname:"",
      email:"",
      username:"",
      password:"",
      bod:"",
      address:"",
      id:"",
      credit:"",
      phone:"" ,
      postal:""  
      
    });
  }
   })

   
  }
  else if(e.target.id==="btn2")
  {
    var fn=false,ln=false,emal=false,pod=false,pass=false,cid=false,ad=false,c=false,ph=false,p=false;
    

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
            if(data.credit!==""){
              c=true;
              }
              if(data.phone!==""){
                ph=true;
            
                }
                if(data.postal!==""){
                  p=true;
                 
                  }
                  if(data.id!==""){
                    cid=true;
                   
                    }
                    if(data.address!==""){
                      ad=true;                   
                      }
                     
                  if(cid&&c&&ph&&ad&&p)
                  {       
                    console.log('1')
                    axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}&creditCard=${data.credit}&postalCode=${data.postal}&cardID=${data.id}&phoneNumber=${data.phone}`)  
                  }
                  else if(!cid&&c&&!ph&&!ad&&!p)
                  {       
                    console.log('2')
                    axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?
                    creditCard=${data.credit}`)  
                  }
                 else if(cid&&!c&&!ph&&!ad&&!p)
                 {       
                   console.log('3')
                   axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?
                   cardID=${data.id}`)  
                 }
                 else if(!cid&&!c&&ph&&!ad&&!p)
                 {       
                   console.log('1')
                   axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?
                   phoneNumber=${data.phone}`)  
                 }
                else  if(!cid&&!c&&!ph&&ad&&!p)
                {       
                  console.log('1')
                  axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}
                  `)  
                }
                else  if(!cid&&!c&&!ph&&!ad&&p)
                {       
                  console.log('1')
                  axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?
                  postalCode=${data.postal}`)  
                }
                 else if(!cid&&c&&ph&&ad&&p)
                 {       
                   console.log('1')
                   axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}
                   &creditCard=${data.credit}&postalCode=${data.postal}&phoneNumber=${data.phone}`)  
                 }
                 else if(cid&&!c&&ph&&ad&&p)
                 {       
                   console.log('1')
                   axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}
                   &postalCode=${data.postal}&cardID=${data.id}&phoneNumber=${data.phone}`)  
                 }
                else  if(cid&&c&&!ph&&ad&&p)
                {       
                  console.log('1')
                  axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}
                  &creditCard=${data.credit}&postalCode=${data.postal}&cardID=${data.id}`)  
                }
                else if(cid&&c&&ph&&!ad&&p)
                {       
                  console.log('1')
                  axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?
                  creditCard=${data.credit}&postalCode=${data.postal}&cardID=${data.id}&phoneNumber=${data.phone}`)  
                }
                 else if(cid&&c&&ph&&ad&&!p)
                 {       
                   console.log('1')
                   axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}
                   &creditCard=${data.credit}&cardID=${data.id}&phoneNumber=${data.phone}`)  
                 }
                 else if(cid&&c&&!ph&&!ad&&!p)
                 {       
                   console.log('1')
                   axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?creditCard=${data.credit}&cardID=${data.id}`)  
                 }
                 else if(!cid&&!c&&ph&&ad&&!p)
                 {       
                   console.log('1')
                   axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}
                  &phoneNumber=${data.phone}`)}
                   else if(!cid&&!c&&ph&&ad&&p)
                  {       
                    console.log('1')
                    axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}&postalCode=${data.postal}&phoneNumber=${data.phone}`)  
                  }
                   else if(cid&&c&&!ph&&ad&&!p)
                   {       
                     console.log('1')
                     axios.put(`http://localhost:8080/api/v1/customer/updateByUserName/${data.username}?address=${data.address}&creditCard=${data.credit}&cardID=${data.id}`)  
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
                   cid=false;
                   c=false;
                   ph=false;
                   ad=false;                   
                   p=false;
                   

              
            setData({
              fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    bod:"",
    address:"",
    id:"",
    credit:"",
    phone:"" ,
    postal:""  
            });  
            
  }
  else if(e.target.id==="btn3")  
{
  axios.delete(`http://localhost:8080/api/v1/customer/deleteByUserName/${data.username}`
  ).then(res=>{
     if(res.status===200)
   {
    setData({
      fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    bod:"",
    address:"",
    id:"",
    credit:"",
    phone:"" ,
    postal:""  
    });
  }
   })
    
  
} 
  }
  return (
    <div>
      
  <section id="form_custumer">
    <main style={{
  backgroundSize: "cover",
  marginTop: "0px",
  backgroundRepeat: "no-repeat", 
  zIndex:"1", 
  color:"beige"}} id="main" className="main">

    <div  className="pagetitle">
      <h1>Customers</h1>
      <nav>
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><NavLink to="/DachB">Home</NavLink></li>
          <li className="breadcrumb-item">Forms</li>
          <li className="breadcrumb-item ">Customers</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section  className="section">
      <div className="row">
        <div style={{width:" 90%", display:" flex", justifyContent: "center",background: "none "}} >

          <div style={{width: "62%"}} >
            <div className="card-body">

              {/* <!-- General Form Elements --> */}
              <form>
                <div style={{marginTop:" -50px"}} className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">First Name</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="fname" value={data.fname} type="text" className="form-control"/>
                  </div>
                </div>
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">Last Name</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="lname" value={data.lname} type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" className="form-control"/>
                  </div>
                </div>
                <div  className="row mb-3">
                  <label for="inputText" className="col-sm-3 col-form-label">UserName</label>
                  <div  className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="username" value={data.username} type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" className="form-control"/>
                  </div>
                </div>
                
                
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Dob</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="bod" value={data.bod} type="date" className="form-control"/>
                  </div>
                </div>
               
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Postal Code</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="postal" value={data.postal} type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Credit Card </label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="credit" value={data.credit} type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Credit Card ID</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">Phone Number</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="phone" value={data.phone} type="text" className="form-control"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputDate" className="col-sm-3 col-form-label">address</label>
                  <div className="col-sm-9">
                    <input onChange={(e)=>handle(e)} id="address" value={data.address} type="text" className="form-control"/>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div  className="col-sm-10">
                    <button onClick={(e)=>submit(e)} id="btn1" style={{marginRight:" 30px", marginLeft:" 60px"}} type="submit" className="btn btn-primary">ADD</button>
                    <button onClick={(e)=>submit(e)} id="btn2" style={{marginRight:" 30px"}} type="submit" className="btn btn-primary">Update</button>
                    <button  onClick={(e)=>submit(e)} id="btn3" type="submit" className="btn btn-primary">Delete</button>

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
  </section>
    </div>
  )
}

export default FormCustomer
