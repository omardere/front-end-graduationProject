import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'react-bootstrap';
function Detection() {
    const [product,setProduct]=useState({
        product:[],     
      })
      const [data,setData]=useState({
     
        prod:"",
         
      })
      useEffect(() => {
      axios.get(`http://localhost:8080/api/v1/quality`,{headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}` 
      }}).then(
              (res)=>{
              setProduct({
                product:res.data
              })
             
            }
            )
    
        }, []);
        console.log(product.product)
        function handle(e){
            const newdata={...data}
            newdata[e.target.id]=e.target.value;
            if(e.target.id==="photo"){
              newdata[e.target.id]=e.target.files[0].name;
             }
            setData(newdata);
            console.log(newdata);
          }
          function submit(e){
            e.preventDefault();
            axios.put(`http://localhost:8080/api/v1/quality/activate/${data.prod}`,null,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
    }}).then(res=>{
     if(res.status===200)
   {
 
   
      alert("OK")
    
  }
})
         }

          
  return (
    <div style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", 
        marginLeft:"300px",
        marginTop: "0px",
       }}>
         <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                  product.product.map(
                      p=>{
                        var sr="assets/img/"+ p.photo;
                        
                        return(
                            <div className="col mb-5">
                            <div className="card h-100">
                                {/* <!-- Product image--> */}
                                <img className="card-img-top" src={sr} width="450" height="250" alt="..." />
                                {/* <!-- Product details--> */}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 className="fw-bolder">Special Item</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                      
                                        {p.id}
                                        
                                      </div>
                                </div>
                                {/* <!-- Product actions--> */}  
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div  className="text-center"><input style={{marginBottom:"20px"}} className="form-check-input" onChange={(e)=>handle(e)} type="radio" required name="gridRadios" id="prod" value={p.id} /></div>
                                </div>
   
                               
                            </div>
                        </div>
                        )
  
                      }
                  )
              }
               
                
               
            </div>
            <div className="text-center"><Button onClick={(e)=>submit(e)} className="btn btn-outline-dark mt-auto" >Detect</Button></div>
        </div>
    </section>
    </div>
  )
}

export default Detection
