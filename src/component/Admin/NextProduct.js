import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'

import axios from 'axios' 
import './nextProduct.css'
function NextProduct() {
    const [material,setMaterial]=useState({
        material:[],
          
      })
      const history = useNavigate();
      const [product,setProduct]=useState({
        product:[],
      })
      const [data,setData]=useState({
        count:"",
        mid:"",
        pid:"", 
      })
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
       axios.post(`http://localhost:8080/api/v1/product/addMaterial/${data.mid}/${data.pid}`,{
                  count: data.count
       },{
        headers:{
       'Authorization': `Bearer ${localStorage.getItem("token")}` 
     }}).then(res=>{
         if(res.status===200)
       {
        setData({
            count:"",
            mid:"",
            pid:""
      
        });
        history('/NNP');   

      }
       })  
       
    }
      useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/material`,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}` 
            }}).then(
          (res)=>
          setMaterial({
            material:res.data
          })
        )
        axios.get(`http://localhost:8080/api/v1/product`,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}` 
            }}).then(
          (res)=>
          setProduct({
            product:res.data
          })
        )

    }, []);
  return (
    <div style={{background: "#eee",marginLeft:"300px",marginTop:"70px"}}>
      <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
      
        <div class="col-md-10">
            
        { material.material.map(m=>{
                    

            var sr="assets/img/"+ m.image;
           return (
               <div>
            <div  class="row p-2 bg-white border rounded">
                <div  class="col-md-3 mt-1"><img alt='img1' height="1050px" width="1050px" class="img-fluid img-responsive rounded product-image" src={sr} /></div>
                <div style={{paddingTop:"22px"}} class="col-md-6 mt-1">
                    <h5 >{m.wareHouse.department.name}</h5>
                    <div class="mt-1 mb-1 spec-1"><span>material id  :</span><span>{m.id}</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>count :</span><span>{m.count}</span></div>
                    <div class="mt-1 mb-1 spec-1"><span>availability :</span><span>{m.availability}</span></div>
                    <p class="text-justify text-truncate para mb-0"><span>description :</span>{m.description}<br></br></p>
                </div>
                
            </div>
            
            </div>
           )
        })
    } 
    </div>
    </div>
     
      
     <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
      
        <div class="col-md-10">
            
            { product.product.map(m=>{
                        
    
                var sr="assets/img/"+ m.photo;
               return (
                   <div>
                <div  class="row p-2 bg-white border rounded">
                    <div  class="col-md-3 mt-1"><img alt='img1' class="img-fluid img-responsive rounded product-image" src={sr} /></div>
                    <div style={{paddingTop:"22px"}} class="col-md-6 mt-1">
                        <h5 >{m.wareHouse.department.name}</h5>
                        <div class="mt-1 mb-1 spec-1"><span>product id  :</span><span>{m.id}</span></div>
                        <div class="mt-1 mb-1 spec-1"><span>estimatedTime :</span><span>{m.estimatedTime}</span></div>
                        <div class="mt-1 mb-1 spec-1"><span>height*with :</span><span>{`${m.height}* ${m.width}`}</span></div>
                        <p class="text-justify text-truncate para mb-0"><span>description :</span>{m.description}<br></br></p>
                    </div>
                    
                </div>
                
                </div>
               )
            })
        }                   
         </div>  
        </div>
        </div>
    </div>
    <div>
        <form>
    <input onChange={(e)=>handle(e)} value={data.mid} id="mid" style={{marginLeft:"120px"}} placeholder='choose the id of material' type="text"/>
    <input onChange={(e)=>handle(e)} value={data.pid} id="pid" style={{marginLeft:"50px"}} placeholder='choose the id of product' type="text"/>
    <input onChange={(e)=>handle(e)} value={data.count} id="count" style={{marginLeft:"50px"}} placeholder='choose the count of material' type="text"/>

    <button onClick={(e)=>submit(e)} style={{marginLeft:"50px"}} class='btn btn-success ' type='submit'> Add  </button>
    </form>
    
</div>

    </div>
    
  )
}

export default NextProduct
