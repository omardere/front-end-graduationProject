import React,{useState,useEffect} from 'react'
import axios from 'axios' 
import './nextProduct.css'
function NextNextProduct() {

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
       axios.post(`http://localhost:8080/api/v1/product/addEnrolledProduct/${data.mid}/${data.pid}`,{
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
      }
       })  
       
    }
      useEffect(() => {
      
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
    <div>
        <form >
    <input onChange={(e)=>handle(e)} value={data.mid} id="mid" style={{marginLeft:"120px"}} placeholder='  id of product' type="text"/>
    <input onChange={(e)=>handle(e)} value={data.pid} id="pid" style={{marginLeft:"50px"}} placeholder=' id of enrooled product' type="text"/>
    <input onChange={(e)=>handle(e)} value={data.count} id="count" style={{marginLeft:"50px"}} placeholder=' count of material' type="text"/>

    <button onClick={(e)=>submit(e)} style={{marginLeft:"50px"}} class='btn btn-success ' type='submit'> Add  </button>
    </form>
    
</div>

    </div>
    
  )
}

export default NextNextProduct
